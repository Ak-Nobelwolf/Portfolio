// import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
// import '../styles/Layout.css'

const Layout = () => {
  return (
    <div className="Layout">
      <Sidebar />
      {/* <div className="page">
        <Outlet />
      </div> */}
    </div>
  )
}

export default Layout