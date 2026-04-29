"use client";
import React, { useEffect, useRef } from 'react';

const SmokeBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const config = {
            SIM_RESOLUTION: 128,
            DYE_RESOLUTION: 1024,
            DENSITY_DISSIPATION: 1,
            VELOCITY_DISSIPATION: 0.2,
            PRESSURE: 0.8,
            PRESSURE_ITERATIONS: 20,
            CURL: 30,
            SPLAT_RADIUS: 0.25,
            SPLAT_FORCE: 6000,
            SHADING: true,
            COLORFUL: true,
            COLOR_UPDATE_SPEED: 10,
            PAUSED: false,
            BACK_COLOR: { r: 5, g: 10, b: 21 },
            TRANSPARENT: false,
            BLOOM: true,
            BLOOM_ITERATIONS: 8,
            BLOOM_RESOLUTION: 256,
            BLOOM_INTENSITY: 0.8,
            BLOOM_THRESHOLD: 0.6,
            BLOOM_SOFT_KNEE: 0.7,
            SUNRAYS: true,
            SUNRAYS_RESOLUTION: 196,
            SUNRAYS_WEIGHT: 1.0,
        };

        const glOptions = {
            alpha: true,
            depth: false,
            stencil: false,
            antialias: false,
            preserveDrawingBuffer: false,
        };

        const gl = (canvas.getContext('webgl2', glOptions) || canvas.getContext('webgl', glOptions)) as any;
        if (!gl) return;

        const isWebGL2 = !!gl.clearBufferfv;
        let halfFloat: any;
        let supportLinearFiltering: any;

        if (isWebGL2) {
            gl.getExtension('EXT_color_buffer_float');
            supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
        } else {
            halfFloat = gl.getExtension('OES_texture_half_float');
            supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
        }

        gl.clearColor(0, 0, 0, 1);

        const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;

        function getSupportedFormat(gl: any, internalFormat: number, format: number, type: number) {
            if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
                switch (internalFormat) {
                    case gl.R16F: return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
                    case gl.RG16F: return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
                    default: return null;
                }
            }
            return { internalFormat, format };
        }

        function supportRenderTextureFormat(gl: any, internalFormat: number, format: number, type: number) {
            let texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

            let fbo = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

            let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
            return status === gl.FRAMEBUFFER_COMPLETE;
        }

        let formatRGBA = isWebGL2 ? getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType) : getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        let formatRG = isWebGL2 ? getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType) : getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        let formatR = isWebGL2 ? getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType) : getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);

        class Program {
            program: any;
            uniforms: any;
            constructor(vertexShader: any, fragmentShader: any) {
                this.program = createProgram(vertexShader, fragmentShader);
                this.uniforms = getUniforms(this.program);
            }
            bind() {
                gl.useProgram(this.program);
            }
        }

        function createProgram(vertexShader: any, fragmentShader: any) {
            let program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.trace(gl.getProgramInfoLog(program));
            return program;
        }

        function getUniforms(program: any) {
            let uniforms: any = [];
            let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
            for (let i = 0; i < uniformCount; i++) {
                let uniformName = gl.getActiveUniform(program, i).name;
                uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
            }
            return uniforms;
        }

        function compileShader(type: number, source: string, keywords?: string[]) {
            source = addKeywords(source, keywords);
            let shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.trace(gl.getShaderInfoLog(shader));
            return shader;
        }

        function addKeywords(source: string, keywords?: string[]) {
            if (!keywords) return source;
            let keywordsString = '';
            keywords.forEach(keyword => {
                keywordsString += '#define ' + keyword + '\n';
            });
            return keywordsString + source;
        }

        const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
            precision highp float;
            attribute vec2 aPosition;
            varying vec2 vUv;
            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform vec2 texelSize;
            void main () {
                vUv = aPosition * 0.5 + 0.5;
                vL = vUv - vec2(texelSize.x, 0.0);
                vR = vUv + vec2(texelSize.x, 0.0);
                vT = vUv + vec2(0.0, texelSize.y);
                vB = vUv - vec2(0.0, texelSize.y);
                gl_Position = vec4(aPosition, 0.0, 1.0);
            }
        `);

        const displayShaderSource = `
            precision highp float;
            precision highp sampler2D;
            varying vec2 vUv;
            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uTexture;
            uniform sampler2D uBloom;
            uniform sampler2D uSunrays;
            uniform vec2 texelSize;
            void main () {
                vec3 c = texture2D(uTexture, vUv).rgb;
                #ifdef SHADING
                    vec3 lc = texture2D(uTexture, vL).rgb;
                    vec3 rc = texture2D(uTexture, vR).rgb;
                    vec3 tc = texture2D(uTexture, vT).rgb;
                    vec3 bc = texture2D(uTexture, vB).rgb;
                    float dx = length(rc) - length(lc);
                    float dy = length(tc) - length(bc);
                    vec3 n = normalize(vec3(dx, dy, length(texelSize)));
                    vec3 l = vec3(0.0, 0.0, 1.0);
                    float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
                    c *= diffuse;
                #endif
                #ifdef BLOOM
                    vec3 bloom = texture2D(uBloom, vUv).rgb;
                    c += bloom;
                #endif
                float a = max(c.r, max(c.g, c.b));
                gl_FragColor = vec4(c, a);
            }
        `;

        const clearShader = compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;
            varying highp vec2 vUv;
            uniform sampler2D uTexture;
            uniform float value;
            void main () {
                gl_FragColor = value * texture2D(uTexture, vUv);
            }
        `);

        const splatShader = compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;
            varying vec2 vUv;
            uniform sampler2D uTarget;
            uniform float aspectRatio;
            uniform vec3 color;
            uniform vec2 point;
            uniform float radius;
            void main () {
                vec2 p = vUv - point.xy;
                p.x *= aspectRatio;
                vec3 splat = exp(-dot(p, p) / radius) * color;
                vec3 base = texture2D(uTarget, vUv).xyz;
                gl_FragColor = vec4(base + splat, 1.0);
            }
        `);

        const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;
            varying vec2 vUv;
            uniform sampler2D uVelocity;
            uniform sampler2D uSource;
            uniform vec2 texelSize;
            uniform float dt;
            uniform float dissipation;
            void main () {
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                gl_FragColor = texture2D(uSource, coord) / (1.0 + dissipation * dt);
            }
        `);

        const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;
            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uVelocity;
            void main () {
                float L = texture2D(uVelocity, vL).x;
                float R = texture2D(uVelocity, vR).x;
                float T = texture2D(uVelocity, vT).y;
                float B = texture2D(uVelocity, vB).y;
                float div = 0.5 * (R - L + T - B);
                gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
            }
        `);

        const curlShader = compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;
            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uVelocity;
            void main () {
                float L = texture2D(uVelocity, vL).y;
                float R = texture2D(uVelocity, vR).y;
                float T = texture2D(uVelocity, vT).x;
                float B = texture2D(uVelocity, vB).x;
                gl_FragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
            }
        `);

        const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
            precision highp float;
            precision highp sampler2D;
            varying vec2 vUv;
            varying vec2 vL;
            varying vec2 vR;
            varying vec2 vT;
            varying vec2 vB;
            uniform sampler2D uVelocity;
            uniform sampler2D uCurl;
            uniform float curl;
            uniform float dt;
            void main () {
                float L = texture2D(uCurl, vL).x;
                float R = texture2D(uCurl, vR).x;
                float T = texture2D(uCurl, vT).x;
                float B = texture2D(uCurl, vB).x;
                vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
                force /= length(force) + 0.0001;
                force *= curl * texture2D(uCurl, vUv).x;
                force.y *= -1.0;
                vec2 vel = texture2D(uVelocity, vUv).xy;
                gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
            }
        `);

        const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;
            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uPressure;
            uniform sampler2D uDivergence;
            void main () {
                float L = texture2D(uPressure, vL).x;
                float R = texture2D(uPressure, vR).x;
                float T = texture2D(uPressure, vT).x;
                float B = texture2D(uPressure, vB).x;
                float div = texture2D(uDivergence, vUv).x;
                gl_FragColor = vec4((L + R + B + T - div) * 0.25, 0.0, 0.0, 1.0);
            }
        `);

        const gradienSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            precision mediump sampler2D;
            varying highp vec2 vUv;
            varying highp vec2 vL;
            varying highp vec2 vR;
            varying highp vec2 vT;
            varying highp vec2 vB;
            uniform sampler2D uPressure;
            uniform sampler2D uVelocity;
            void main () {
                float L = texture2D(uPressure, vL).x;
                float R = texture2D(uPressure, vR).x;
                float T = texture2D(uPressure, vT).x;
                float B = texture2D(uPressure, vB).x;
                vec2 vel = texture2D(uVelocity, vUv).xy;
                gl_FragColor = vec4(vel - vec2(R - L, T - B), 0.0, 1.0);
            }
        `);

        const blit = (() => {
            gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
            gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(0);

            return (target: any, clear = false) => {
                if (target == null) {
                    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                } else {
                    gl.viewport(0, 0, target.width, target.height);
                    gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
                }
                if (clear) {
                    gl.clearColor(0, 0, 0, 1);
                    gl.clear(gl.COLOR_BUFFER_BIT);
                }
                gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
            };
        })();

        function createFBO(w: number, h: number, internalFormat: number, format: number, type: number, param: number) {
            gl.activeTexture(gl.TEXTURE0);
            let texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

            let fbo = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
            gl.viewport(0, 0, w, h);
            gl.clear(gl.COLOR_BUFFER_BIT);

            return {
                texture,
                fbo,
                width: w,
                height: h,
                texelSizeX: 1 / w,
                texelSizeY: 1 / h,
                attach(id: number) {
                    gl.activeTexture(gl.TEXTURE0 + id);
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    return id;
                }
            };
        }

        function createDoubleFBO(w: number, h: number, internalFormat: number, format: number, type: number, param: number) {
            let fbo1 = createFBO(w, h, internalFormat, format, type, param);
            let fbo2 = createFBO(w, h, internalFormat, format, type, param);
            return {
                width: w, height: h,
                texelSizeX: fbo1.texelSizeX, texelSizeY: fbo1.texelSizeY,
                get read() { return fbo1; },
                set read(v: any) { fbo1 = v; },
                get write() { return fbo2; },
                set write(v: any) { fbo2 = v; },
                swap() { let t = fbo1; fbo1 = fbo2; fbo2 = t; }
            };
        }

        const clearProgram = new Program(baseVertexShader, clearShader);
        const splatProgram = new Program(baseVertexShader, splatShader);
        const advectionProgram = new Program(baseVertexShader, advectionShader);
        const divergenceProgram = new Program(baseVertexShader, divergenceShader);
        const curlProgram = new Program(baseVertexShader, curlShader);
        const vorticityProgram = new Program(baseVertexShader, vorticityShader);
        const pressureProgram = new Program(baseVertexShader, pressureShader);
        const gradienSubtractProgram = new Program(baseVertexShader, gradienSubtractShader);

        let displayProgram = new Program(baseVertexShader, compileShader(gl.FRAGMENT_SHADER, displayShaderSource, ["SHADING", "BLOOM"]));

        let dye: any, velocity: any, divergence: any, curl: any, pressure: any;

        function deleteFBO(fbo: any) {
            if (!fbo) return;
            gl.deleteTexture(fbo.texture);
            gl.deleteFramebuffer(fbo.fbo);
        }

        function deleteDoubleFBO(fbo: any) {
            if (!fbo) return;
            deleteFBO(fbo.read);
            deleteFBO(fbo.write);
        }

        function initFramebuffers() {
            let simRes = config.SIM_RESOLUTION;
            let dyeRes = config.DYE_RESOLUTION;
            let texType = halfFloatTexType;
            let rgba = formatRGBA!;
            let rg = formatRG!;
            let r = formatR!;
            let filtering = supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

            gl.disable(gl.BLEND);

            if (dye) deleteDoubleFBO(dye);
            if (velocity) deleteDoubleFBO(velocity);
            if (divergence) deleteFBO(divergence);
            if (curl) deleteFBO(curl);
            if (pressure) deleteDoubleFBO(pressure);

            dye = createDoubleFBO(dyeRes, dyeRes, rgba.internalFormat, rgba.format, texType, filtering);
            velocity = createDoubleFBO(simRes, simRes, rg.internalFormat, rg.format, texType, filtering);
            divergence = createFBO(simRes, simRes, r.internalFormat, r.format, texType, gl.NEAREST);
            curl = createFBO(simRes, simRes, r.internalFormat, r.format, texType, gl.NEAREST);
            pressure = createDoubleFBO(simRes, simRes, r.internalFormat, r.format, texType, gl.NEAREST);
        }

        initFramebuffers();

        function splat(x: number, y: number, dx: number, dy: number, color: { r: number, g: number, b: number }) {
            splatProgram.bind();
            gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
            gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas!.width / canvas!.height);
            gl.uniform2f(splatProgram.uniforms.point, x, y);
            gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
            gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS / 100.0);
            blit(velocity.write);
            velocity.swap();

            gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
            gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
            blit(dye.write);
            dye.swap();
        }

        function step(dt: number) {
            gl.disable(gl.BLEND);

            curlProgram.bind();
            gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
            gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
            blit(curl);

            vorticityProgram.bind();
            gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
            gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
            gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
            gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
            gl.uniform1f(vorticityProgram.uniforms.dt, dt);
            blit(velocity.write);
            velocity.swap();

            divergenceProgram.bind();
            gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
            gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
            blit(divergence);

            clearProgram.bind();
            gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
            gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
            blit(pressure.write);
            pressure.swap();

            pressureProgram.bind();
            gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
            gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
            for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
                gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
                blit(pressure.write);
                pressure.swap();
            }

            gradienSubtractProgram.bind();
            gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
            gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
            gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
            blit(velocity.write);
            velocity.swap();

            advectionProgram.bind();
            gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
            let velId = velocity.read.attach(0);
            gl.uniform1i(advectionProgram.uniforms.uVelocity, velId);
            gl.uniform1i(advectionProgram.uniforms.uSource, velId);
            gl.uniform1f(advectionProgram.uniforms.dt, dt);
            gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
            blit(velocity.write);
            velocity.swap();

            gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
            gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
            gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
            blit(dye.write);
            dye.swap();
        }

        let lastTime = Date.now();
        let animationFrameId: number;

        function update() {
            let now = Date.now();
            let dt = Math.min((now - lastTime) / 1000, 0.016);
            lastTime = now;

            step(dt);

            displayProgram.bind();
            gl.uniform2f(displayProgram.uniforms.texelSize, 1.0 / canvas!.width, 1.0 / canvas!.height);
            gl.uniform1i(displayProgram.uniforms.uTexture, dye.read.attach(0));
            blit(null);

            animationFrameId = requestAnimationFrame(update);
        }

        update();

        let isMouseDown = false;
        let lastMouseX = 0;
        let lastMouseY = 0;
        let currentColor = { r: 0.1, g: 0.2, b: 0.8 };

        function generateRandomColor() {
            const h = Math.random();
            const s = 1.0;
            const v = 1.0;

            let r = 0, g = 0, b = 0, i, f, p, q, t;
            i = Math.floor(h * 6);
            f = h * 6 - i;
            p = v * (1 - s);
            q = v * (1 - f * s);
            t = v * (1 - (1 - f) * s);
            switch (i % 6) {
                case 0: r = v, g = t, b = p; break;
                case 1: r = q, g = v, b = p; break;
                case 2: r = p, g = v, b = t; break;
                case 3: r = p, g = q, b = v; break;
                case 4: r = t, g = p, b = v; break;
                case 5: r = v, g = p, b = q; break;
            }
            // Scale down for smokey effect intensity
            return { r: r * 0.2, g: g * 0.2, b: b * 0.2 };
        }

        const handleDown = (e: any) => {
            isMouseDown = true;
            currentColor = generateRandomColor();
            const rect = canvas!.getBoundingClientRect();
            lastMouseX = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
            lastMouseY = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

            splat(lastMouseX / canvas!.width, 1.0 - lastMouseY / canvas!.height, (Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500, currentColor);
        };

        const handleUp = () => {
            isMouseDown = false;
        };

        const handleMove = (e: any) => {
            if (!isMouseDown) return;
            const rect = canvas!.getBoundingClientRect();
            let x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
            let y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

            let dx = (x - lastMouseX) * 5.0;
            let dy = (y - lastMouseY) * 5.0;

            splat(x / canvas!.width, 1.0 - y / canvas!.height, dx, -dy, currentColor);

            lastMouseX = x;
            lastMouseY = y;
        };

        window.addEventListener('mousedown', handleDown);
        window.addEventListener('mouseup', handleUp);
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchstart', handleDown);
        window.addEventListener('touchend', handleUp);
        window.addEventListener('touchmove', handleMove);

        const handleResize = () => {
            canvas!.width = window.innerWidth;
            canvas!.height = window.innerHeight;
            initFramebuffers();
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousedown', handleDown);
            window.removeEventListener('mouseup', handleUp);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchstart', handleDown);
            window.removeEventListener('touchend', handleUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10"
            style={{ background: '#050a15' }}
        />
    );
};

export default SmokeBackground;
