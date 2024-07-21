"use client"
import React from "react"
import Link from "next/link"
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Login() {
  const router = useRouter()
 
  async function handleSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('id')
    const password = formData.get('password')
 
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
      router.push('/profile')
    } else {
      // Handle errors
    }
  }
 
  return (
    (<div
      className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Inicia Sesion con tu cuenta</h2>
          <p className="mt-2 text-muted-foreground">
            No posees un acuenta?{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:underline"
              prefetch={false}>
              Registrate
            </Link>
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="id">Cedula de Identidad</Label>
            <Input
              id="id"
              name="id"
              type="text"
              autoComplete="id"
              required
              className="mt-1 block w-full"
              placeholder="Introduzca su Cedula de Identidad" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Clave de Acceso</Label>
              <Link
                href="#"
                className="text-sm font-medium text-primary hover:underline"
                prefetch={false}>
               Olvido su Clave?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 mb-8 block w-full"
              placeholder="Introduzca su clave" />
          </div>
          <Button type="submit" className="w-full">Ingresar</Button>
        </form>
      </div>
    </div>)
  );
}
