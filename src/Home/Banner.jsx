import { useState } from "react";
import productdata from "../products.json"
import { Link } from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";


const title =(
    <h2>
        Search Your One From <span>Thousands</span> of Product
    </h2>
)
const desc="We have the Largest Collection of products"
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];
function Banner() {
    const [searchInput,setSearchInput]=useState("")
    const [filteredProduct,setFilteredProduct]=useState(productdata)
    // console.log(productdata)

    // search functionality
    const handleSearch=(e)=>{
        console.log(e.target.value)
        const searchTerm = e.target.value
        setSearchInput(searchTerm)

        // filtering product based on search
        const filtered =productdata.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredProduct(filtered)
    } 
  return (
    <div className="banner-section style-4 ">
      <div className="container">
        <div className="banner-content">
            {title}
            <form >
                <SelectedCategory select={"all"}/>
                <input type="text" name="search" id="search" placeholder="Search your product" value={searchInput} onChange={handleSearch} />
                <button type="submit">
                <i className="icofont-search"></i>

                </button>
            </form>
            <p>{desc}</p>
            <ul className="lab-ul">
                {
                    searchInput && filteredProduct.map((product,i)=>
                    <li key={i}>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li>
                    )
                }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner
