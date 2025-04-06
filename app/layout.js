// app/layout.js

'use client';
import './globals.css';


import MegaMenu from './components/MegaMenu';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
 

  return (
    <html lang="fr">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Capriola&family=DM+Serif+Display:ital@0;1&family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet"/>
        
      </head>
      <body className="relative">
      
          <header>
            <MegaMenu />
          </header>
        

        <main
      
        >
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
