import React from 'react'
import Footer from "../components/Fotter";
import { ImagesSliderDemo } from "../components/ImageSlider";
import { NavbarDemo } from "../components/Navbar";

const Coating = () => {
  return (
    <>
    <div className="flex min-h-svh flex-col items-center justify-center">
            <NavbarDemo>
              <div className="w-full h-fit flex justify-center ">
                <ImagesSliderDemo />
              </div>
              <div>
                <Footer />
              </div>
            </NavbarDemo>
          </div>
    </>
  )
}

export default Coating
