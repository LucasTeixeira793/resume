import { Montserrat } from 'next/font/google';
import './globals.css';

// Configurando a fonte Montserrat
const montserrat = Montserrat({ 
  subsets: ['latin'],
  // Essa variável é a ponte mágica que conecta a fonte com o Shadcn e o Tailwind
  variable: '--font-sans', 
});

export const metadata = {
  title: 'Lucas Menezes - Currículo',
  description: 'Portfólio e Currículo de Lucas Menezes Teixeira, Desenvolvedor Back-end.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}