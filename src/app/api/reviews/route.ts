import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, rating, product, text } = await req.json();

  if (!name || !rating || !text) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const formEmail = process.env.FORM_EMAIL;
  if (!formEmail) {
    return NextResponse.json({ error: 'Not configured' }, { status: 500 });
  }

  const formData = new FormData();
  formData.append('name', name);
  formData.append('rating', String(rating));
  formData.append('product', product || 'не вказано');
  formData.append('message', text);
  formData.append('_subject', `Новий відгук від ${name} — Pearl Boutique`);
  formData.append('_captcha', 'false');
  formData.append('_template', 'table');

  const res = await fetch(`https://formsubmit.co/${formEmail}`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Send failed' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
