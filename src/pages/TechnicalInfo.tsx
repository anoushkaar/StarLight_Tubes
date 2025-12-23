import { useState } from "react";
import Footer from "../components/main components/Fotter";
import StatsGrid from "../components/main components/HomeStats";
import { InfiniteMovingCardsDemo } from "../components/main components/MovingCards";
import { NavbarDemo } from "../components/main components/Navbar";
import { PageHero } from "../components/main components/PageHero";
import ChemicalInfo from "../components/sub components/ChemicalInfo";
import DimensionsInfo from "../components/sub components/DimensionsInfo";
import MechanicalInfo from "../components/sub components/MechanicalInfo";

const materials = [
  {
    key: "stainless-steel",
    name: "Stainless Steel (304)",
    chemical:
      "C: ≤0.08%, Cr: 18–20%, Ni: 8–10%, Mn: ≤2%, Si: ≤1%, P: ≤0.045%, S: ≤0.03%",
    mechanical: "Tensile: 515 MPa, Yield: 205 MPa, Elongation: 40%",
    dimensions: 'Pipes: 1/8" to 24" NB | Sheets: 0.5mm to 100mm',
  },
  {
    key: "aluminium",
    name: "Aluminium (6061)",
    chemical:
      "Al: balance, Si: 0.4–0.8%, Fe: ≤0.7%, Cu: 0.15–0.4%, Mn: ≤0.15%, Mg: 0.8–1.2%",
    mechanical: "Tensile: 310 MPa, Yield: 270 MPa, Elongation: 12%",
    dimensions: 'Pipes: 1/4" to 12" NB | Sheets: 0.5mm to 100mm',
  },
  {
    key: "copper",
    name: "Copper (C10100)",
    chemical: "Cu: ≥99.9% (oxygen-free), Impurities: <0.1%",
    mechanical: "Tensile: 220–250 MPa, Yield: 33–60 MPa, Elongation: 30–45%",
    dimensions: 'Pipes: 1/4" to 8" NB | Sheets: 0.5mm to 50mm',
  },
  {
    key: "carbon-steel",
    name: "Carbon Steel (A106)",
    chemical: "C: 0.25–0.35%, Mn: 0.3–1.0%, P: ≤0.035%, S: ≤0.04%",
    mechanical: "Tensile: 415–550 MPa, Yield: 205–345 MPa, Elongation: 20%",
    dimensions: 'Pipes: 1/8" to 48" NB depending on grade',
  },
  {
    key: "inconel",
    name: "Inconel (625)",
    chemical: "Ni: balance, Cr: 20–23%, Mo: 8–10%, Fe: ≤5%, Nb+Ta: 3.15–4.15%",
    mechanical: "Tensile: 827 MPa, Yield: 414 MPa, Elongation: 30%",
    dimensions: "Available in plates, sheets, pipes per mill capability",
  },
];

const TechnicalInfo = () => {
  const [view, setView] = useState<"chemical" | "mechanical" | "dimensions">(
    "chemical"
  );

  return (
    <div className="flex min-h-svh  flex-col items-center justify-center">
      <NavbarDemo>
        <PageHero
          title="Technical Information"
          subtitle="Datasheets, specs and engineering support"
          image="/MainScrollableImage/Home.webp"
        />

        <div className="w-full max-w-7xl mx-auto px-6 mt-20">
          {/* Toggle Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <button
              onClick={() => setView("chemical")}
              className={`px-5 py-2 rounded-full font-semibold transition-colors ${
                view === "chemical"
                  ? "bg-sky-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-200"
              }`}
            >
              Chemical Composition
            </button>
            <button
              onClick={() => setView("mechanical")}
              className={`px-5 py-2 rounded-full font-semibold transition-colors ${
                view === "mechanical"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-200"
              }`}
            >
              Mechanical Properties
            </button>
            <button
              onClick={() => setView("dimensions")}
              className={`px-5 py-2 rounded-full font-semibold transition-colors ${
                view === "dimensions"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-200"
              }`}
            >
              Pipe Dimensions
            </button>
          </div>

          {/* Chemical view: show stainless steel composition table first */}
          {view === "chemical" ? (
            <ChemicalInfo />
          ) : view === "mechanical" ? (
            <MechanicalInfo />
          ) : view === "dimensions" ? (
            <DimensionsInfo />
          ) : null}
        </div>

        <div>
          <InfiniteMovingCardsDemo />
        </div>

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

export default TechnicalInfo;
