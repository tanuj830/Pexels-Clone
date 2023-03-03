import * as React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'


export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

  {/* @import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Amatic+SC:wght@700&family=Changa&family=Monoton&family=Poppins&family=Shadows+Into+Light&family=Shantell+Sans:wght@300&family=Work+Sans&display=swap'); */}
      </Head >
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
