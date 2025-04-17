import { NextResponse } from 'next/server';
import pool from '@/lib/db';


export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    const { code, capacite, disponible } = await request.json();

    const result = await pool.query(
      'UPDATE salles SET code = $1, capacite = $2, disponible = $3 WHERE id = $4 RETURNING *',
      [code, capacite, disponible, id]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating salle:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const result = await pool.query('DELETE FROM salles WHERE id = $1 RETURNING *', [params.id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Salle not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Salle deleted successfully' });
  } catch (error) {
    console.error('Error deleting salle:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

