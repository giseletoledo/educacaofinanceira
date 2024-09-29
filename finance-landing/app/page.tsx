// app/page.tsx
import Image from 'next/image';
import ChatBot from './components/ChatBot'; // Ajuste o caminho se necessário

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/hero.jpeg"
        alt="Hero Image"
        fill // Propriedade para preencher o contêiner
        className="object-cover" // Usar Tailwind para ajustar a proporção
        quality={100}
        priority // Carregar essa imagem como prioridade (opcional)
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Conteúdo adicional aqui */}
      </div>
      <ChatBot /> {/* Adiciona o bot de chat */}
    </div>
  );
}