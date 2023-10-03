import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'
import useAllBrandPage from './../../Hooks2/Brands/useAllBrandPage';
const AllBrand = () => {
    const [state, loading, pageCount, getPage] = useAllBrandPage();
    console.log(pageCount);
    return (
      <div style={{ minHeight: "670px" }}>
        <BrandContainer data={state.data} loading={loading} />
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onpress={getPage} />
        ) : null}
      </div>
    );
}

export default AllBrand
