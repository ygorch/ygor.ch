import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Web Developer</title>
      </Head>

      <main>
        <h1 className="title">
          Ygor Chaves
        </h1>

        <p className="description">
          Web Developer
        </p>

        <div className="grid">

          <a className="card" href="https://nextjs.org/learn">
            <h3>GitHub &rarr;</h3>
          </a>

          <a className="card" href="https://nextjs.org/docs">
            <h3>Linkedin &rarr;</h3>
          </a>

          <a className="card" href="https://github.com/vercel/next.js/tree/master/examples">
            <h3>Behance &rarr;</h3>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #e9135f;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1000px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 100%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #f3f3f3;
          border-radius: 3px;
          transition: transform .2s 0s ease-in-out,
                      box-shadow .2s 0s ease-in,
                      color .2s .15s ease,
                      border-color .2s .3s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #e9135f;
          border-color: #e9135f;
          transform: translateY(-10px);
          box-shadow: 0 8px 6px -6px rgba(0,0,0,.1);
        }

        .card h3 {
          margin: 0;
          font-size: 1.5rem;
          text-align: right;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
