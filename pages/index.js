import { gql, graphql } from 'react-apollo'
import Link from 'next/link'
import App from '../components/App'
import Header from '../components/Header'
import { Loader } from '../components/Loader'
import { Main } from '../components/Main'
import Nav from '../components/Nav'
import withData from '../util/withData'

export default ({ url: { pathname } }) => (
  <App>
    <Nav pathname={pathname} />
    <div>
      <Header
        title='fulgid.io'
        subLine='Noah Muth'
        pageImage='/static/records.svg'
        isIcon
      />
      <Main>
        wow look at MEEE I have a website!!!
      </Main>
    </div>
  </App>
)
