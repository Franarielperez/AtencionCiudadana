import { FileArchive } from 'lucide-react';

function ServiciosJudiciales() {
  return (
    <>
      <div className="mt-86 flex justify-center">
        <h1 className="text-4xl font-extrabold text-slate-800">
          Servicios Judiciales
        </h1>
      </div>
      <div className="mt-8 flex justify-center">
        <p>
          Accede a todos nuestros servicios de manera digital, rápida y segura
        </p>

        <div className="">
          <div>
            <div className="flex h-10 w-10 items-center justify-center border-2 border-blue-800 bg-blue-400 ">
              <FileArchive />
            </div>
            <h3>Guia Inteligente</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiciosJudiciales;
