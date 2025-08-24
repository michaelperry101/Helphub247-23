import '../globals.css'

export const metadata = {
  title: 'Helphub247',
  description: 'Support hub demo site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
