"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Login() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('/api/auth', {  // Asegúrate de que la ruta es /api/login
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }

      const data = await response.json();

      // Almacena el token en localStorage
      localStorage.setItem('token', data.token);

      // Redirige al usuario a la página de perfil
      router.push('/principaluser');
    } catch (error) {
      // Maneja errores de la solicitud
      console.error('Error en la solicitud de autenticación:', error);
    }
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Inicia Sesion con tu cuenta</h2>
          <p className="mt-2 text-muted-foreground">
            ¿No tienes una cuenta?{" "}
            <a href="/register" className="font-medium text-primary hover:underline">
              Regístrate
            </a>
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full"
              placeholder="Introduzca su correo electrónico"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Contraseña</Label>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                ¿Olvidó su contraseña?
              </a>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 mb-8 block w-full"
              placeholder="Introduzca su contraseña"
            />
          </div>
          <Button type="submit" className="w-full">Ingresar</Button>
        </form>
      </div>
    </div>
  );
}