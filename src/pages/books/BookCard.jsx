import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="rounded-lg shadow-lg transition-shadow duration-300 p-4 bg-white">
      <div className="flex flex-col gap-4">
        {/* Image Section */}
        <div className="border rounded-md overflow-hidden">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book?.coverImage)}`}
              alt=""
              className="w-full h-[250px] object-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Content Section */}
        <div className="">
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book?.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {book?.description.length > 80
              ? `${book.description.slice(0, 80)}...`
              : book?.description}
          </p>
          <p className="font-medium mb-5">
            ${book?.newPrice}
            {book?.oldPrice !== book?.newPrice ? (
              <span className="line-through font-normal ml-2">
                $ {book?.oldPrice}
              </span>
            ) : (
              ''
            )}
          </p>
          <button
            onClick={() => handleAddToCart(book)}
            className="btn-primary px-6 space-x-1 flex items-center justify-center gap-1"
          >
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
