import { useContext } from "react";
import { DataContext } from "../Context/DatContext";

export default function DashBoard() {
  const { products } = useContext(DataContext);

  const { TotalStock, ItemDelivered, lowStockItem } = products.reduce(
    (acc, curr) => {
      return {
        ...acc,
        TotalStock: acc.TotalStock + Number(curr.stock),
        ItemDelivered: acc.ItemDelivered + Number(curr.delivered),
        lowStockItem: curr.stock <= 10 ? acc.lowStockItem + 1 : acc.lowStockItem
      };
    },
    {
      TotalStock: 0,
      ItemDelivered: 0,
      lowStockItem: 0
    }
  );

  console.log(TotalStock, ItemDelivered, lowStockItem);

  return (
    <div className="dashBoard-container">
      <div className="container">
        <div className="container-info1">
          <p>{TotalStock}</p>
          <p>TotalStock</p>
        </div>
      </div>
      <div className="container">
        <div className="container-info2">
          <p>{ItemDelivered}</p>
          <p>ItemDelivered</p>
        </div>
      </div>
      <div className="container">
        <div className="container-info3">
          <p>{lowStockItem}</p>
          <p>LowStockItem</p>
        </div>
      </div>
    </div>
  );
}
