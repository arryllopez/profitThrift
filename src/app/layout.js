import './globals.css'

export const metadata = {
  title: 'Thrift Scanner',
  description: 'Scan thrifted items and get eBay prices instantly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
}