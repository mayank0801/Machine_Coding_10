import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DatContext";
export default function ProductDetail() {
  const { productId } = useParams();
  const { products } = useContext(DataContext);
  const productDetail = products.find(({ id }) => id == productId);
  return (
    <div className="product-detailcontainer">
      <h1>{productDetail.name}</h1>
      <div>
        <img src={productDetail.imageUrl} alt="product" />
        <p>
          <span>Price</span>:{productDetail.price}
        </p>
        <p>
          {" "}
          <span>Stock</span>:{productDetail.stock}
        </p>
        <p>
          {" "}
          <span>Supplier</span>:{productDetail.supplier}
        </p>
        <p>
          {" "}
          <span>departMent</span>:{productDetail.department}
        </p>
        <p>
          {" "}
          <span>SKU</span>:{productDetail.sku}
        </p>
        <p>
          {" "}
          <span>Delivered</span>:{productDetail.delivered}
        </p>
        <p>
          {" "}
          <span>Description</span>:{productDetail.description}
        </p>
      </div>
    </div>
  );
}
