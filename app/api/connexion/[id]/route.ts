import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const session = await auth();
    
    if (!session?.user?.email) {
      return new NextResponse(null, { status: 401 });
    }

    const utilisateur = await prisma.utilisateurs.findUnique({
      where: { email: session.user.email },
      select: { nom: true, email: true, role: true } // Sélectionnez les champs nécessaires
    });

    if (!utilisateur) {
      return new NextResponse(null, { status: 404 });
    }

    return NextResponse.json(utilisateur);
  } catch (error) {
    console.error('Erreur:', error);
    return new NextResponse(null, { status: 500 });
  }
}
