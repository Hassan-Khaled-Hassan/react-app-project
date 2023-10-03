import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import useHomeProduct1 from '../../Hooks2/Products/useHomeProduct1';
const HomePage = () => {
    const [Items, loading] = useHomeProduct1();
    return (
      <div className="font" style={{ minHeight: "670px" }}>
        <Silder />
        <HomeCategory />
        <CardProductsContainer
          loading={loading}
          Items={Items}
          title="الاكثر مبيعا"
          btntitle="المزيد"
          pathText="/products"
        />
        <DiscountSection />
        <CardProductsContainer
          title="احدث الازياء"
          btntitle="المزيد"
          pathText="/products"
          Items={Items}
          loading={loading}
        />
         <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />
      </div>
    );
}

export default HomePage
