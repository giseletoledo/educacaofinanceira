// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative">
      <div className="relative h-screen">
        <Image 
          src="/images/hero.jpeg" 
          alt="Hero Image" 
          fill 
          className="object-cover" 
          quality={100} 
        />
      </div>
    </main>
  );
}
