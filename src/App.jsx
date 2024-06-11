import * as React from "react";
import { Admin, Resource } from "react-admin";
import { Dashboard } from "./Components/DashBoard.jsx";
import BrandList from "./view/brand/index.jsx";
import dataProvider from "./dataProvider";
import ProductsCreate from "./view/products/components/CreateProduct.jsx";
import EditProducts from "./view/products/components/EditProducts.jsx";
import ProductList from "./view/products";

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="brands" list={BrandList} />
    <Resource
      name="products"
      list={ProductList}
      edit={EditProducts}
      create={ProductsCreate}
    />
  </Admin>
);

export default App;