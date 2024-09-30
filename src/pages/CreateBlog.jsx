import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, description: body, author };

    setLoading(true);

    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      })
        .then(() => {
          navigate("/");
          enqueueSnackbar("Blog Created Successfully", { variant: "success" });
        })
        .catch((err) => {
          enqueueSnackbar("Failed to create blog", { variant: "error" });
        });
    }, 1000);
  }

  return (
    <section className="m-auto max-w-[600px] text-center">
      <NavBar />
      <h1 className="my-6 text-3xl font-bold">Create New Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="grid gap-2 border p-10 shadow-sm"
      >
        <label className="block text-left text-xl font-semibold text-slate-600">
          Blog title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the blog title"
          type="text"
          required
          className="rounded border p-4 text-xl font-semibold"
        />
        <label className="block text-left text-xl font-semibold text-slate-600">
          Blog title
        </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter the blog body"
          required
          type="text"
          className="h-60 rounded border p-4 text-lg"
        />
        <label className="block text-left text-xl font-semibold text-slate-600">
          Blog Author
        </label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mb-6 h-10 appearance-none rounded border border-black bg-white px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>

        <Button
          isDisabled={title === "" || body === "" || author === "" || loading}
          title={loading ? "Adding Blog..." : "Add Blog"}
          bg="bg-green-600"
        />
        <p className="block text-left text-xl font-semibold text-slate-600">
          MY Blog: {title}
        </p>
      </form>
    </section>
  );
};

export default CreateBlog;
