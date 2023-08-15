import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DatContext";

export default function Departement() {
  const { productCategory, dispatch } = useContext(DataContext);
  const navigate = useNavigate();
  const navigateDepartmentHandler = (e) => {
    console.log(e.target.textContent);
    dispatch({
      type: "FILTER_APPLY",
      payload: { type: "department", value: e.target.textContent }
    });
    navigate("/products");
  };
  return (
    <div
      className="productCategory-container"
      onClick={navigateDepartmentHandler}
    >
      {productCategory.map((category) => (
        <div
          className="category-container"
          key={category.id}
          value={category.name}
        >
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
}
