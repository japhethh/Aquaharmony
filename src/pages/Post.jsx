import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchPosts();
    console.log(posts);
  }, []);

  async function fetchPosts() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .then(setLoader(false));
  }

  return (
    <main className="posts bg-white">
      <div className="pg-header">
        <div className="container flex justify-between">
          <div className="">
            <h2>Posts</h2>
          </div>
          <div className="">
            {/* Second breadcrumb */}
            <nav className="w-full rounded-md">
              <ol className="list-reset flex">
                <li>
                  <Link
                    to="/"
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-accent-300 focus:text-primary-accent-300 active:text-primary-accent-300 motion-reduce:transition-none dark:text-primary-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-neutral-400">/</span>
                </li>
                <li className="text-neutral-400">Posts</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container content">
        {loader ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
              {posts.map((post) => (
                <div key={post.id}>
                  <div className="product flex flex-col shadow-xl rounded-md">
                    <div className="product_body flex flex-col px-4 py-4">
                      <h3 className="product_text text-center  text-md font-semibold text-slate-800 pb-4">
                        {post.title}
                      </h3>
                      <p className="text-sm text-center pb-4 text-gray-600 ">
                        {post.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Post;
