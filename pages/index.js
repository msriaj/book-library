import Link from "next/link";
import { server } from "../Config/Config";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className=" w-full md:w-10/12 mx-auto">
      <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ml-0">
        {posts?.map((post) => (
          <div
            key={post?.id}
            className="max-w-sm bg-gray-100 text-center border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-5/6 mx-auto mt-4"
                src={post.url}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h5>
              </a>
              <p>Author : {post.author}</p>
              <p>category_name : {post.category_name}</p>
              <p>Author : {post.author}</p>
              <p>publisher : {post.publisher}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.description.slice(0, 150)}
              </p>
              <Link
                href={`/books/${post?.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/booklist`);

  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
