import './globals.css';

export const metadata = {
  title: 'Narendra Rane | Portfolio',
  description: 'Portfolio of Narendra Rane, MS Applied Machine Learning student at the University of Maryland.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
