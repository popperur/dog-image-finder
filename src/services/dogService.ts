import axios from "axios";
import capitalize from "antd/lib/_util/capitalize";
import handleError from "utils/errorHandler.ts";

const BASE_URL = "https://dog.ceo/api";

type DogBreeds = Record<string, string[]>;

// Maps dog.ceo breed names
// from {spaniel:["japanese","irish","cocker"], komondor: []}
// to ["Cocker Spaniel", "Irish Spaniel", "Japanese Spaniel", "Komondor"]
function transformBreedNames(dogBreeds: DogBreeds) {
  const breedNames: string[] = [];
  for (const breedName in dogBreeds) {
    const subBreeds = dogBreeds[breedName];
    if (subBreeds.length > 0) {
      subBreeds.forEach((subBreed: string) =>
        breedNames.push(`${capitalize(subBreed)} ${capitalize(breedName)}`),
      );
    } else {
      breedNames.push(capitalize(breedName));
    }
  }
  breedNames.sort((a, b) => a.localeCompare(b));
  return breedNames;
}

async function getBreedNames() {
  return axios
    .get(`${BASE_URL}/breeds/list/all`)
    .then(response => {
      if (response.data.status !== "success") {
        console.error(
          "Dog.ceo retrieved the message with a non-success status.",
        );
        return [];
      }
      return transformBreedNames(response.data.message);
    })
    .catch(error => handleError(error, []));
}

export { getBreedNames };
