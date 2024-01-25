import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import BookItems from "./BookItems";

const CategoryItems = ({ category }) => {
  <BookItems category={category.categoryname} />;
  return (
    <section className="">
      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        <ul className="divide-y space-y-3">
          <li
            key={category.id}
            className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-100"
          >
            <div className="flex items-center gap-x-3">
              <div>
                <h3 className="text-base text-gray-800 font-semibold mt-1">
                  Book name: {category.title}
                </h3>

                <span className="block text-sm text-gray-400 font-medium">
                  Author: {category.authorname}
                </span>
              </div>
            </div>
            <p className="text-gray-600 sm:text-sm">
              Description: {category.description}
            </p>
            <div className="text-sm text-gray-600 flex items-center gap-6 cursor-pointer mt-1">
              <span className="flex items-center gap-2">
                <BiCategoryAlt className="text-lg" />
                {category.categoryname}
              </span>
              <span className="flex items-center gap-2">
                <BiCommentDetail className="text-lg" />
                Book reviews
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategoryItems;
