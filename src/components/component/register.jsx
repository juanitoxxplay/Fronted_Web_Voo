"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Register() {
  const [formData, setFormData] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    clave: "",
    confirmClave: "",
    email: "",
    role: "",
    telefono: "",
  })
  
  const [additionalData, setAdditionalData] = useState({})
  const [selectedRole, setSelectedRole] = useState("")

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleAdditionalDataChange = (field, value) => {
    setAdditionalData({
      ...additionalData,
      [field]: value,
    })
  }

  const handleRoleChange = (role) => {
    setSelectedRole(role)
    handleChange("role", role)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Combine the basic form data with the additional data based on the role
    const dataToSubmit = { ...formData, ...additionalData }

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSubmit),
    })

    const result = await response.json()
    console.log(result)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Formulario de Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="role">Seleccione rol</Label>
              <Select value={selectedRole} onValueChange={handleRoleChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="propietarioAutobus">Propietario Autobus</SelectItem>
                    <SelectItem value="administradorLinea">Administrador Linea</SelectItem>
                    <SelectItem value="administradorGeneral">Administrador General</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cedula">Cedula</Label>
                  <Input id="cedula" value={formData.cedula} onChange={(e) => handleChange("cedula", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" value={formData.nombre} onChange={(e) => handleChange("nombre", e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="apellido">Apellido</Label>
                  <Input id="apellido" value={formData.apellido} onChange={(e) => handleChange("apellido", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fechaNacimiento">Fecha Nacimiento</Label>
                  <Input id="fechaNacimiento" type="date" value={formData.fechaNacimiento} onChange={(e) => handleChange("fechaNacimiento", e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="clave">Clave</Label>
                  <Input id="clave" type="password" value={formData.clave} onChange={(e) => handleChange("clave", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmClave">Confirmar Clave</Label>
                  <Input id="confirmClave" type="password" value={formData.confirmClave} onChange={(e) => handleChange("confirmClave", e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" value={formData.telefono} onChange={(e) => handleChange("telefono", e.target.value)} />
                </div>
              </div>
            </div>

            {selectedRole === "propietarioAutobus" && (
              <div className="bg-muted p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Propietario Autobus Information</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="autobus-placa">Placa Autobus</Label>
                    <Input id="autobus-placa" onChange={(e) => handleAdditionalDataChange("autobusPlaca", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="autobus-marca">Marca Autobus</Label>
                    <Input id="autobus-marca" onChange={(e) => handleAdditionalDataChange("autobusMarca", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="autobus-modelo">Modelo Autobus</Label>
                    <Input id="autobus-modelo" onChange={(e) => handleAdditionalDataChange("autobusModelo", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="autobus-anio">Año Autobus</Label>
                    <Input id="autobus-anio" onChange={(e) => handleAdditionalDataChange("autobusAnio", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="autobus-capacidad">Capacidad Autobus</Label>
                    <Input id="autobus-capacidad" onChange={(e) => handleAdditionalDataChange("autobusCapacidad", e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {selectedRole === "administradorLinea" && (
              <div className="bg-muted p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Informacion linea de Ruta</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="linea-nombre">Nombre Linea</Label>
                    <Input id="linea-nombre" onChange={(e) => handleAdditionalDataChange("lineaNombre", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linea-rif">RIF</Label>
                    <Input id="linea-rif" onChange={(e) => handleAdditionalDataChange("lineaRif", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linea-ubicacion">Ubicación Oficinas</Label>
                    <Input id="linea-ubicacion" onChange={(e) => handleAdditionalDataChange("lineaUbicacion", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linea-cargo">Tipo de Cargo</Label>
                    <Input id="linea-cargo" onChange={(e) => handleAdditionalDataChange("lineaCargo", e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {selectedRole === "administradorGeneral" && (
              <div className="bg-muted p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Confirmacionde Administrador General</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="general-confirmToken">Token de Autorizacion</Label>
                    <Input id="general-confirmToken" onChange={(e) => handleAdditionalDataChange("generalConfirmToken", e.target.value)} />
                  </div>
                </div>
              </div>
            )}
            
            <Button type="submit" className="w-full">ACEPTAR</Button>
          </div>
        </div>
      </form>
    </div>
  )
}
