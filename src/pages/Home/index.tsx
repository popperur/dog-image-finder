import Background from "components/Background";
import BreedFilter from "components/BreedFilter";
import { BreedFilterContainer } from "pages/Home/styles.tsx";
import { useState } from "react";
import DogImages from "components/DogImages";

function Home() {
  const [selectedBreedName, setSelectedBreedName] = useState("");

  const breedSelected = !!selectedBreedName;

  return (
    <>
      <Background showElements={!breedSelected} />
      <BreedFilterContainer $showOnTop={breedSelected}>
        <BreedFilter
          selectedBreedName={selectedBreedName}
          onBreedNameSelect={setSelectedBreedName}
        />
      </BreedFilterContainer>
      {breedSelected && <DogImages selectedBreedName={selectedBreedName} />}
    </>
  );
}

export default Home;
