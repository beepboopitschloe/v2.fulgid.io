import * as showdown from 'showdown'

const converter = new showdown.Converter({
  tables: true,
  simpleLineBreaks: false
})
converter.setFlavor('github')

export const Markdown = ({ markdown }) => (
  <div className="react-markdown"
       dangerouslySetInnerHTML={{__html: converter.makeHtml(markdown) }}/>
)
