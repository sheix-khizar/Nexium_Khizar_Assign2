import { NextResponse } from 'next/server';
import { generateSummary } from '@/lib/gemini';

export async function POST(req: Request) {
  const { blog } = await req.json();

  if (!blog) {
    return NextResponse.json({ error: 'No blog provided' }, { status: 400 });
  }

  const summary = await generateSummary(blog);
  return NextResponse.json({ summary });
}
