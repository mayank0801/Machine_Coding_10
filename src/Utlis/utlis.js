export const filterData = (products, SortBy, isLowStock, departmentToFind) => {
  let filteredProduct = [];
  filteredProduct =
    departmentToFind == "All Department"
      ? [...products]
      : products.filter(({ department }) => department === departmentToFind);

  filteredProduct = !isLowStock
    ? [...filteredProduct]
    : filteredProduct.filter(({ stock }) => stock <= 10);

  filteredProduct =
    SortBy === "Name"
      ? [...filteredProduct].sort((a, b) => a.name.localeCompare(b.name))
      : [...filteredProduct].sort(
          (a, b) => a[SortBy.toLowerCase()] - b[SortBy.toLowerCase()]
        );

  //console.log(filteredProduct, SortBy, isLowStock, departmentToFind, "hii");
  return filteredProduct;
};
