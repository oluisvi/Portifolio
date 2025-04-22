import BeforeNav from "../views/header/BeforeNav";
import Nav from "../views/header/Nav";
import Banner from "../views/homepage/Banner";
import Brands from "../views/homepage/Brands";
import NewArrivals from "../views/homepage/NewArrivals";
import TopSelling from "../views/homepage/TopSelling";
import CustomerRatings from "../views/homepage/CustomerRatings";
import BBDS from "../views/homepage/BBDS";
import Newsletter from "../views/homepage/Newsletter";
import Footer from "../views/footer/Footer";
import UnderFooter from "../views/footer/UnderFooter";



export default function Home() {
  return ( 

    <>
    <BeforeNav/>
    <Nav/>
    <Banner/>
    <Brands/>
    <NewArrivals/>
    <TopSelling/>
    <BBDS/>
    <CustomerRatings/>
    <Newsletter/>
    <Footer/>
    <UnderFooter/>
    </> 
    
);  
}

