import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/payment"); // Navigate to Payment Page
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-4 sm:p-6">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <ul className="divide-y">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex items-center gap-4">
                <img className="w-20 h-20 rounded-md object-cover" src={`http://localhost:3001/api/products/images/${item.imagePath}`} alt={item.name} />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate">{item.name}</h4>
                  <p className="text-gray-600 text-sm">${item.price}</p>
                </div>
                <button className="text-red-600 hover:text-red-700" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button className="w-full rounded-md bg-green-600 text-white hover:bg-green-700 px-4 py-2" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
