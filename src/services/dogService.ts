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
          "Breed names could not be fetched from the Dog CEO site.",
        );
        return [];
      }
      return transformBreedNames(response.data.message);
    })
    .catch(error => handleError(error, []));
}

async function getDogImageURLs(breedName: string, imageCount: number = 10) {
  if (!breedName || !breedName.trim()) {
    throw new Error("breedName is required and cannot be empty.");
  }

  let masterBreedName = breedName.toLowerCase();
  let subBreedName = "";
  const words = masterBreedName.split(" ");
  if (words.length > 1) {
    // first word is the sub, the rest is the master breed
    // examples: irish spaniel
    subBreedName = words.shift() || "";
    masterBreedName = words.join(" ");
  }

  const breedPath = masterBreedName + (subBreedName ? `/${subBreedName}` : "");
  return axios
    .get(`${BASE_URL}/breed/${breedPath}/images/random/${imageCount}`)
    .then(response => {
      if (response.data.status !== "success") {
        console.error(
          `Breed image URLs for ${breedName} could not be fetched from the Dog CEO site.`,
        );
        return [];
      }
      return response.data.message;
    })
    .catch(error => handleError(error, []));
}

export { getBreedNames, getDogImageURLs };
