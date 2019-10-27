import {useQuery} from "@apollo/react-hooks"
import {gql} from "apollo-boost"
import SidebarItem from "./SidebarItem"
import SidebarList from "./SidebarList"


const Sidebar = () => {

  return (
    <div className="bg-gray-200 h-screen w-64 max-w-xs h-full">
      <SidebarList/>
    </div>
  )
}

export default Sidebar
