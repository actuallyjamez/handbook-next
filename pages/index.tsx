import Sidebar from "../components/sidebar/Sidebar"
import React from "react"
import withData from '../lib/apollo'


const Index = () => (
  <div>
    <Sidebar/>
  </div>
);

export default withData(Index);
