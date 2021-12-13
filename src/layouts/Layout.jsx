import { Outlet } from "react-router"
import NavBar from "../components/Topbar"

const Layout = () => {
    return (
        <div className="relative">
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default Layout;
