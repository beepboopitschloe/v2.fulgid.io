import Head from 'next/head'
import globalStyle from '../style/global'

const App = ({ children }) => (
  <div>
    <Head>
      <title>fulgid</title>

      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' />
      <link href="https://fonts.googleapis.com/css?family=Crimson+Text|Gentium+Book+Basic:700" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" />
    </Head>

    {children}

    <footer>
      © 2017 Noah Muth
    </footer>

    <style jsx global>{`${globalStyle}`}</style>
  </div>
)

export default App
