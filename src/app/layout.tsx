export const metadata = {
  title: 'sscodes',
  description: 'portfolio website of Sanket Sarkar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
