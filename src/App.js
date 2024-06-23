import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Product";
import products from "./db/data"; //products object array
import Recommended from "./Recommended/Recommended";
// import Sidebar from "./Sidebar/Sidebar1";
import Card from "./components/Card";
import "./index.css";
// import Sidebar1 from "./Sidebar/Sidebar1";
import Side from "./SideBar/Side";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    // console.log(event.target.value)
  };

  //filteredItems get the array

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    //product -> single array object are visited or stored data in product
    //first of all title can converted to the lowercase and indexOf are return the index value
  );

  //product is stored every object containing title in array
  // console.log(filteredItems)
  // console.log(filteredItems[0].img)
  // console.log(filteredItems[0].category)
  // console.log(filteredItems[0].color)
  // console.log(filteredItems[0].company)
  // console.log((query.toLowerCase())!==-1)

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    //selected category data they will be stored the value
    setSelectedCategory(event.target.value);
    // console.log(event.target.value)
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
    // console.log(event.target.value)
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    //all the array data are stored

    //button are selected then that type of data will be stored in filterdProducts
    // console.log(filteredProducts)
    //All of the array are stored this filteredProducts

    // Filtering Input Items
    if (query) {
      //you can write any text in input that query will stored.
      filteredProducts = filteredItems;//only filter data are stored in filteredProducts
      // console.log(filteredProducts)
    }

    // Applying selected filter
    if (selected) {
      // console.log(selected)
      //selected data are stored
      filteredProducts = filteredProducts.filter(
        (products) =>
          //you can also filtered data like a 
          // category, color, company, newPrice , title
          products.category === selected ||
          products.color === selected ||
          products.company === selected ||
          products.newPrice === selected ||
          products.title === selected
      );
      // console.log(filteredProducts)//they are creating new array and stored in filteredProducts
    }

    return filteredProducts.map(
      //using es6 concept for destructuring array
      // we can also used products
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()} //they are stored random value
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  //products -> selected all object array
  // selectedCategory -> which category are selected
  // query -> input is a query

  return (
    <>
      {/* <Sidebar1 handleChange={handleChange} /> */}
      <Side handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      {/* <Side handleChange={handleChange} /> */}
    </>
  );
}

export default App;
