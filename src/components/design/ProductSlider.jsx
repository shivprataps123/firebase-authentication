// ProductSlider.jsx
import { FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    id: 2,
    title: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    image:
      "https://images.unsplash.com/photo-1743485237407-e00bfb75163e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
  },
  {
    id: 4,
    title: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  },
  {
    id: 5,
    title: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    image:
      "https://plus.unsplash.com/premium_photo-1710865692399-6fe10f968711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ProductSlider() {
  return (
    <div className="w-full">
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover"
            />
            {/* Details */}
            <div className="p-3">
              <h2 className="text-sm font-semibold text-gray-800">
                {product.title}
              </h2>
              <div className="mt-2 flex items-center">
                <p className="text-lg font-bold">{product.price}</p>
              </div>
              {/* Star Rating */}
              <div className="flex items-center mt-2 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} size={14} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
