
import React from "react"
import Link from "next/link"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
    <header className="bg-background border-b px-4 lg:px-6 flex items-center justify-between h-14">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Iniciar Sesión
        </Link>
        <Link
          href="/register"
          className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Registrarse
        </Link>
      </div>
    </header>
    <main className="flex-1" >
     <section className="w-full pt-12 md:pt-24 lg:pt-32 min-h-[600px] border-y bg-[url('/imagen1.png')] bg-cover bg-center bg-no-repeat">
  
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16 ">
          <div className="grid max-w-[1800px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Bienvenido a Voo!!
              </h1>
              <p className=" mx-auto pt-5 max-w-[700px] text-muted-foreground md:text-xl">
               Aplicacion Movil Inteligente para mejorar la expericencia del transporte publico
              </p>
            </div>
            
            <div className="flex flex-col items-start space-y-4">
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Conócenos
              </Link>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
               Informacion de Interes

              </Link>
            </div>
          </div>
          



          
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className=" space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nuestros Servicios</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Voo te resuelve</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conectate con nosotros y mejora la forma en la que  utilizas el transporte publico 
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1 ">
              <h3 className="text-lg font-bold">Nivel de sactisfaccion</h3>
              <p className="text-sm text-muted-foreground text-justify">
              Por que su opinion nos ayuda a crecer, la aplicacion cuenta con un apartado donde pordra dejar su critica, y su nivel de contento con el servicio prestado por nuestro sistema y el de las lineas de rutas, y asi siempre estar en constante mejora
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Interfaz interactiva</h3>
              <p className="text-sm text-muted-foreground text-justify">
              La app combina la tecnologia de geolocalizacion de GoogleMaps con una interfaz sencilla y agradable, para que cualquier persona pueda usarla, y que con la simple accion de presionar un boton pueda obtener informacion veraz para planificar sus viajes con el transporte publico
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Soporte Tecnico</h3>
              <p className="text-sm text-muted-foreground text-justify">
               Nuestro equipo de soporte técnico está aquí para brindarte la ayuda que requieras. Puedes contar con nosotros para garantizar que tu experiencia con la aplicación sea lo más fluida y satisfactoria posible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Clientes</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Confiamos en las mejores empresas del mundo. Ayudamos a empresas de todos los tamaños.
            </p>
          </div>
          <div className="divide-y rounded-lg border">
  <div className="flex w-full items-stretch justify-center">
    <img src="./telefono.svg" alt="Phone Icon" className=" ms:ml-28 lg:ml-58 w-1/2 h-auto object-contain" />
    <div className="flex flex-col justify-center  p-4 w-2/2">
      <h3 className="text-3xl font-bold">Llámanos</h3>
      <p className="text-lg text-muted-foreground">+123 456 789</p>
      <h3 className="text-3xl font-bold">Atención al Cliente</h3>
      <p className="text-lg text-muted-foreground">24/7</p>
      <h3 className="text-3xl font-bold">Contacto</h3>
      <p className="text-lg text-muted-foreground">contacto@acme.com</p>
    </div>
  </div>
</div>
          <div className="flex justify-center space-x-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contáctanos
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Más Información
            </Link>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Empresa</h3>
          <Link href="#" prefetch={false}>
            Sobre Nosotros
          </Link>
          <Link href="#" prefetch={false}>
            Nuestro Equipo
          </Link>
          <Link href="#" prefetch={false}>
            Trabaja con Nosotros
          </Link>
          <Link href="#" prefetch={false}>
            Noticias
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Productos</h3>
          <Link href="#" prefetch={false}>
            Productos
          </Link>
          <Link href="#" prefetch={false}>
            Soluciones
          </Link>
          <Link href="#" prefetch={false}>
            Servicios
          </Link>
          <Link href="#" prefetch={false}>
            Accesorios
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Recursos</h3>
          <Link href="#" prefetch={false}>
            Blog
          </Link>
          <Link href="#" prefetch={false}>
            Comunidad
          </Link>
          <Link href="#" prefetch={false}>
            Soporte
          </Link>
          <Link href="#" prefetch={false}>
            Preguntas Frecuentes
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#" prefetch={false}>
            Política de Privacidad
          </Link>
          <Link href="#" prefetch={false}>
            Términos de Servicio
          </Link>
          <Link href="#" prefetch={false}>
            Política de Cookies
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Contacto</h3>
          <Link href="#" prefetch={false}>
            Soporte
          </Link>
          <Link href="#" prefetch={false}>
            Ventas
          </Link>
          <Link href="#" prefetch={false}>
            Prensa
          </Link>
          <Link href="#" prefetch={false}>
            Alianzas
          </Link>
        </div>
      </div>
    </footer>
  </div>
)
}

function MountainIcon(props) {
return (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
)
}


function XIcon(props) {
return (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)
}
