import withData from '../lib/apollo'
import withSidebar from "../layouts/withSidebar"


const Index = () => (
  <div>
    {/*<p>welcome to the epic handbook</p>*/}
  </div>
);

export default withData(withSidebar(Index));
