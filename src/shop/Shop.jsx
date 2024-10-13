import { useState } from "react"
import PageHeader from "../components/PageHeader"
import Data from '../products.json'
import ProductsCard from "./ProductsCard"
import Pagination from "./Pagination"
import Search from "./Search"
import ShopCategory from "./ShopCategory"
const showResults ="Showing 01 - 12 of 139 Results"
const Shop =()=> {
    const [gridList,setGridList]=useState(true)
    const [products,setProducts]=useState(Data)
    const [currentPage,setCurrentPage]=useState(1)
    const productsPerPage=12
    const indexOfLastProduct=currentPage*productsPerPage
    const indexOfFirstProduct=indexOfLastProduct- productsPerPage
    const currentProducts= products.slice(indexOfFirstProduct,indexOfLastProduct,)

    // function to change the current page
    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }


    // filter products based on a category 
    const [selectedcategory ,setSelectedcategory]=useState("All")
    const menuItems =[...new Set(Data.map((val)=>val.category))]

    const filteredItems=(curcat)=>{
        const newItems=Data.filter((newVal)=>{
            return newVal.category===curcat
        })
        setSelectedcategory(curcat)
        setProducts(newItems)
    }

  return (
    <div>
      <PageHeader title="Our shop page" curPage="Shops"/>

      {/* shop page */}
      <div className="shop-page padding-tb ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
                <article>
                    {/* layout and title here */}
                    <div className="shop-title d-flex flex-wrap justify-content-between">
                        <p>{showResults}</p>
                        <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                            <a href="" className="grid" onClick={()=>setGridList(!gridList)}>
                                <i className="icofont-ghost"></i>
                            </a>
                            <a href="" className="list" onClick={()=>setGridList(!gridList)}>
                                <i className="icofont-listine-dots"></i>
                            </a>
                        </div>
                    </div>



                    {/* products cards */}
                    <div>
                        <ProductsCard gridList={gridList} products={currentProducts}/>
                    </div> 
                    <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                    activePage={currentPage}
                    />  

                </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                 <Search products={products} gridList={gridList} />
                 <ShopCategory 
                 filteredItems={filteredItems}
                 setItem={setProducts}
                 menuItems={menuItems}
                 setProducts={setProducts}
                 selectedcategory={selectedcategory}
                 />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
