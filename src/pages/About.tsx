import Footer from "../components/Fotter";
import { ImagesSliderDemo } from "../components/ImageSlider";
import { NavbarDemo } from "../components/Navbar";
import { CardSpotlightDemo } from "../components/SpotLightCard";

const About = () => {
  const heading = "Steel Tubes India";
  const text1 =
    "Steel tubes India is recently introduced our new division for boiler manufacturers & worldwide companies where boilers are installed. Our new website www.stindia.com is focused for complete range of Boiler steel materials. This site will give the full & very useful information on Boiler tubes, equivalent materials & respective grades. We are offering Alloy steel & carbon steel tubes for Boilers & steam pipelines. This website is specific for alloy steel products & full ranges of piping accessories used in boilers & heaters. We are supplying Boiler materials to south & west Africa, Europe, America, Malaysia, Indonesia, Australia & Middle east. Steel Tubes India is industrial steel pipes suppliers to Oil & Gas piping, petrochemical refineries & Chemical processing industry since 1992. We are Supplying piping material in stainless steel, Carbon steel & Alloy Steel to UAE, Saudi Arabia, Kuwait, Qatar, Egypt, Turkey, Oman, Africa, Malaysia & many countries in USA & Europe, we stock oil & gas piping material & supply to LNG Projects. We are no. 1 exporter of structural pipe in India, Steel Tubes India is stocking distributor of leading manufacturers of Steel Pipes & Tubes in India, Japan, Italy, China & UK. We stock & supply Pipes, Tubes, Tubing, Sheets, Plates, Coils, Fittings, Flanges, Round Bars, Fasteners & full range of piping accessories in Stainless Steel, Alloy Steel, Carbon steel & Nickel based alloys. Steel Tubes India is the only Company in India won the All India Award for export excellence for seven consecutive years & Stood No. 1 in Year 2018-19 also, Steel Tubes India is an ISO 9001, 14001, OHSAS 18001 certified Company. We are PED 97/23/EC approved Supplier & Exporter of Industrial raw materials & provide complete piping solutions to Oil & Gas industry, STI is also Government of India Recognized Export House, we are Stockist & Supplier of Stainless Steel, Alloy Steel, Carbon Steel, Mild Steel, Nickel Alloys in form of Seamless Tubes, Welded & ERW Pipes & Tubes. Steel Tubes India is the only company in India stocks more than 500 Ton Black Steel Pipe for urgent delivery. we only deal in High Quality Steel Material, we dont stock piping material without mill test certificate & documents of raw material.";
    const text2="We can offer prime quality Stainless Steel Pipes, tubes, Tubing, Sheets, Plates, Coils, Bars, Rods, Nuts, Bolts, screws & other piping connections in High Grade quality with Third party Inspection certificate. Steel Tubes India is RINA approved Company engaged in Trading & Export of oil and gas piping material, we are PED approved Manufacturer of Pipe Connections in Stainless steel, Alloy Steel, API 5L Carbon steel, Inconel, Monel Alloy, Hastelloy & Titanium, Check our Pipe fittings & flanges pressure rating table & flanges heat number. Our Registered office is located in Mumbai and Our Factory and stockyard are located in Gujarat. Both our facilities are strategically located with close proximity from the Nhava Sheva Port Mumbai & Pipava Port Gujarat. Our Sales Agents, Dealer & Distributors are available in UK, Netherlands, Malaysia, Singapore, Thailand, Dubai (UAE), Riyadh (KSA), Mozambique, USA & Canada.Our infrastructure is spread in 30000 square feet and is well-equipped with latest technology that enables us to manufacture wide range of buttweld pipe fittings, Forged fittings, Threaded Fittings, Pipe flanges, Steel & forgings and components. We use ultramodern, well-maintained machinery, our piping products are manufactured as per International standards, mill standards, ASTM standards. To meet the varied requirements of our customers. We also provide value-added services to meet your complete needs of Piping Solutions including custom-lengths, cut and strip, custom labels, striping, printing, and more. We take pride in personal customer service, starting with a REAL person answering your calls and an individual representative working with you one-on-one to meet your pricing and delivery needs.Our entire range of products is tested on various parameters, Steel Tubes India is a Certified & Award winner Supplier & Exporter of Industrial Steel Piping Material, Buy High Quality Steel Pipes & Tubes at best price. We are supplying Steel Tubes & pipe connections to more than 600 reputed organisations in 30+ countries since 1992 & 95% Customers are our repeat customers.";
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
            <CardSpotlightDemo heading={heading} text={text1} image="./img.png" />
            <CardSpotlightDemo text={text2 } />
          </div>
          <div>
            <Footer />
          </div>
        </NavbarDemo>
      </div>
    </>
  );
};

export default About;
