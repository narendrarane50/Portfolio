import './globals.css';

const siteUrl = 'https://portfolio-narendrarane50s-projects.vercel.app';

export const metadata = {
  title: 'Narendra Rane | Portfolio',
  description: 'Portfolio of Narendra Rane, MS Applied Machine Learning student at the University of Maryland.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Narendra Rane | Portfolio',
    description: 'Portfolio of Narendra Rane, MS Applied Machine Learning student at the University of Maryland.',
    url: siteUrl,
    siteName: 'Narendra Rane Portfolio',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
