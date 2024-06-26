import React, { useEffect, useState, useRef } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddJajanan = () => {
  const [ingredients, setIngredients] = useState([{ key: 1 }]);
  const [steps, setSteps] = useState([{ key: 1 }]);

  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("token");

    if (!token || !id || !email) {
      navigate("/login");
    } else {
      // Check if token is valid
      axios
        .post("http://localhost:5000/checkToken", { id, email, token })
        .then((response) => {
          if (response.data.payload.status_code === 200) {
          } else {
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Error checking token:", error);
          navigate("/login");
        });
    }
  }, [navigate]);

  const addIngredient = () => {
    const newKey = ingredients.length
      ? ingredients[ingredients.length - 1].key + 1
      : 1;
    setIngredients([...ingredients, { key: newKey }]);
  };

  const removeIngredient = (key) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.key !== key));
  };

  const addStep = () => {
    const newKey = steps.length ? steps[steps.length - 1].key + 1 : 1;
    setSteps([...steps, { key: newKey }]);
  };

  const removeStep = (key) => {
    setSteps(steps.filter((step) => step.key !== key));
  };

  const resetForm = () => {
    setIngredients([{ key: 1 }]);
    setSteps([{ key: 1 }]);
    formRef.current.reset();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await axios.post(
        "http://localhost:5000/addJajanan",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Berhasil Menambah Jajanan");
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Tambah Jajanan</h1>
        <form
          onSubmit={onSubmit}
          className="space-y-6"
          encType="multipart/form-data"
          ref={formRef}
        >
          <div className="form-control">
            <label className="label" htmlFor="namaJajanan">
              <span className="label-text">Nama Jajanan</span>
            </label>
            <input
              type="text"
              id="namaJajanan"
              name="namaJajanan"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="penjelasanJajanan">
              <span className="label-text">Penjelasan Jajanan</span>
            </label>
            <textarea
              id="penjelasanJajanan"
              name="penjelasanJajanan"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Bahan-Bahan</span>
            </label>
            {ingredients.map((ingredient, index) => (
              <div key={ingredient.key} className="flex space-x-2 mb-2">
                <input
                  type="text"
                  name={`ingredients[]`}
                  className="input input-bordered w-full"
                  placeholder="Bahan"
                  required
                />
                {ingredients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeIngredient(ingredient.key)}
                    className="btn btn-error btn-circle"
                  >
                    <FaMinus />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredient}
              className="btn btn-primary"
            >
              <FaPlus className="mr-2" /> Tambah Bahan
            </button>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Langkah-Langkah Pembuatan</span>
            </label>
            {steps.map((step, index) => (
              <div key={step.key} className="flex space-x-2 mb-2">
                <textarea
                  name={`steps[]`}
                  className="textarea textarea-bordered w-full"
                  placeholder="Langkah"
                  rows="2"
                  required
                ></textarea>
                {steps.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeStep(step.key)}
                    className="btn btn-error btn-circle"
                  >
                    <FaMinus />
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addStep} className="btn btn-primary">
              <FaPlus className="mr-2" /> Tambah Langkah
            </button>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="gambar">
              <span className="label-text">Gambar</span>
            </label>
            <input
              type="file"
              id="gambar"
              name="gambar"
              className="input w-full outline-none"
              required
            />
          </div>

          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddJajanan;
