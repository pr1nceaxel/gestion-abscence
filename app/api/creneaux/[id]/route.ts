import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { heure_debut, heure_fin } = body;

    const result = await pool.query(
      'UPDATE creneaux_horaire SET heure_debut = $1, heure_fin = $2 WHERE id_creneaux = $3 RETURNING *',
      [heure_debut, heure_fin, params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Creneau not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating creneau:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);

    const result = await pool.query(
      'DELETE FROM creneaux_horaire WHERE id_creneaux = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Créneau introuvable" }, { status: 404 });
    }

    return NextResponse.json({ message: "Créneau supprimé avec succès" });
  } catch (error) {
    console.error("Erreur suppression créneau :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

