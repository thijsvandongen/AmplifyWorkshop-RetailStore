import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'RetailStore',
  description: 'RetailStore application using AWS Amplify and NextJS13',
}
export const viewport: Viewport = {
  themeColor: 'black',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}