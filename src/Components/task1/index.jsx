import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts } from "../../redux/actions";
import Product from "./Product";

const Task1 = () => {
  const [search, setSearch] = useState();
  const [products, setProducts] = useState();
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const taskReducer = useSelector((state) => state.task);
  //   console.log(taskReducer?.getAllProducts);
  useEffect(() => {
    dispatch(GetAllProducts());
  }, [dispatch]);
  useEffect(() => {
    if (taskReducer?.getAllProducts && taskReducer?.getAllProducts.length > 0) {
      setProducts(taskReducer?.getAllProducts);
    }
  }, [taskReducer?.getAllProducts]);

  //   console.log(search);
  const handleChange = (value) => {
    if (value !== "") {
      const results = products.filter((product) => {
        return product.name.toLowerCase().includes(value);
        // Use the toLowerCase() method to make it case-insensitive
      });
      setProducts(results);
    } else {
      setProducts(taskReducer?.getAllProducts);
      // If the text field is empty, show all users
    }
    setSearch(value);
  };
  useEffect(() => {
    if (products) {
      let total = 0;
      products.forEach((item) => (total += parseFloat(item.price)));
      console.log(total);
      setTotal(total);
    }
  }, [products]);

  return (
    <div>
      <h1>Search By Name</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />

      {taskReducer?.getAllProductsSuccess &&
        products &&
        products.map((product) => {
          console.log(product);
          return <Product product={product} />;
        })}
      {search && search.length > 0 && <h1>Total : {total}$</h1>}
    </div>
  );
};

export default Task1;
