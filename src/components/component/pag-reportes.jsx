import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ReportResumen } from './report-resumen';
import { ReportUsuario } from './report-usuario';
import { RutaReporte } from './ruta-reporte';

export function PagReportes() {
  const [selectedReport, setSelectedReport] = useState('');

  const handleReportSelection = (report) => {
    setSelectedReport(report);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base" prefetch={false}>
            <BarChartIcon className="w-6 h-6" />
            <span className="sr-only">Reporte de Valoraciones</span>
          </Link>
          <button className="font-bold" onClick={() => handleReportSelection('Resumen')}>
            Resumen
          </button>
          <button className="text-muted-foreground" onClick={() => handleReportSelection('Usuarios')}>
            Usuarios
          </button>
          <button className="text-muted-foreground" onClick={() => handleReportSelection('Autobuses')}>
            Autobuses
          </button>
          <button className="text-muted-foreground" onClick={() => handleReportSelection('Uso de la Aplicación')}>
            Uso de la App
          </button>
        </nav>
      </header>
      {selectedReport === 'Resumen' && <Resumen />}
      {selectedReport === 'Usuarios' && <Usuarios />}
        {selectedReport === 'Autobuses' && <Autobuses />}
        {selectedReport === 'Uso de la Aplicación' && <UsoApp />}
        </div>
        
  );
}
function Resumen() {
  return (
    <div>
      <ReportResumen/>
 
    </div>
  );
}
function Usuarios() {
  return (
    <div>
    <ReportUsuario/>

    </div>
  );
}

function Autobuses() {
  return (
    <div>
    <RutaReporte/>
    </div>
  );
}

function UsoApp() {
  return (
    <div>
      <h2>Reporte de Uso de la Aplicación</h2>
      {/* Contenido del reporte de uso de la aplicación */}
    </div>
  );
}

function BarChartIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}