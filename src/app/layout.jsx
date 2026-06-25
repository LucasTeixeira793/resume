import { Montserrat } from 'next/font/google';
import './globals.css';

// Configurando a fonte Montserrat
const montserrat = Montserrat({ 
  subsets: ['latin'],
  // Essa variável é a ponte mágica que conecta a fonte com o Shadcn e o Tailwind
  variable: '--font-sans', 
});

export const metadata = {
  title: 'Lucas Menezes - Resume',
  description: 'Portfolio and resume of Lucas Menezes Teixeira, Back-end Developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}