import { CoatingCtaParent } from "../components/CoatingCta";
import { CardHoverEffectDemo } from "../components/CoatingImgCard";
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
            <div className="w-full flex flex-col items-center justify-center mt-32 mb-0 px-4">
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                Leading Manufacturer & Exporter of Steel Tubes
              </h1>

              <p className="text-lg md:text-md text-center text-gray-600 dark:text-gray-300 max-w-2xl">
                Over a decade of excellence in ERW and Seamless pipe
                manufacturing, serving 800+ organizations across 60+ countries
              </p>
            </div>
            <CoatingCtaParent />
          </div>

          <div>
            <div className="w-full flex flex-col items-center justify-center mt-32 mb-0 px-4">
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                Leading Manufacturer & Exporter of Steel Tubes
              </h1>

              <p className="text-lg md:text-md text-center text-gray-600 dark:text-gray-300 max-w-2xl">
                Over a decade of excellence in ERW and Seamless pipe
                manufacturing, serving 800+ organizations across 60+ countries
              </p>
            </div>
            <CardHoverEffectDemo />
          </div>
          <div>
            <div>
              <div className="w-full flex flex-col items-center justify-center mt-32 mb-0 px-4">
                <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30">
                  <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                    Since 1992 • 30+ Years of Excellence
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                  Leading Manufacturer & Exporter of Steel Tubes
                </h1>

                <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
                  Over a decade of excellence in ERW and Seamless pipe
                  manufacturing, serving 800+ organizations across 60+ countries
                </p>
              </div>

              <InfiniteMovingCardsDemo />
            </div>
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
