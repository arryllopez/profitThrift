import './globals.css'

export const metadata = {
  title: 'profitThrift',
  description: 'Scan your antique and vintage items and find their rightful eBay market price!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
}