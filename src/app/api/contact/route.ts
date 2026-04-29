import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    console.log(`Received contact from ${name} (${email}) for ${service}: ${message}`);

    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}
