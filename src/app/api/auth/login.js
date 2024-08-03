export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
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
          res.status(200).json(data);
        } else {
          const errorData = await externalResponse.json();
          res.status(externalResponse.status).json({ error: errorData.message });
        }
      } catch (error) {
        // Manejar errores de red u otros problemas
        res.status(500).json({ error: 'Error de servidor' });
      }
    } else {
      // Manejar métodos HTTP no permitidos
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  