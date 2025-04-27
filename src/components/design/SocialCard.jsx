// Feed.jsx
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export default function SocialCard({ posts = [] }) {
  return (
    <div className="flex flex-col space-y-6 items-center">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md w-full p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">
                  {post.author.name}
                </h3>
                <p className="text-sm text-gray-500">{post.author.username}</p>
              </div>
            </div>
            <BsThreeDots className="text-gray-500 cursor-pointer" size={20} />
          </div>

          {/* Content */}
          <p className="text-gray-700 text-sm mb-4">
            {post.content}{" "}
            <span className="text-red-500 cursor-pointer">Read More</span>
          </p>

          {/* Image */}
          <div className="relative mb-4">
            <img
              src={post.image}
              alt="Post"
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
              <FaHeart className="text-gray-500" size={16} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-around text-gray-700 text-sm">
            <div className="flex items-center space-x-2">
              <FaHeart />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaComment />
              <span>{post.comments}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaShare />
              <span>{post.shares}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
