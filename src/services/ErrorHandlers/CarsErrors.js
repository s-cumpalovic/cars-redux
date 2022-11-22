export default function CarsErrors(error) {
  if (error.response) {
    // Response errors
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // Request errors
    console.log(error.request);
  } else {
    // Other errors
    console.log("Error", error.message);
  }
}
