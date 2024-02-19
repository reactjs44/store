import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-4">
        This is a React and Tailwind CSS app
      </h1>

      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="m-4 w-48 h-58 border border-gray-400 p-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 object-contain mb-2"
            />
            <div className="text-sm truncate">{product.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
