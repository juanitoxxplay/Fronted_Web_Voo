import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CartesianGrid, XAxis, Bar, BarChart, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export function PagSoporte() {
  return (
    (<div className="flex flex-col w-full min-h-screen">
      <header
        className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reporte de Fallas y Quejas</h1>
        <Button variant="ghost" size="icon" className="rounded-full">
          <BellIcon className="w-6 h-6" />
          <span className="sr-only">Notificaciones</span>
        </Button>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas de Fallas y Quejas</CardTitle>
              <CardDescription>Resumen de los reportes recibidos en los últimos 30 días.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div
                  className="bg-primary text-primary-foreground rounded-lg p-4 flex flex-col items-center">
                  <div className="text-4xl font-bold">25</div>
                  <div className="text-sm">Fallas</div>
                </div>
                <div
                  className="bg-secondary text-secondary-foreground rounded-lg p-4 flex flex-col items-center">
                  <div className="text-4xl font-bold">12</div>
                  <div className="text-sm">Quejas</div>
                </div>
                <div
                  className="bg-muted text-muted-foreground rounded-lg p-4 flex flex-col items-center">
                  <div className="text-4xl font-bold">5</div>
                  <div className="text-sm">Sugerencias</div>
                </div>
              </div>
              <BarchartChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Reporte de Fallas y Quejas</CardTitle>
              <CardDescription>Detalles de los reportes recibidos en los últimos 30 días.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Área</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Servicio</TableCell>
                    <TableCell>Falla</TableCell>
                    <TableCell>El sistema se ha caído y no puedo acceder a mi cuenta.</TableCell>
                    <TableCell>2023-05-15</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-500 text-yellow-900">
                        En Progreso
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Facturación</TableCell>
                    <TableCell>Queja</TableCell>
                    <TableCell>Mi factura tiene un cargo incorrecto y no puedo obtener ayuda.</TableCell>
                    <TableCell>2023-04-30</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-500 text-green-900">
                        Resuelto
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Producto</TableCell>
                    <TableCell>Sugerencia</TableCell>
                    <TableCell>Sería útil tener una opción de suscripción mensual.</TableCell>
                    <TableCell>2023-03-20</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-500 text-blue-900">
                        Revisado
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Estado del Reporte</CardTitle>
              <CardDescription>Revisa el estado actual del reporte que has enviado.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="estado">Estado</Label>
                <Select defaultValue="en-progreso">
                  <SelectTrigger id="estado">
                    <SelectValue placeholder="Selecciona el estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en-progreso">En Progreso</SelectItem>
                    <SelectItem value="resuelto">Resuelto</SelectItem>
                    <SelectItem value="pendiente">Pendiente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="solucion">Solución</Label>
                <Textarea
                  id="solucion"
                  placeholder="Describe la solución al problema"
                  className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Actualizar Reporte
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Reporte de Falla Mayor a Tecnología</CardTitle>
              <CardDescription>
                Envía un reporte detallado de una falla mayor relacionada con tecnología.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="area">Área</Label>
                <Select defaultValue="tecnologia">
                  <SelectTrigger id="area">
                    <SelectValue placeholder="Selecciona el área" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tecnologia">Tecnología</SelectItem>
                    <SelectItem value="servicio">Servicio</SelectItem>
                    <SelectItem value="producto">Producto</SelectItem>
                    <SelectItem value="facturacion">Facturación</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea
                  id="descripcion"
                  placeholder="Describe la falla mayor en detalle"
                  className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Enviar Reporte
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>)
  );
}

function BarchartChart(props) {
  return (
    (<div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]">
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>)
  );
}


function BellIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}


function LinechartChart(props) {
  return (
    (<div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}>
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false} />
        </LineChart>
      </ChartContainer>
    </div>)
  );
}
