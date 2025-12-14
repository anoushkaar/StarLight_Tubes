import { Meteors } from "./ui/meteors";

export function MeteorsDemo({ title, items }) {
  return (
    <div className="">
      <div className="relative  max-w-xl   h-[400px] w-[400px]">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full md:flex-col flex-row items-start justify-start overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            {title || "Stainless Steel"}
          </h1>

          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
            {items &&
              items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
          </p>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
