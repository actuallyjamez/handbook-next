import {gql} from "apollo-boost"
import {useQuery} from "@apollo/react-hooks"
import SidebarItem from "./SidebarItem"
import {GET_SIDEBAR_ITEMS} from '../../lib/queries'

const SidebarList = () => {
  const {loading, error, data, fetchMore} = useQuery(GET_SIDEBAR_ITEMS, {
    variables: {level: 0},
    notifyOnNetworkStatusChange: true
  })

  if (loading || error)
    return (
      <div>
        <h1>loading</h1>
      </div>
    )

  return (
    <div>
      {data.documents.edges.map((item, index) => (
        <div key={item.node.uuid} data-testid="postListListItem">
          <SidebarItem item={item.node}/>
        </div>
      ))}
    </div>
  )
}

export default SidebarList
