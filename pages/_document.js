import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <span style={{opacity: '0.5', marginLeft: '9.5rem'}}>
        Modified from _document.js
        </span>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
