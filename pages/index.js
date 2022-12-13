import { useDispatch, useSelector } from "react-redux";
import Feature1 from "../Components/Feature1/Feature1";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import { PostList } from "../Components/Postlist/Postlist";
import data from "../data/bookList.json";
import { setBookList } from "../redux/Slices/booksSlice";

export default function Home({ posts }) {
  const dispatch = useDispatch();
  dispatch(setBookList(posts));
  const data = useSelector((state) => state.books);

  return (
    <>
      <Navbar />
      <Hero />
      <PostList posts={posts} />
      <Feature1/>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      posts: data,
    },
  };
};
