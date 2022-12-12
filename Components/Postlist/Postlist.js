import Link from "next/link";
import {
  FaArrowRight,
  FaBook,
  FaCartPlus,
  FaFolder,
  FaPenNib,
} from "react-icons/fa";
export const PostList = ({ posts }) => {
  return (
    <div className=" w-full md:w-10/12 mx-auto">
      <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ml-0">
        {posts?.map((post) => (
          <div key={post?.id} className="">
            <img
              className="rounded-t-lg rounded-lg shadow -mb-32 h-72 w-5/6 mx-auto"
              src={post.url}
              alt=""
            />

            <div className="p-5 pt-36 bg-gray-100 hover:shadow-lg hover:bg-green-50 rounded-t-lg">
              <a href="#">
                <h5
                  title={post.title}
                  className="mb-2 truncate text-xl font-bold tracking-tight text-gray-900 "
                >
                  {post.title}
                </h5>
              </a>
              <div className="text-gray-400 hover:text-gray-700">
                <p className="flex   gap-2 items-center ">
                  {" "}
                  <FaPenNib />{" "}
                  <span className="font-semibold"> {post.author}</span>
                </p>
                <p className="flex gap-2 truncate items-center ">
                  <FaFolder /> {post.category_name}
                </p>
                <p className="flex gap-2  truncate items-center">
                  <FaBook /> {post.publisher}
                </p>
              </div>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.description.slice(0, 150)}
              </p> */}
              <div className="flex justify-between mt-2">
                <Link
                  href={`/books/${post?.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 "
                >
                  View Details <FaArrowRight />
                </Link>
                <Link
                  href={`/books/${post?.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700   "
                >
                  <FaCartPlus />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
