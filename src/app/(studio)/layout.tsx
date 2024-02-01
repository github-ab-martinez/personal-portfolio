import '../globals.css';

export const metadata = {
  title: 'A.b. Martinez - Sanity CMS',
  description:
    "The Sanity CMS dashboard for A.b. Martinez's personal portfolio site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
