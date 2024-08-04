import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    // Hacer una solicitud a la API REST externa
    const externalResponse = await fetch('https://7fedbc42-bc55-4035-9f7c-d381e92107bd.mock.pstmn.io', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (externalResponse.ok) {
      const data = await externalResponse.json();
      // Suponiendo que la API externa devuelve un token o información del usuario
      return NextResponse.json(data, { status: 200 });
    } else {
      const errorData = await externalResponse.json();
      return NextResponse.json({ error: errorData.message }, { status: externalResponse.status });
    }
  } catch (error) {
    // Manejar errores de red u otros problemas
    return NextResponse.json({ error: 'Credenciales invalidas' }, { status: 401 });
  }
}