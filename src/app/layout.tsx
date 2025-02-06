import type { Metadata } from 'next';
import { Montserrat, Prata } from 'next/font/google';
import './globals.css';

const prata = Prata({
  variable: '--font-prata',
  subsets: ['latin'],
  weight: '400',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Organizador de Colaboradores',
  description: 'Organize seus colaboradores de forma simples e eficiente',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${prata.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
