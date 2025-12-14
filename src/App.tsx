import { ImagesSliderDemo } from "./components/ImageSlider";
import { MeteorsDemo } from "./components/LInkDisplayCard";
import { NavbarDemo } from "./components/Navbar";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <NavbarDemo>
        <div className="w-full h-fit flex justify-center ">
          <ImagesSliderDemo />
        </div>
        <div className="w-full h-screen flex justify-center mt-20 gap-20">
          <MeteorsDemo
            title="Seamless pipe Suppliers"
            items={[
              "Stainless Steel",
              "Stainless Steel Tube",
              "Stainless Steel Pipe",
              "Stainless Steel Sheet",
              "Stainless Steel Round Bar",
              "Stainless Steel Fasteners",
              "Stainless Steel Wire",
              "304 Stainless Steel Pipe",
              "304 Stainless Steel Plate",
              "316 Stainless Steel Tube",
              "316 Stainless Steel Plate",
              "316L Stainless Steel Pipe",
              "ERW Pipe Manufacturers in India"
            ]}
          />
          <MeteorsDemo
            title="Nickel Alloy"
            items={[
              "Nickel Pipe",
              "Nickel Sheet",
              "Inconel Pipe",
              "Inconel Plate",
              "Inconel Round Bar",
              "Inconel Bolts",
              "Inconel 600 Plate",
              "Inconel 600 Pipe",
              "Inconel 625 Tubing",
              "Inconel 625 Pipe",
              "Inconel 625 Plate",
              "Welded Steel Pipe"
            ]}
          />
          <MeteorsDemo
            title="Carbon Steel"
            items={[
              "Carbon Steel Pipe",
              "ASTM A106",
              "ASTM A53",
              "ASTM A333",
              "API 5L Grade B",
              "API 5L X65",
              "API 5L X52",
              "API 5L X42",
              "A671 Pipe",
              "A672 Pipe"
            ]}
          />
        </div>
      </NavbarDemo>
    </div>
  );
}

export default App;
