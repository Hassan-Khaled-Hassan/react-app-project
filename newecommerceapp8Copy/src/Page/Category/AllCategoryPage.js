import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";
import useAllCategoryPage from "../../Hooks2/Category/useAllCategoryPage";
const AllCategoryPage = () => {
 const [state, loading, pageCount, getPage] = useAllCategoryPage();
    return (
      <div style={{ minHeight: "670px" }}>
        <CategoryContainer data={state.data} loading={loading} />
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onpress={getPage} />
        ) : null}
      </div>
    );
};

export default AllCategoryPage;
