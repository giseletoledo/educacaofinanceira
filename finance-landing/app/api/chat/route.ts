// app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003', // ou outro modelo que você desejar
      prompt: `Respond with financial advice: ${prompt}`,
      max_tokens: 150,
    }),
  });

  const data = await response.json();
  return NextResponse.json({ result: data.choices[0].text });
}