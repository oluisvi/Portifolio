import CategoryProducts from "./CategoryProducts";
import SideFilter from "./SideFilter";

function MainPageCategory() {
    return(
        
        <>
        <section className="main-category-load">
            
            <SideFilter/>
            <CategoryProducts/>

        </section>
        
        </>

    );
}

export default MainPageCategory;