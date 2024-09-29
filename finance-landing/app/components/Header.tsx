// components/Header.tsx
import { FaHatWizard } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-pink-300 to-blue-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <FaHatWizard size={32} className="text-white" />
          <span className="ml-2 text-white font-bold text-xl">Conto de Fadas</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link href="/sobre" className="text-white px-3 py-2 rounded bg-blue-400 hover:bg-blue-500">
            Sobre
          </Link>
          <Link href="/conexao" className="text-white px-3 py-2 rounded bg-blue-400 hover:bg-blue-500">
            Conexão
          </Link>
          <Link href="/contos" className="text-white px-3 py-2 rounded bg-blue-400 hover:bg-blue-500">
            Contos
          </Link>
          <button className="text-white px-3 py-2 rounded bg-blue-400 hover:bg-blue-500">Login</button>
        </nav>
      </div>
    </header>
  );
}