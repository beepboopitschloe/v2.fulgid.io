import { gql, graphql } from 'react-apollo'
import { compose, branch, renderComponent } from 'recompose'
import Link from 'next/link'
import App from '../components/App'
import Header from '../components/Header'
import { Loader } from '../components/Loader'
import { Main } from '../components/Main'
import Nav from '../components/Nav'
import withData from '../util/withData'

const AllPosts = ({ url: { pathname }, data }) => {
  const { loading, allPosts } = data

  const posts = allPosts
              ? allPosts.map(p => (
                <li key={p.id}>
                  <Link href={`/post/details?slug=${p.slug}`} as={`/post/${p.slug}`}>
                    <a>{p.title}</a>
                  </Link>
                </li>
              ))
              : []

  return (
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
          <ul>
            {posts}
          </ul>
        </Main>
      </div>
    </App>
  )
}

const withGraphQl = graphql(gql`
  query allPosts {
    allPosts {
      id
      slug
      title
      body
      createdAt
    }
  }`)

const withLoader = branch(
  ({ data }) => data && data.loading,
  renderComponent(Loader)
)

const enhance = compose(
  withGraphQl,
  withLoader
)

export default withData(enhance(AllPosts))
