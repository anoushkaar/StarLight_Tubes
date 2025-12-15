import { ContactCtaParent } from "../components/ContactCta";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Fotter";
import { ImagesSliderDemo } from "../components/ImageSlider";
import { NavbarDemo } from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <NavbarDemo>

          {/* Image Slider Section */}
          <div className="w-full h-fit flex justify-center ">
            <ImagesSliderDemo />
          </div>
          {/* Contact CTA Section */}
          <div className=" w-full h-150 flex justify-center">
            <ContactCtaParent />
          </div>

          {/* Heading Section for Contact Form */}
          <div className="w-full flex flex-col items-center justify-center  mb-0 px-4">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/20 dark:bg-green-500/20 dark:border-green-500/30">
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Let's Discuss Your Requirements
            </h1>

            <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
              Fill out the form below and our team will get back to you within
              24 hours. We're here to help with quotes, technical
              specifications, and custom orders.
            </p>
          </div>

          <div className="w-full h-fit flex justify-center mt-10 mb-10">
            <ContactForm />
          </div>

          {/* Footer Section */}

          <div>
            <Footer />
          </div>
        </NavbarDemo>
      </div>
    </div>
  );
};

export default Contact;
