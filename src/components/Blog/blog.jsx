import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="./src/images/b-blog-6.jpg"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
          alt="Blog Post"
        />
        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
          <IoMdTime className="text-[16px]" />
          23 Juin 2025
        </span>
      </div>
      <div className="info py-4">
        <h2 className="text-[18px] font-[600] mb-2 text-black">
          <Link to="/" className="link">
            Titre de l'article de blog
          </Link>
        </h2>
        <p className="text-[14px] text-[#666] mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua....
        </p>
        <Link className="link font-[500] text-[14px] flex items-center gap-1">
          Lire la suite <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
