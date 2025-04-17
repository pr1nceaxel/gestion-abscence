import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM creneaux_horaire ORDER BY id_creneaux ASC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching creneaux:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { heure_debut, heure_fin } = body;

    // Vérifie s'il existe déjà
    const check = await pool.query(
      'SELECT * FROM creneaux_horaire WHERE heure_debut = $1 AND heure_fin = $2',
      [heure_debut, heure_fin]
    );

    if (check.rows.length > 0) {
      return NextResponse.json({ error: "Ce créneau existe déjà." }, { status: 400 });
    }

    // Insert le nouveau créneau
    const result = await pool.query(
      'INSERT INTO creneaux_horaire (heure_debut, heure_fin) VALUES ($1, $2) RETURNING *',
      [heure_debut, heure_fin]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating creneau:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
