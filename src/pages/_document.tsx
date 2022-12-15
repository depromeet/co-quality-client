import { Head, Html, Main, NextScript } from "next/document"

function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="onboard-modal"></div>
      </body>
    </Html>
  )
}

export default Document
