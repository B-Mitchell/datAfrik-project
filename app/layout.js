import './globals.css'

export const metadata = {
  title: 'DataFrik Project',
  description: 'Built by Mitchell',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
