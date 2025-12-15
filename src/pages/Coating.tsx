import { CoatingCtaParent } from "../components/CoatingCta";
import Footer from "../components/Fotter";
import { ImagesSliderDemo } from "../components/ImageSlider";
import { InfiniteMovingCardsDemo } from "../components/MovingCards";
import { NavbarDemo } from "../components/Navbar";

const Coating = () => {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <NavbarDemo>
          <div className="w-full h-fit flex justify-center ">
            <ImagesSliderDemo />
          </div>
          <div
            className="max-full h-fit flex md:flex-col
          flex-col items-center md:justify-center mt-20 mb-20 gap-5"
          >
            <CoatingCtaParent />
          </div>
          <div>
            <InfiniteMovingCardsDemo />
          </div>
          <div>
            <Footer />
          </div>
        </NavbarDemo>
      </div>
    </>
  );
};

export default Coating;
