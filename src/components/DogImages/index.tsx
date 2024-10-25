import { Col, Row } from "antd";
import { DogImage, DogImagesContainer } from "components/DogImages/styles.tsx";
import { useEffect, useState } from "react";
import { getDogImageURLs } from "services/dogService.ts";

interface DogImagesProps {
  selectedBreedName: string;
}

const DISPLAY_DOG_IMAGE_COUNT = 9;

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
        <Row gutter={[40, 40]}>
          {dogImageURLs.map((dogImageUrl, index) => (
            <Col key={index} xs={24} sm={24} md={8} lg={8} xl={8}>
              <DogImage
                src={dogImageUrl}
                alt={`Dog Image ${index + 1}`}
                loading="lazy"
              />
            </Col>
          ))}
        </Row>
      )}
    </DogImagesContainer>
  );
}

export default DogImages;
