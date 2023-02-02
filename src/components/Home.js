import AboutUs from "./AboutUs";
import Carousal from "./Carousal";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home(){
    return <>
        <Navbar></Navbar>
        {/* <LoginForm></LoginForm> */}
        <Carousal></Carousal>
        <div className="container">Since 1991, Edutech is a leading provider of World Class educational equipments, digital learning solutions and services for academic institutions, corporates & government initiatives.</div>
        <figure className="text-center">
        <blockquote className="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
        </figure>
        <div className="container"><AboutUs></AboutUs></div>
        <div><p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p></div>
        <Footer></Footer>
    </>;
}