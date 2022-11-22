import React from "react";

export default function SingleCar({
  id,
  brand,
  model,
  year,
  max_speed,
  is_automatic,
  engine,
  number_of_doors,
}) {
  return (
    <div className="cars-container" key={id}>
      <hr />
      <p>
        Car brand: <strong>{brand}</strong>
      </p>
      <p>
        Car model: <strong>{model}</strong>
      </p>
      <p>
        Car year: <strong>{year}</strong>
      </p>
      <p>
        Car max_speed: <strong>{max_speed}</strong>
      </p>
      <p>
        Car is_automatic: <strong>{is_automatic}</strong>
      </p>
      <p>
        Car engine: <strong>{engine}</strong>
      </p>
      <p>
        Car number_of_doors: <strong>{number_of_doors}</strong>
      </p>
      <hr />
    </div>
  );
}
