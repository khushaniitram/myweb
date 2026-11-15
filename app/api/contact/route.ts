import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';
import { logToGoogleSheet } from '@/lib/sheets';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    const ip = req.headers.get('x-forwarded-for') ?? null;
    const timestamp = new Date().toISOString();

    // 1. Log to Google Sheet (fire-and-forget)
    void logToGoogleSheet({
      type: 'contact',
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
      ip,
      timestamp,
    });

    // 2. Log to Supabase if configured (fire-and-forget)
    const supabase = getSupabaseClient();
    if (supabase) {
      void supabase
        .from('contact_messages')
        .insert({
          name: String(name).trim(),
          email: String(email).trim(),
          message: String(message).trim(),
          visitor_ip: ip,
        })
        .then(({ error }) => {
          if (error) console.error('[Supabase contact error]', error.message);
        });
    }

    return NextResponse.json({ success: true, message: 'Message recorded successfully' });
  } catch (error: any) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
