// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-pink-300 to-blue-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo com Imagem */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo_contas.png" // Caminho da imagem no diretório 'public/images'
              alt="Conto de Fadas Logo"
              width={150} // Largura da imagem
              height={150} // Altura da imagem
            />
          </Link>
        </div>

        {/* Navigation Links como botões */}
        <nav className="flex space-x-4">
          <Link href="/sobre">
            <button className="bg-[#A8C9FF] text-white px-4 py-2 rounded-lg shadow-lg shadow-gray-500 hover:bg-blue-300 transition">
              Sobre
            </button>
          </Link>
          <Link href="/conexao">
            <button className="bg-[#A8C9FF] text-white px-4 py-2 rounded-lg shadow-lg shadow-gray-500 hover:bg-blue-300 transition">
              Conexão
            </button>
          </Link>
          <Link href="/contos">
            <button className="bg-[#A8C9FF] text-white px-4 py-2 rounded-lg shadow-lg shadow-gray-500 hover:bg-blue-300 transition">
              Contos
            </button>
          </Link>
          <button className="bg-[#A8C9FF] text-white px-4 py-2 rounded-lg shadow-lg shadow-gray-500 hover:bg-blue-300 transition">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}