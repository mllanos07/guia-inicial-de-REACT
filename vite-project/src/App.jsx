import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");

  const search = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <h1>Comenzando React</h1>
      <input type="text" onChange={search} />

      <ul>
        {products
          .filter((product) => product.title.toLowerCase().startsWith(text.toLowerCase()))
          .map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
      </ul>
    </>
  );
}

export default App;