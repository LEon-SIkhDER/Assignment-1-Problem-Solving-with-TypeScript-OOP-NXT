# What is Type Narrowing in TypeScript? Provide practical examples using typeof, instanceof, and the in operator.
## ans: Type Narrowing is the process to reduce the possible type counts.
## Example: 
### typeof:
const printValue = (value: string | number): void => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
};
### instanceof:
class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

const handleError = (error: NetworkError | ValidationError): void => {
  if (error instanceof NetworkError) {
    console.log("Network issue:", error.message);
  } else {
    console.log("Validation issue:", error.message);
  }
};
### in: 
interface Car {
  brand: string;
  numberOfDoors: number;
}

interface Motorcycle {
  brand: string;
  engineCapacity: number;
}

const displayVehicle = (vehicle: Car | Motorcycle): void => {
  if ("numberOfDoors" in vehicle) {
    console.log(`Car: ${vehicle.brand}`);
    console.log(`Doors: ${vehicle.numberOfDoors}`);
  } else {
    console.log(`Motorcycle: ${vehicle.brand}`);
    console.log(`Engine: ${vehicle.engineCapacity}cc`);
  }
};
