import "./globals.css";
import FloatingButtons from '@/components/FloatingButtons'

export const metadata = {
  title: 'DelhiNCR Homes – Premium Real Estate in Delhi NCR',
  description:
    'Find verified luxury villas, apartments, and plots in Delhi, Noida, Ghaziabad, Gurugram, Faridabad, Rohtak, Panipat, Alwar and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
