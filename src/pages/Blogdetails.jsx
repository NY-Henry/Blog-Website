import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Navbar from "../components/NavBar";
import Button from "../components/ui/Button";
import Model from "../components/ui/Model";
import { useSnackbar } from "notistack";

const Blogdetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const {
    data: blog,
    loading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  function handleConfirmation() {
    setIsModalOpen(true);
  }

  function handleDelete() {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
      enqueueSnackbar("Blog Deleted Successfully", { variant: "success" });
    });
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <section>
      <Model
        modalTitle="Are you sure you want to delete this blog?"
        modalMessage="This action cannot be undone"
        modalCloseButtonText="Ok"
        modalStatus={isModalOpen}
        closeModal={handleCloseModal}
        handleClick={handleDelete}
      />
      <Navbar />
      <div className="relative mx-auto max-w-[600px] p-10 shadow-md">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2 className="mb-2 text-3xl font-bold">{blog.title}</h2>
            <hr />
            <p className="my-4 text-2xl">Written by {blog.author}</p>
            <p className="my-4 text-xl font-semibold">{blog.description}</p>
            <Button handleClick={handleConfirmation} title="Delete Blog" />
          </article>
        )}
      </div>
    </section>
  );
};

export default Blogdetails;
