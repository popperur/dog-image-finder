import { Flex } from "antd";
import { DogImage, DogImagesContainer } from "components/DogImages/styles.tsx";
import { useEffect, useState } from "react";
import { getDogImageURLs } from "services/dogService.ts";
import { DISPLAY_DOG_IMAGE_COUNT } from "components/Background/constants.ts";

interface DogImagesProps {
  selectedBreedName: string;
}

function DogImages({ selectedBreedName }: DogImagesProps) {
  const [dogImageURLs, setDogImageURLs] = useState([]);

  useEffect(() => {
    getDogImageURLs(selectedBreedName, DISPLAY_DOG_IMAGE_COUNT)
      .then(dogImageURLs => {
        setDogImageURLs(dogImageURLs);
      })
      .catch(error => {
        console.error(`Dog images could not be retrieved: ${error}`);
      });
  }, [selectedBreedName]);

  return (
    <DogImagesContainer>
      {dogImageURLs.length > 0 && (
        <Flex wrap gap="small" align="flex-start" justify="center">
          {dogImageURLs.map((dogImageUrl, index) => (
            <DogImage
              key={index}
              src={dogImageUrl}
              alt={`Dog Image ${index + 1}`}
              loading="lazy"
            />
          ))}
        </Flex>
      )}
    </DogImagesContainer>
  );
}

export default DogImages;
