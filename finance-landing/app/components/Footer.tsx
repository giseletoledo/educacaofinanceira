// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mt-2">
            <a href="/about" className="hover:underline">Sobre</a>
            <a href="/connection" className="hover:underline">Conexão</a>
            <a href="/stories" className="hover:underline">Contos</a>
            <a href="/team" className="hover:underline">Equipe</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Contas de Fada. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }  