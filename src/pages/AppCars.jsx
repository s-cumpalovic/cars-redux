import React, { useEffect, useState } from "react";
import CarsService from "../services/CarsService";
import { Link } from "react-router-dom";
import SingleCar from "../components/Cars/SingleCar";
import DeleteButton from "../components/Buttons/DeleteButton";

export default function AppCars() {
  const [cars, setCars] = useState();

  useEffect(() => {
    handleCarsData();
  }, []);

  const handleCarsData = async () => {
    const response = await CarsService.getAll();
    if (response.status === 200) {
      setCars(response.data);
    }
  };

  const handleDeleteCar = async (id) => {
    const response = await CarsService.delete(id);
    if (response.status === 200) {
      setCars([...cars.filter((car) => car.id !== id)]);
    }
  };
  return (
    <div>
      <h2>Cars showcase:</h2>
      {cars &&
        cars.map((car) => (
          <div key={car.id}>
            <Link to={`/cars/${car.id}`}>
              <SingleCar
                key={car.id}
                brand={car.brand}
                model={car.model}
                year={car.year}
                max_speed={car.max_speed}
                is_automatic={car.is_automatic}
                engine={car.engine}
                number_of_doors={car.number_of_doors}
              />
            </Link>
            <Link to={`/edit/${car.id}`}>
              <button className="btn btn-warning">Edit</button>
            </Link>
            <DeleteButton onClickDeleteButton={() => handleDeleteCar(car.id)} />
          </div>
        ))}
    </div>
  );
}
