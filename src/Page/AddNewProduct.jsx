import { useContext, useState } from "react";
import { DataContext } from "../Context/DatContext";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export default function AddNewProduct() {
  const { dispatch, productCategory } = useContext(DataContext);

  const [productInfo, setProductInfo] = useState(null);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: uuid(),
        ...productInfo
      }
    });

    setProductInfo(null);
    navigate("/products");
  };
  console.log(productInfo);
  return (
    <div className="newForm">
      <h1 style={{ textAlign: "center" }}>Add A New Product</h1>
      <form onSubmit={submitHandler}>
        <label>
          Department
          <select
            onChange={(e) =>
              setProductInfo({ ...productInfo, department: e.target.value })
            }
          >
            <option value="Select Department">Select Department</option>
            {productCategory.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={productInfo?.name}
            onChange={(e) =>
              setProductInfo({ ...productInfo, name: e.target.value })
            }
            required
          />
        </label>
        <label>
          Description
          <textarea
            value={productInfo?.description}
            row="3"
            onChange={(e) =>
              setProductInfo({ ...productInfo, description: e.target.value })
            }
            required
          />
        </label>
        <label>
          Price
          <input
            type="number"
            value={productInfo?.price}
            onChange={(e) =>
              setProductInfo({ ...productInfo, price: Number(e.target.value) })
            }
            required
          />
        </label>
        <label>
          Stock
          <input
            type="number"
            value={productInfo?.stock}
            onChange={(e) =>
              setProductInfo({ ...productInfo, stock: Number(e.target.value) })
            }
            required
          />
        </label>
        <label>
          SKU
          <input
            type="text"
            value={productInfo?.sku}
            onChange={(e) =>
              setProductInfo({ ...productInfo, sku: e.target.value })
            }
            required
          />
        </label>
        <label>
          Supplier
          <input
            type="text"
            value={productInfo?.supplier}
            onChange={(e) =>
              setProductInfo({ ...productInfo, supplier: e.target.value })
            }
            required
          />
        </label>
        <label>
          Delivered
          <input
            type="number"
            value={0}
            onChange={(e) =>
              setProductInfo({ ...productInfo, delivered: e.target.value })
            }
            required
          />
        </label>
        <label>
          Image Url
          <input
            type="text"
            value={productInfo?.imageUrl}
            onChange={(e) =>
              setProductInfo({ ...productInfo, imageUrl: e.target.value })
            }
            required
          />
        </label>
        <button type="submit">Add New Product</button>
      </form>
    </div>
  );
}
