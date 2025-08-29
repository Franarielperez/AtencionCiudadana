import { Building } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { SquareUserRound } from 'lucide-react';
function info() {
  const blue = {
    color: 'blue',
    fontWeight: '600',
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="flex flex-row justify-center">
          <span className="text-md mt-10 flex items-center rounded-2xl border border-blue-800 bg-blue-100 px-2.5 py-0.5 font-medium text-blue-800">
            <Building className="mr-1 text-blue-800" size={16} />
            Oficina de Atención Ciudadana Judicial
          </span>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center">
          <h1 className="bg-gradient-to-t from-[#1D1CE5] to-[#03346E] bg-clip-text text-7xl font-extrabold text-transparent">
            Te acercamos la
          </h1>
          <h1 className="text-6xl font-extrabold text-[#0065F8]">
            Justicia Digital
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-2">
          <span className="mt-10 flex items-center rounded-2xl border border-green-400 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-[#1B4242] dark:text-green-600">
            <Zap className="" size={16} />
            Sencilla
          </span>
          <span className="mt-10 flex items-center rounded-2xl border border-purple-400 bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-400">
            <Sparkles />
            Clara
          </span>
          <span className="mt-10 flex items-center rounded-2xl border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-400">
            <SquareUserRound />
            Transparente
          </span>
        </div>
        <div className="mt-8 flex justify-center">
          <p className="text-xl font-semibold text-gray-500">
            Una iniciativa revolucionaria del Poder Judicial de la Provincia de
            Jujuy para <br />
            &nbsp; brindar servicios digitales{''}{' '}
            <span style={blue}>accesibles </span> <span style={blue}> y</span>
            {''} <span style={blue}>eficientes</span> a todos los ciudadanos.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center"></div>
      </div>
    </>
  );
}
export default info;
