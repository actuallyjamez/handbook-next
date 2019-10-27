import {gql} from "apollo-boost"
import {monitorEventLoopDelay} from "perf_hooks"

const GET_SIDEBAR_ITEMS = gql`
    {
        documents(level: 0) {
            edges {
                node {
                    title
                    level
                    uuid
                    slugUrl
                    icon
                    hasChildren
                }
            }
        }
    }
`;

const GET_PAGE = gql`
    query Page($slugUrl: String) {
        documents(slugUrl: $slugUrl){
            edges {
                node {
                    title
                    text
                    icon
                    level
                    uuid
                    slugUrl
                    hasChildren
                    ancestors {
                        title
                        slugUrl
                        position
                    }
                    collaborators {
                        firstName
                        lastName
                        email
                    }
                }
            }
        }
    }

`
export {
  GET_SIDEBAR_ITEMS,
  GET_PAGE
}
