import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getProducts } from "../services/productService";
import { addToCart } from "../services/cartService";

const ProductPage = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(category || "");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category]);

  const handleAddToCart = async (product) => {
    try {
      await addToCart(product.id);
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div>
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">
          {category ? category.charAt(0).toUpperCase() + category.slice(1) : "All Products"}
        </h2>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <img
                src={`http://localhost:3001/api/products/images/${product.imagePath}`}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-base font-semibold line-clamp-2">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-600">${product.price}</p>
                <div className="mt-auto pt-3">
                  <button onClick={() => handleAddToCart(product)} className="w-full rounded-md bg-gray-900 text-white hover:bg-gray-800 px-4 py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

// ✅ Validate props
ProductPage.propTypes = {
  category: PropTypes.string,
};

export default ProductPage;
