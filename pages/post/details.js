import React from 'react'
import { compose, branch, renderComponent } from 'recompose'
import { gql, graphql } from 'react-apollo'
import * as showdown from 'showdown'
import App from '../../components/App'
import Nav from '../../components/Nav'
import { Loader } from '../../components/Loader'
import { Markdown } from '../../components/Markdown'
import { Main } from '../../components/Main'
import Header from '../../components/Header'
import withData from '../../util/withData'

const converter = new showdown.Converter({ tables: true, simpleLineBreaks: false })
converter.setFlavor('github')

const Post = ({ url: { pathname }, data: { loading, Post } = { loading: true } }) => {
  const pageImage = Post && Post.image ? `https://media.graphcms.com/resize=w:80,h:80,fit:crop/${Post.record.image.handle}` : null
  if (loading) return <p>loading</p>

  const body = Post && <Markdown markdown={Post.body} />

  return (
  <App>
    <Nav pathname={pathname} />
    <div>
      <Header title={Post.title}
              subLine={Post.subtitle}
              pageImage={pageImage}
              isIcon={false} />
      <Main>{body}</Main>
    </div>

    <style jsx>{`
        article {
          text-align: justify;
        }
      `}</style>
  </App>
  )
}

const withGraphQl = graphql(gql`
  query postDetails($slug: String!) {
    Post(slug: $slug) {
      id
      title
      subtitle
      body
    }
  }`, {
    options: ({ url: { query: { slug } } }) => ({ variables: { slug } })
  })

const withLoader = branch(
  ({ data }) => data && data.loading,
  renderComponent(Loader)
)

const enhance = compose(
  withData,
  withGraphQl,
  withLoader,
)

export default enhance(Post)
