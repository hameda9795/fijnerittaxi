import Link from "next/link";
import { Home, AlertTriangle, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Pagina niet gevonden | Fijn Rit Taxi",
  description: "De pagina die u zoekt is niet gevonden. Ga terug naar de homepage of ontdek onze diensten.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#1a5f3f"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,96.3,-2.8C95.9,12.4,88.9,27.3,79.5,40.4C70.1,53.5,58.3,64.8,44.7,73.5C31.1,82.2,15.5,88.3,-0.6,89.4C-16.7,90.5,-33.4,86.6,-47.9,78C-62.4,69.4,-74.7,56.1,-83.1,41.1C-91.5,26.1,-96,9.4,-94.1,-6.6C-92.2,-22.6,-83.9,-37.9,-73.1,-50.2C-62.3,-62.5,-49,-71.8,-34.8,-78.9C-20.6,-86,-5.3,-90.9,4.9,-91.5C15.1,-92.1,30.6,-83.6,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="text-center z-10 max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center relative shadow-inner">
            <AlertTriangle className="w-12 h-12 text-red-500" />
            <div className="absolute -bottom-2 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white">
              404
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Oeps! Pagina niet gevonden
        </h1>
        <p className="text-gray-600 mb-8 text-lg font-medium">
          De rit die je zoekt lijkt niet te bestaan. Misschien is de URL verkeerd ingevoerd of is de pagina verplaatst.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold bg-[#1a5f3f] text-white hover:bg-[#2d8a5e] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Home className="w-4 h-4" />
            Naar Home
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 text-center w-full text-sm text-gray-400 font-medium">
        Fijn Rit Taxi • Gorinchem
      </div>
    </div>
  );
}
