import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { cedula, nombre, apellido, fechaNacimiento, clave, confirmClave, email, role, telefono, ...additionalData } = await request.json();

    // Verificar que los campos requeridos estén presentes
    if (!cedula || !nombre || !apellido || !fechaNacimiento || !clave || !confirmClave || !email || !role || !telefono) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Log para verificar los datos recibidos
    console.log('Received data:', { cedula, nombre, apellido, fechaNacimiento, clave, confirmClave, email, role, telefono, ...additionalData });

    // Aquí puedes agregar la lgica para procesar el registro,
    // como guardar los datos en una base de datos

    // Ejemplo de respuesta
    return NextResponse.json({ message: 'User registered successfully', data: { cedula, nombre, apellido, fechaNacimiento, email, role, telefono, ...additionalData } }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}