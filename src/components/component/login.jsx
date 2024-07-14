import React from "react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Login() {
  return (
    (<div
      className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Inicia Sesion con tu cuenta</h2>
          <p className="mt-2 text-muted-foreground">
            Don&apos;no posees un acuenta?{" "}
            <Link
              href=""
              className="font-medium text-primary hover:underline"
              prefetch={false}>
              Registrate
            </Link>
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="username">Nombre de Usuario</Label>
            <Input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="mt-1 block w-full"
              placeholder="Introduzca su Nombre de Usuario" />
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
              className="mt-1 block w-full"
              placeholder="Introduzca su clave" />
          </div>
          <Button type="submit" className="w-full">
            Ingresar
          </Button>
        </form>
      </div>
    </div>)
  );
}
