import { Meteors } from "./ui/meteors";

export function ContactCtaParent() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            Head Office
          </h1>

            <ul className="relative z-50 mb-4 text-base font-normal text-slate-500 space-y-2">
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
              <strong>Address:</strong> Steel Tubes India (Alloy Steel Export
              Division), Ashtavinayak Building, Office No.303, 3rd Floor,
              Sadanand Wadi, V.P. Road, Girgaum, Mumbai-400004, Maharashtra,
              India
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
              <strong>Phone:</strong> +91 22-61432000 (30 Lines), 23895908,
              23822821, 66393996
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
              <span>
              <strong>Email:</strong> stindia@stindia.com,
              stindia@stindia.co.in
              </span>
            </li>
            </ul>
            <hr className="relative z-50 border-gray-700 my-4" />
            <h2 className="relative z-50 mb-4 text-xl font-bold text-white">
              Business Hours
            </h2>
            <ul className="relative z-50 mb-4 text-base font-normal text-slate-500 space-y-2">
              <li className="flex items-center gap-2 ">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 ml-10"></span>
                <span>
                  Monday - Saturday - 10am to 7pm, Sunday - Closed
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
