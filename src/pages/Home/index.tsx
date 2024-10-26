import Background from "components/Background";
import BreedFilter from "components/BreedFilter";
import { BreedFilterContainer } from "pages/Home/styles.tsx";
import { useState } from "react";
import DogImages from "components/DogImages";
import AudioProvider from "providers/AudioProvider.tsx";

function Home() {
  const [selectedBreedName, setSelectedBreedName] = useState("");

  const breedSelected = !!selectedBreedName;

  return (
    <AudioProvider>
      <Background showElements={!breedSelected} />
      <BreedFilterContainer $showOnTop={breedSelected}>
        <BreedFilter
          selectedBreedName={selectedBreedName}
          onBreedNameSelect={setSelectedBreedName}
        />
      </BreedFilterContainer>
      {breedSelected && <DogImages selectedBreedName={selectedBreedName} />}
    </AudioProvider>
  );
}

export default Home;
