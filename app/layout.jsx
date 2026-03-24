import "./globals.css";

export const metadata = {
  title: 'DelhiNCR Homes – Premium Real Estate in Delhi NCR',
  description:
    'Find verified luxury villas, apartments, and plots in Delhi, Noida, Ghaziabad, and Gurgaon. Trusted real estate partner.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
