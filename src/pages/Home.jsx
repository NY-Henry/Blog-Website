import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="space-y-10">
      {error && <div className="text-3xl font-bold">{error}</div>}
      {loading && <div className="text-3xl font-bold">Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}{" "}
    </div>
  );
};

export default Home;
