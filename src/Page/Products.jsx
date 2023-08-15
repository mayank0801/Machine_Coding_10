import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductHeader from "../Component/ProductHeader";
import { DataContext } from "../Context/DatContext";
import { filterData } from "../Utlis/utlis";

export default function Products() {
  const {
    products,
    dispatch,
    state: { filters }
  } = useContext(DataContext);

  const { SortBy, isLowStock, department } = filters;
  const navigate = useNavigate();
  const filterProduct = filterData(products, SortBy, isLowStock, department);

  function some() {
    console.log("UseEffect");
  }
  useEffect(() => {
    some();
    return () => {
      console.log("Cleanup");
      dispatch({ type: "CLEAR_FILTER" });
    };
  }, []);

  return (
    <div>
      <ProductHeader />
      <div className="products-container">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {filterProduct.map((data, index) => {
              return (
                <tr className="product-container" key={data.id}>
                  <td>
                    <img
                      onClick={() => navigate(`/product/${data.id}`)}
                      src={data.imageUrl}
                      height="60px"
                      width="60px"
                      alt="imageProduct"
                    />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.description}</td>
                  <td>{data.price}</td>
                  <td>{data.stock}</td>
                  <td>{data.supplier}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
