import Sidebar from "../components/sidebar/Sidebar"

const withSidebar = Page => {
  return () => (
    <div className="flex w-screen relative flex-grow flex-shrink">
      <div className="flex-shrink-0 flex-grow-0">
        <Sidebar/>
      </div>
      <div id="content" className="h-screen max-h-full overflow-x-hidden" style={{width: "calc(100vw - 16rem)"}}>
        <Page/>
      </div>
    </div>
  )
}

export default withSidebar;
