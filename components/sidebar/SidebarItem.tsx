import Link from "next/link"

const SidebarItem = props => {
  return (
    <div>
      <Link href="/p/[slug]" as={`/p/${props.item.slugUrl}`}>
        <div className="item w-full hover:bg-gray-300 px-2 font-semibold select-none flex items-center cursor-pointer">
          <div className="mr-1">{props.item.icon}</div>
          <div>{props.item.title}</div>
        </div>
      </Link>
      <style jsx>{`
        .item {
        font-size: 14px;
        padding-top: 2px;
        padding-bottom: 2px;
        min-height: 27px;
        }
      `}</style>
    </div>
  )
}

export default SidebarItem
