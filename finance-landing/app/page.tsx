// app/page.tsx
import Image from 'next/image';
import ChatBot from './components/ChatBot'; // Ajuste o caminho se necessário

export default function Home() {
  return (
    <div className="relative w-full h-screen"> {/* Garantir que o contêiner pai tenha altura e largura */}
      <Image
        src="/images/hero.jpeg"
        alt="Hero Image"
        layout="fill" // Usar layout fill para cobrir o contêiner
        objectFit="cover" // Manter a proporção e cobrir o contêiner
        quality={100}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Adicione qualquer conteúdo adicional que você queira aqui */}
      </div>
      <ChatBot /> {/* Adiciona o bot de chat */}
    </div>
  );
}
