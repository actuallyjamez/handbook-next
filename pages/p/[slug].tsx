import withSidebar from "../../layouts/withSidebar"
import withData from "../../lib/apollo"
import {useRouter} from 'next/router'
import {useQuery} from "@apollo/react-hooks"
import {GET_PAGE} from "../../lib/queries"
import {useEffect} from "react"
import setFavicon from "../../lib/setFavicon"
import ReactMarkdown from "react-markdown"
import CodeBlock from "../../renderers/codeBlock"

import Markdown from 'markdown-it'
import emoji from 'markdown-it-emoji'
import container from 'markdown-it-container'
import footnote from 'markdown-it-footnote'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import definitions from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import prism from 'markdown-it-prism';


const Content = props => {
  let title = 'Loading...'
  let icon = '🗎'

  const router = useRouter()
  const {loading, error, data, fetchMore} = useQuery(GET_PAGE, {
    variables: {slugUrl: router.query.slug},
    notifyOnNetworkStatusChange: true
  })

  const md = new Markdown({
    html: true,
    linkify: true,
    typographer: true
  })
    .use(emoji)
    .use(container, 'error')
    .use(container, 'warning')
    .use(container, 'success')
    .use(footnote)
    .use(subscript)
    .use(superscript)
    .use(definitions)
    .use(abbreviation)
    .use(insert)
    .use(mark)
    .use(prism)

  useEffect(() => {
    document.title = title;
    setFavicon(icon)
    document.getElementById('content').scrollTop = 0
  });

  if (data && !error) {
    title = `${data.documents.edges[0].node.title} | Handbook`
    icon = data.documents.edges[0].node.icon
    // @ts-ignore
    return (
      <div>
        <div className="flex flex-col flex-grow relative items-center overflow-auto mx-0">
          <div className="w-full flex flex-col items-center flex-grow-0 flex-shrink-0">
            <div style={{width: '900px'}} className="px-24 max-w-full mb-2">
              <div className="flex items-center justify-center flex-shrink-0 h-32 w-32 mt-40 self-start relative">
                <div style={{fontSize: '5rem'}} className="flex items-start justify-start w-32 h-32">
                  {data.documents.edges[0].node.icon}
                </div>
              </div>
              <div className="page-title text-gray-900 font-bold mb-2 flex items-center">
                <div className="max-w-full w-full whitespace-pre-wrap">
                  {data.documents.edges[0].node.title}
                </div>
              </div>
            </div>
          </div>
          <div style={{width: '900px'}}
               className="flex-shrink-0 flex-grow items-center flex flex-col px-24 max-w-full mb-64">
            <div className="w-full">
              {/*<ReactMarkdown renderers={{ code: CodeBlock }} source={data.documents.edges[0].node.text}/>*/}
              <div dangerouslySetInnerHTML={{__html: md.render(data.documents.edges[0].node.text)}}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>loading...</div>
  )
}

export default withData(withSidebar(Content))
