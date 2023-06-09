import 'normalize.css';
import { Metadata } from "next"
import Context from "./contexts"

export const metadata: Metadata = {
  title: 'Garbage Discharge Count System',
  description: 'A project based on old research to count objects flowing on river.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Context>
          {children}
        </Context>
      </body>
    </html>
  )
}
