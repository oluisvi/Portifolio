import BeforeNav from "../../views/header/BeforeNav";
import Nav from "../../views/header/Nav";
import ProductReviews from "../../views/products/ProductReviews";
import YMAL from "../../views/products/YMAL";
import ProductView from "../../views/products/ProductView";
import Newsletter from "../../views/homepage/Newsletter";
import Footer from "../../views/footer/Footer";
import UnderFooter from "../../views/footer/UnderFooter";


const Products = () => {
    return ( 

        <>
        <BeforeNav/>
        <Nav/>
        <ProductView/>
        <ProductReviews/>
        <YMAL/>
        <Newsletter/>
        <Footer/>
        <UnderFooter/>
        </> 
        
    );
}

export default Products;