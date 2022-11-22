import React, { useState, useEffect } from "react";
import CreateCarForm from "../components/Forms/CreateCarForm";
import CarsService from "../services/CarsService";
import { useHistory, useParams } from "react-router-dom";

const defaultValue = {
  brand: "",
  model: "",
  year: "",
  max_speed: "",
  number_of_doors: "",
  is_automatic: false,
  engine: "",
};

export default function AddCar() {
  const history = useHistory();
  const { id } = useParams();
  const [newCar, setNewCar] = useState(defaultValue);

  useEffect(() => {
    handleSingleCarData();
  }, []);

  const handleCreateNewCar = async (e) => {
    e.preventDefault();
    e.target.reset();

    const response = await CarsService.create(newCar);
    if (response.status === 201) {
      setNewCar(response.data);
      history.push("/cars");
    }
  };

  const handleResetForm = () => {
    setNewCar(defaultValue);
  };

  const handlePreviewCar = (carData) => {
    const preview = JSON.stringify(carData, null, 2);
    alert(preview);
  };

  const handleSingleCarData = async () => {
    if (id) {
      const response = await CarsService.get(id);
      if (response.status === 200) {
        setNewCar(response.data);
      }
    }
  };

  const handleEditCar = async () => {
    const response = await CarsService.edit(id, newCar);
    if (response.status === 200) {
      history.push("/cars");
      alert("Car updated !");
    }
  };

  return (
    <div>
      <CreateCarForm
        newCar={newCar}
        setNewCar={setNewCar}
        onCreateNewCar={handleCreateNewCar}
        onResetForm={handleResetForm}
        onPreviewCar={handlePreviewCar}
        onEditCar={handleEditCar}
      />
    </div>
  );
}
