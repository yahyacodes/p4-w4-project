import React from "react";
import CategoryItems from "./CategoryItems";

const CategoryList = ({ category }) => {
  return (
    <div>
      {category.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
