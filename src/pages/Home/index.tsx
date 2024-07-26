import Background from "components/Background";
import BreedFilter from "components/BreedFilter";
import { CenteredContainer } from "pages/Home/styles.tsx";

function Home() {
  return (
    <>
      <Background />
      <CenteredContainer>
        <BreedFilter />
      </CenteredContainer>
    </>
  );
}

export default Home;
