// app/layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Conto de Fadas',
  description: 'Um site de histórias mágicas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Main content */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}