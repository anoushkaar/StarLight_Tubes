import Footer from "../main components/Fotter";
import StatsGrid from "../main components/HomeStats";
import { ImagesSliderDemo } from "../main components/ImageSlider";
import { NavbarDemo } from "../main components/Navbar";

const StainlessSteelTube = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        {/* Image Slider Section */}
        <div className="w-full h-fit flex justify-center ">
          <ImagesSliderDemo />
        </div>

        {/* Header Section - Before CTA */}
        <div className="w-full flex flex-col items-center justify-center mt-32 mb-0 px-4">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30">
            <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
              Since 1992 • 30+ Years of Excellence
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Leading Exporter of Steel Tubes
          </h1>

          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
            Over a decade of excellence in ERW and Seamless pipe manufacturing,
            serving 800+ organizations across 60+ countries
          </p>
        </div>

        {/* <div>
          <CtaSection1 />
        </div> */}

        <div>
          <StatsGrid />
        </div>
        <div>
          <Footer />
        </div>
      </NavbarDemo>
    </div>
  );
};

export default StainlessSteelTube;
