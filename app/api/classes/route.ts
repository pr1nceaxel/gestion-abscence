import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM classe ORDER BY id_classe ASC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching classes:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { libelle } = body;

    const result = await pool.query(
      'INSERT INTO classe ( libelle) VALUES ($1) RETURNING *',
      [ libelle]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating class:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}