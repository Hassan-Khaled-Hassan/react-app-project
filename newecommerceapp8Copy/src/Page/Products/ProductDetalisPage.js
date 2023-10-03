import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import { useParams } from 'react-router-dom'
import useHomeProduct1 from '../../Hooks2/Products/useHomeProduct1'
import useProductDetails from '../../Hooks2/Products/useProductDetails'


const ProductDetalisPage = () => {
    const { id } = useParams();
   const [item, images, cat, brand, prod, loading] = useProductDetails(id);
   let arr=[]
   if (prod){
       arr = prod.slice(0,5)
   }
   else {
    arr=[]
   }
   console.log(id)
     return (
       <div style={{ minHeight: "670px" }}>
         <CategoryHeader />
         <Container>
           <ProductDetalis />
           <RateContainer />
           <CardProductsContainer 
             Items={arr}
             loading={loading}
             title="منتجات قد تعجبك"
           />
         </Container>
       </div>
     );
}

export default ProductDetalisPage
