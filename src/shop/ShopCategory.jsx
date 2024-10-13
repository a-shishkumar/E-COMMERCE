// import React from 'react'
// import Data from '../products.json'

// function ShopCategory({ filteredItem, setItem, menuItems , setProducts, selectedcategory }) {
//   return (<>
//     <div className='widget-header'>
//       <h5 className='ms-2'>All-Categories</h5>
//     </div>
//     <div>
//         <button onClick={()=>setProducts(Data)} className={`m-2 ${selectedcategory==="All" ? "bg-warning" : ""}`} >All</button>
//         {
//             menuItems.map((val,id)=>{
//                 return <button className={`m-2 ${selectedcategory===val ? "bg-warning" : ""}`} key={id}
//                 onClick={()=>filteredItem(val)}
//                 >{val}
                
//                 </button>
//             }


//             )
//         }
//     </div>
//     </>
//   )

// }

// export default ShopCategory




import React from 'react';
import Data from '../products.json';

function ShopCategory({ filteredItem, setItem, menuItems = [], setProducts, selectedcategory }) {
  return (
    <>
      <div className='widget-header'>
        <h5 className='ms-2'>All-Categories</h5>
      </div>
      <div>
        <button
          onClick={() => setProducts(Data)}
          className={`m-2 ${selectedcategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        {menuItems.map((val, id) => (
          <button
            className={`m-2 ${selectedcategory === val ? "bg-warning" : ""}`}
            key={id}
            onClick={() => filteredItem(val)}
          >
            {val}
          </button>
        ))}
      </div>
    </>
  );
}

export default ShopCategory;
