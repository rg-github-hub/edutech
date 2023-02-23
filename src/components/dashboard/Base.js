import Dashboard from "./Dashboard";
import SideNavbar from "./SideNavbar";
import TopNavbar from "./TopNavbar";
export default function Base(){
    return <>
        <div>
                <TopNavbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <SideNavbar/>
                  <Dashboard/>
             </div>
            </div>  
        </div>  
    </>
}