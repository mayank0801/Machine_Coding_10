import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DatContext";

export default function ProductHeader() {
  const {
    productCategory,
    dispatch,
    state: {
      filters: { isLowStock, department, SortBy }
    }
  } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="product-header">
      <h3>Products</h3>
      <select
        value={department}
        onChange={(e) =>
          dispatch({
            type: "FILTER_APPLY",
            payload: { type: "department", value: e.target.value }
          })
        }
      >
        <option value="All Department">All Department</option>
        {productCategory.map((category) => (
          <option key={category.id}>{category.name}</option>
        ))}
      </select>
      <label>
        <input
          type="checkbox"
          checked={isLowStock}
          onChange={(e) =>
            dispatch({
              type: "FILTER_APPLY",
              payload: { type: "isLowStock", value: e.target.checked }
            })
          }
        />
        Low Stock Item
      </label>
      <select
        value={SortBy}
        onChange={(e) =>
          dispatch({
            type: "FILTER_APPLY",
            payload: {
              type: "SortBy",
              value: e.target.value
            }
          })
        }
      >
        <option>Name</option>
        <option>Price</option>
        <option>Stock</option>
      </select>
      <button onClick={() => navigate("/newproduct")}>New</button>
    </div>
  );
}
