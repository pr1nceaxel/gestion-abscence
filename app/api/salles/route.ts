export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM salles ORDER BY id ASC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching salles:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function POST(request: Request) {
  const client = await pool.connect(); // Utilisez un client dédié pour la transaction

  try {
    const body = await request.json();
    console.log('Données reçues:', body);

    const { code, capacite, disponible } = body;

    // Vérifiez les types des données
    if (typeof code !== 'string' || typeof capacite !== 'number' || typeof disponible !== 'boolean') {
      throw new Error('Types de données invalides');
    }

    // Testez d'abord une requête simple sans paramètres
    const testQuery = await client.query('SELECT 1+1 AS result');
    console.log('Test requête simple:', testQuery.rows[0]);


    
    // Puis essayez la requête paramétrée
    const result = await client.query(
      'INSERT INTO salles (code, capacite, disponible) VALUES ($1, $2, $3) RETURNING *',
      [code, capacite, disponible]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error('Erreur détaillée:', {
      message: error.message,
      stack: error.stack,
      query: error.query, // Affiche la requête qui a échoué (si disponible)
    });
    return NextResponse.json(
      { error: 'Erreur serveur', details: error.message },
      { status: 500 }
    );
  } finally {
    client.release(); // Libère toujours le client
  }
}

