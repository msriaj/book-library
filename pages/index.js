import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar/Navbar";
import { PostList } from "../Components/Postlist/Postlist";
import { server } from "../Config/Config";
import { setBookList } from "../redux/Slices/booksSlice";

export default function Home({ posts }) {
  const dispatch = useDispatch();
  dispatch(setBookList(posts));
  const data = useSelector((state) => state.books);

  return (
    <>
      <Navbar />
      <PostList posts={posts} />
    </>
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
