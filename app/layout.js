import '@/styles/globals.scss';
import Script from 'next/script';
import Header from '@/components/Header/Header';
import Footer from '@/components/footer/Footer';
import ScrollHandler from './utils/ScrollHandler';

export const metadata = {
  title: 'Sito Pilota - Villa Grey Template',
  description: 'Sito web per la gestione del Pilota Villa Grey',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollHandler />
        <Script src="https://kit.fontawesome.com/4e0389fd82.js" />
      </body>
    </html>
  );
}
