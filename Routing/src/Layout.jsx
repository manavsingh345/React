import { Link,Outlet } from "react-router-dom"
export default function Layout(){
    return (
        <div>
            <Link to="/neet">Allen</Link> |
            <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
            <Link to="/neet/online-coaching-class-12">Class 12</Link> 
            <div>
                <Outlet/>
            </div>

            Footer
        </div>
    )
}

