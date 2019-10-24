import React from "react"

function SidebarItem(props) {
  return (
    <div className="w-full hover:bg-gray-300 px-2">
      <div>{props.title}</div>
    </div>
  )
}

export default SidebarItem
