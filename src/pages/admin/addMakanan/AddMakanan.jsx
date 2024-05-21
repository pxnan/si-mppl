import React, { useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { FaPlus, FaMinus} from "react-icons/fa";

const AddMakanan = () => {
  const [ingredients, setIngredients] = useState([{ key: 1 }]);
  const [steps, setSteps] = useState([{ key: 1 }]);

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

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
  };

  return (
    <AdminLayout>
      <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Tambah Makanan</h1>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label" htmlFor="namaMakanan">
            <span className="label-text">Nama Makanan</span>
          </label>
          <input
            type="text"
            id="namaMakanan"
            name="namaMakanan"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="penjelasanMakanan">
            <span className="label-text">Penjelasan Makanan</span>
          </label>
          <textarea
            id="penjelasanMakanan"
            name="penjelasanMakanan"
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
                name={`ingredients[${ingredient.key}]`}
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
              <input
                name={`steps[${step.key}]`}
                className="textarea textarea-bordered w-full"
                placeholder="Langkah"
                rows="2"
                required
              ></input>
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
          <button
            type="button"
            onClick={addStep}
            className="btn btn-primary"
          >
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

export default AddMakanan;
