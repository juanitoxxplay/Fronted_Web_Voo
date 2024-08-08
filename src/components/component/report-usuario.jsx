import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CartesianGrid, XAxis, Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip , ResponsiveContainer} from "recharts"

export function ReportUsuario() {
  return (
    (<div className="flex flex-col w-full min-h-screen bg-background">
      <main className="flex flex-col gap-8 p-4 md:gap-12 md:p-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Valoración Promedio</CardTitle>
              <StarIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">4.7</div>
              <p className="text-xs text-muted-foreground">Basado en 2,345 reseñas</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Usuarios Activos</CardTitle>
              <UsersIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">12,345</div>
              <p className="text-xs text-muted-foreground">+15% en el último mes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Autobuses Activos</CardTitle>
              <BusIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">345</div>
              <p className="text-xs text-muted-foreground">+5% en el último mes</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Valoraciones de Usuarios</CardTitle>
              <StarIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <BarchartChart className="aspect-[3/2]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Uso de la Aplicación</CardTitle>
              <ActivityIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <LinechartChart className="aspect-[3/2]" />
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Rutas Preferidas</CardTitle>
              <MapIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <PiechartcustomChart className="aspect-[3/2]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Comentarios de Usuarios</CardTitle>
              <MessageCircleIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Juan Pérez</div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                    <div className="text-sm leading-loose text-muted-foreground">
                      <p>
                        La aplicación es muy fácil de usar y me ha ayudado a planificar mejor mis viajes en autobús. Me
                        gusta la información en tiempo real sobre los horarios y ubicación de los autobuses.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">María Gómez</div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                    <div className="text-sm leading-loose text-muted-foreground">
                      <p>
                        Me encanta la aplicación, es muy útil y me ha ayudado a llegar a mis destinos a tiempo. El
                        diseño es intuitivo y fácil de usar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>)
  );
}

function ActivityIcon(props) {
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
      <path
        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>)
  );
}


function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>)
  );
}


function BarchartChart(props) {
  return (
    <div {...props} >
      <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={[
          { month: "January", desktop: 186 },
          { month: "February", desktop: 305 },
          { month: "March", desktop: 237 },
          { month: "April", desktop: 73 },
          { month: "May", desktop: 209 },
          { month: "June", desktop: 214 },
        ]}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip cursor={false} content={<CustomTooltip hideLabel />} />
        <Bar dataKey="desktop" fill="#8884d8" radius={8} />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


function BusIcon(props) {
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
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path
        d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>)
  );
}


function LinechartChart(props) {

    return (
      <div {...props} >
         <ResponsiveContainer width="100%" height="100%">
        
        <LineChart
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{ left: 12, right: 12 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Tooltip cursor={false} content={<CustomTooltip hideLabel />} />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }


function MapIcon(props) {
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
      <path
        d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>)
  );
}


function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>)
  );
}


function PiechartcustomChart(props) {
  return (
    <div {...props} style={{ minHeight: "300px" }}>
      <PieChart>
        <Tooltip cursor={false} content={<CustomTooltip hideLabel />} />
        <Pie
          data={[
            { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
            { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
            { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
            { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
            { browser: "other", visitors: 90, fill: "var(--color-other)" },
          ]}
          dataKey="visitors"
          nameKey="browser"
          cx="50%"
          cy="50%"
          outerRadius="80%"
        />
      </PieChart>
    </div>
  );
}

function StarIcon(props) {
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
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}

function CustomTooltip({ active, payload, label, hideLabel }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded shadow">
        {!hideLabel && <p className="label">{`${label}`}</p>}
        <p className="intro">{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
