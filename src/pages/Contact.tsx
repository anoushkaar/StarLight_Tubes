
import { ContactCtaParent } from '../components/ContactCta';
import ContactForm from '../components/ContactForm';
import Footer from "../components/Fotter";
import { ImagesSliderDemo } from "../components/ImageSlider";
import { NavbarDemo } from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <NavbarDemo>
          <div className="w-full h-fit flex justify-center ">
            <ImagesSliderDemo />
          </div>

          <div className=' w-full h-150 flex justify-center'>
            <ContactCtaParent />


          </div>

          <div className="w-full h-fit flex justify-center mt-10 mb-10">
            <ContactForm />
          </div>

          <div>
            <Footer />
          </div>
        </NavbarDemo>
      </div>
    </div>
  );
};

export default Contact;
