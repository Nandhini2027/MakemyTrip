import { Link, Outlet } from "react-router-dom";

export default function Side(){
    return(
        <>
        <nav>
            <ul className="siddiv">
                <li>
                    <Link className="lay" to="/">Home</Link>
                </li>
                <li>
                    <Link className="lay" to="/about">About</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>        
    )
}
