import {
  MoonCenter,
  MoonContainer,
} from "components/Background/Moon/styles.tsx";
import MoonCraters from "components/Background/Moon/MoonCraters";
import MoonGlows from "components/Background/Moon/MoonGlows";

function Moon() {
  return (
    <MoonContainer>
      <MoonGlows />
      <MoonCenter>
        <MoonCraters />
      </MoonCenter>
    </MoonContainer>
  );
}

export default Moon;
