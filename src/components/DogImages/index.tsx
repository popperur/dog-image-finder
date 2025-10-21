import { Flex, Spin } from "antd";
import { DogImage, DogImagesContainer } from "components/DogImages/styles.tsx";
import { useEffect, useState } from "react";
import { getDogImageURLs } from "services/dogService.ts";
import { DISPLAY_DOG_IMAGE_COUNT } from "components/Background/constants.ts";

interface DogImagesProps {
  selectedBreedName: string;
}

function DogImages({ selectedBreedName }: DogImagesProps) {
  const [dogImageURLs, setDogImageURLs] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getDogImageURLs(selectedBreedName, DISPLAY_DOG_IMAGE_COUNT)
      .then(dogImageURLs => {
        setDogImageURLs(dogImageURLs);
        setLoading(false);
      })
      .catch(error => {
        console.error(`Dog images could not be retrieved: ${error}`);
        setLoading(false);
      });
  }, [selectedBreedName]);

  return (
    <DogImagesContainer>
      {loading && <Spin size="large" />}
      {!loading && dogImageURLs.length > 0 && (
        <Flex wrap gap="small" align="flex-start" justify="center">
          {dogImageURLs.map(dogImageUrl => (
            <DogImage
              key={dogImageUrl}
              src={dogImageUrl}
              alt={`Dog Image`}
              loading="lazy"
            />
          ))}
        </Flex>
      )}
    </DogImagesContainer>
  );
}

export default DogImages;
