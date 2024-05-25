import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditJajanan = () => {
  const [jajananData, setJajananData] = useState({});
  const [ingredients, setIngredients] = useState([{ key: 1 }]);
  const [steps, setSteps] = useState([{ key: 1 }]);

  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("token");

    if (!token || !id || !email) {
      navigate("/login");
    } else {
      // Check if token is valid
      axios.post('http://localhost:5000/checkToken', { id, email, token })
        .then(response => {
          if (response.data.payload.status_code === 200) {
            fetchJajananData();
          } else {
            navigate("/login");
          }
        })
        .catch(error => {
          console.error('Error checking token:', error);
          navigate("/login");
        });
    }

  }, [navigate]);

  const fetchJajananData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getJajananById/${id}`
      );
      if (response.status === 200) {
        const data = response.data.payload.data;
        setJajananData(data);
        setIngredients(data.bahan);
        setSteps(data.langkah);
      } else {
        console.error("Failed to fetch jajanan data");
      }
    } catch (error) {
      console.error("Error fetching jajanan data:", error);
    }
  };

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setJajananData({ ...jajananData, gambar: URL.createObjectURL(file) });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await axios.patch(
        `http://localhost:5000/editJajanan/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Berhasil Menambah Jajanan")
        navigate("/dashboard/listjajanan/")
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };
  

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Edit Jajanan</h1>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label" htmlFor="namaMakanan">
              <span className="label-text">Nama Jajanan</span>
            </label>
            <input
              type="text"
              id="namaJajanan"
              name="namaJajanan"
              className="input input-bordered w-full"
              defaultValue={jajananData.nama}
              required
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="penjelasanMakanan">
              <span className="label-text">Penjelasan Jajanan</span>
            </label>
            <textarea
              id="penjelasanJajanan"
              name="penjelasanJajanan"
              className="textarea textarea-bordered w-full"
              rows="4"
              defaultValue={jajananData.penjelasan}
              required
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Bahan-Bahan</span>
            </label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex space-x-2 mb-2">
                <input
                  type="text"
                  name={`ingredients[${index}]`}
                  className="input input-bordered w-full"
                  placeholder="Bahan"
                  defaultValue={ingredient.nama}
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
              <div key={index} className="flex space-x-2 mb-2">
                <input
                  type="text"
                  name={`steps[${index}]`}
                  className="textarea textarea-bordered w-full"
                  placeholder="Langkah"
                  rows="2"
                  defaultValue={step.langkah}
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

            <button type="button" onClick={addStep} className="btn btn-primary">
              <FaPlus className="mr-2" /> Tambah Langkah
            </button>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="gambar">
              <span className="label-text">Gambar</span>
            </label>
            {jajananData.gambar && (
              <img
                src={jajananData.gambar}
                alt="Gambar Jajanan"
                className="w-48 h-auto mb-2"
              />
            )}
            <input
              type="file"
              id="gambar"
              name="gambar"
              className="input w-full outline-none"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="form-control flex flex-row gap-6 justify-center">
            <Link to={"/dashboard/listjajanan"} className="btn btn-error w-2/5">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary w-2/5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditJajanan;
