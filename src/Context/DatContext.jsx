import { createContext, useReducer } from "react";
import { category, inventoryData } from "../Data/data";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const DBProducts = JSON.parse(localStorage.getItem("products"));
  const DBFilter = JSON.parse(localStorage.getItem("filters"));

  function reducer(state, action) {
    switch (action.type) {
      case "FILTER_APPLY": {
        console.log(action.payload.value, "joo");
        localStorage.setItem(
          "filters",
          JSON.stringify({
            ...state.filters,
            [action.payload.type]: action.payload.value
          })
        );
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.payload.type]: action.payload.value
          }
        };
      }
      case "ADD_PRODUCT": {
        console.log(action.payload);
        localStorage.setItem(
          "products",
          JSON.stringify([...state.products, action.payload])
        );
        return { ...state, products: [...state.products, action.payload] };
      }
      case "CLEAR_FILTER": {
        localStorage.removeItem("filters");
        return {
          ...state,
          filters: {
            department: "All Department",
            isLowStock: false,
            SortBy: "Name"
          }
        };
      }
      default:
        return { ...state };
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    products: DBProducts || inventoryData,
    productCategory: category,
    filters: DBFilter || {
      department: "All Department",
      isLowStock: false,
      SortBy: "Name"
    }
  });

  return (
    <DataContext.Provider
      value={{
        products: state.products,
        productCategory: state.productCategory,
        dispatch,
        state
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
