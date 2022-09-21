import Document, { Html, Head, Main, NextScript } from 'next/document';
// HtML 구성을 바꿀 때 사용
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notification"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
