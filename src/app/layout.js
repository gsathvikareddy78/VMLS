import './globals.css';
import Header from './homepage/header1/Header1';
import Header2 from './homepage/header2/Header2';
import Footer from './homepage/Footer/Footer';

export const metadata = {
  title: "VMLS - Vinayaka Mission's Law School",
  description: "Official website of Vinayaka Mission's Law School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Raleway Font */}
        <link
          href="https://fonts.googleapis.com/css?family=Raleway%3A400%2C500%2C600%2C700"
          rel="stylesheet"
        />

        {/* Inter Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <Header2 />
        <main>{children}</main>
        <br/>
        <Footer/>
      </body>
    </html>
  );
}
