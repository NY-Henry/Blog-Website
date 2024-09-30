import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title = "Blogs" }) => {
  return (
    <div className={`grid gap-2 rounded-lg`}>
      <h1 className="mx-auto rounded pl-4 text-3xl font-semibold shadow-sm">
        {title}
      </h1>
      <hr />
      {blogs.map((item) => (
        <div
          key={item.id}
          className={`my-2 rounded border-2 bg-white p-2 hover:bg-slate-100 hover:shadow-xl`}
        >
          <Link to={`/blogs/${item.id}`} className="grid gap-2">
            <h1 className="mb-2 text-3xl font-semibold text-red-400">
              {item.title}
            </h1>
            <hr />
            <p className="mt-4 text-2xl font-semibold">
              Written by {item.author}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
