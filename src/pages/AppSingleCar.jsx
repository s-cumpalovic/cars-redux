import React, { useEffect, useState } from "react";
import SingleCar from "../components/Cars/SingleCar";
import CarsService from "../services/CarsService";
import { useParams } from "react-router-dom";
export default function AppSingleCar() {
  const [singleCar, setSingleCar] = useState();
  const { id } = useParams();

  useEffect(() => {
    handleGetSingleCar();
  }, []);

  const handleGetSingleCar = async () => {
    const response = await CarsService.get(id);
    if (response.status === 200) {
      setSingleCar(response.data);
    }
  };

  return (
    <div>
      {singleCar ? (
        <SingleCar
          key={singleCar.id}
          brand={singleCar.brand}
          model={singleCar.model}
          year={singleCar.year}
          max_speed={singleCar.max_speed}
          is_automatic={singleCar.is_automatic}
          engine={singleCar.engine}
          number_of_doors={singleCar.number_of_doors}
        />
      ) : (
        "Nothing to show here"
      )}
    </div>
  );
}
