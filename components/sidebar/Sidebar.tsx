import {useQuery} from "@apollo/react-hooks"
import {gql} from "apollo-boost"
import React from "react"
import SidebarItem from "./SidebarItem"


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

function Sidebar() {

  const {loading, error, data, fetchMore} = useQuery(GET_SIDEBAR_ITEMS, {
    variables: {level: 0},
    notifyOnNetworkStatusChange: true
  });

  if (loading)
    return (
      <div>
        <h1>loading</h1>
      </div>
    )

  return (
    <div className="bg-gray-200 h-screen w-64 max-w-xs">
      {data.documents.edges.map((item, index) => (
        <div key={item.node.uuid} data-testid="postListListItem">
            <SidebarItem title={item.node.title}/>
        </div>
      ))}
    </div>
  );
}

export default Sidebar

