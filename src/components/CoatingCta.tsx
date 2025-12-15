import { Meteors } from "./ui/meteors";

export function CoatingCtaParent() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="relative w-full max-w-8xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
            <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            Liquid Epoxy vs Fusion Bonded Epoxy Coated Pipe
            </h1>

            <ul className="relative z-50 mb-4 text-base font-normal text-slate-500 space-y-2">
            <li className="flex items-start gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
              Liquid epoxy is applied as a wet resin by brush, roll, or spray. It often requires multiple coats to reach target thickness. Each coat may need time to touch-dry before the next application. When cured it forms a flexible, adherent film that fills minor surface defects. Proper mixing, application, and curing are essential for long-term protection.
              </span>
            </li>
            <li className="flex items-start gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
              Fusion bonded epoxy (FBE) is applied as a dry powder and fused with heat to form a continuous film. It typically allows a single-pass application with rapid fusion and cure on heated surfaces. The resulting coating is hard, abrasion-resistant, and tightly adhered. FBE is well-suited for pipelines and fittings that require uniform coverage. Surface temperature, powder quality, and application control determine the final performance.
              </span>
            </li>
            </ul>
            <hr className="relative z-50 border-gray-700 my-4" />
            <h2 className="relative z-50 mb-4 text-xl font-bold text-white">
            High build vs low build epoxy Lining
            </h2>
            <ul className="relative z-50 mb-4 text-base font-normal text-slate-500 space-y-2">
            <li className="flex items-start gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
              High-build epoxy systems are applied thicker to create a robust barrier. They provide improved chemical and mechanical resistance compared to thinner films. The extra thickness helps bridge minor surface imperfections and increases service life. High-build coatings are usually more costly and may require longer cure times. When applied and inspected correctly they deliver superior long-term protection.
              </span>
            </li>
            <li className="flex items-start gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
              Low-build coatings are thinner and typically more economical to apply. They cure faster and can be advantageous where rapid turnaround is required. While offering corrosion protection, they provide less margin against mechanical damage than high-build systems. Maintenance or recoat cycles may be more frequent with low-build options. They work well when combined with excellent surface preparation and inspection regimes.
              </span>
            </li>
            </ul>

            <hr className="relative z-50 border-gray-700 my-4" />
            <h2 className="relative z-50 mb-4 text-xl font-bold text-white">
            Surface Preparation & Adhesion
            </h2>
            <ul className="relative z-50 mb-4 text-base font-normal text-slate-500 space-y-2">
            <li className="flex items-start gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
              Thorough surface preparation such as abrasive blast cleaning to the specified Sa grade is critical. It removes rust, mill scale, and contaminants that hinder adhesion. A proper surface profile promotes mechanical interlocking of the coating. Inadequate prep leads to premature coating failure and underfilm corrosion. Verification of cleanliness and profile before coating is essential.
              </span>
            </li>
            <li className="flex items-start gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
              Adhesion is influenced by substrate chemistry, profile, and environmental conditions during application. Primer choice, coating compatibility, and correct application technique all matter. Humidity, temperature, and contamination during coating can reduce bond strength. Adhesion testing such as pull-off tests helps confirm proper bonding. Addressing adhesion factors upfront prevents costly failures later.
              </span>
            </li>
            </ul>

            <hr className="relative z-50 border-gray-700 my-4" />
            <h2 className="relative z-50 mb-4 text-xl font-bold text-white">
            Corrosion Resistance & Service Life
            </h2>
            <ul className="relative z-50 mb-4 text-base font-normal text-slate-500 space-y-2">
            <li className="flex items-start gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
              High-build systems create a thicker physical barrier that reduces permeation of corrosive species. This generally translates to longer service life when correctly applied and maintained. Mechanical robustness also improves resistance to handling and operational damage. Environmental exposure and proper maintenance determine real-world longevity. Combining coatings with appropriate design and protection strategies maximizes life expectancy.
              </span>
            </li>
            <li className="flex items-start gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
              No single coating eliminates corrosion risk; selection must match the environment and operating conditions. FBE and liquid epoxy each have trade-offs in flexibility, repairability, and thermal stability. Regular inspections and timely repairs extend effective service life. Supplementary measures like cathodic protection and material selection further reduce corrosion risk. Lifecycle cost analysis helps choose the most effective solution for a given application.
              </span>
            </li>
            </ul>

          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}
