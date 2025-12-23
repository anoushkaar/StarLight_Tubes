const ChemicalInfo = () => {
  return (
    <div>
      {" "}
      <div className="mb-10">
        <div className="bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-700 dark:border-zinc-800 p-6 overflow-auto">
          <h3 className="text-2xl font-bold text-center text-white mb-4">
            Stainless Steel — Chemical Composition
          </h3>
          <div className="w-full overflow-x-auto [&_th]:py-3 [&_td]:py-3">
            <table className="table-auto w-full min-w-[1100px] text-sm md:text-base">
              <thead className="bg-gray-900 sticky top-0">
                <tr className="text-left">
                  <th className="px-3 font-semibold text-white uppercase text-xs tracking-wide">
                    Grade
                  </th>
                  <th className="px-3 font-semibold text-white uppercase text-xs tracking-wide">
                    C (Max)
                  </th>
                  <th className="px-3 font-semibold text-white uppercase text-xs tracking-wide">
                    Mn (Max)
                  </th>
                  <th className="px-3 font-semibold text-white uppercase text-xs tracking-wide">
                    P (Max)
                  </th>
                  <th className="px-3 font-semibold text-white uppercase text-xs tracking-wide">
                    S (Max)
                  </th>
                  <th className="px-3 font-semibold text-white uppercase text-xs tracking-wide">
                    Si (Max)
                  </th>
                  <th className="px-3 font-semibold text-white uppercase text-xs tracking-wide">
                    Cr
                  </th>
                  <th className="px-3 font-semibold text-white uppercase text-xs tracking-wide">
                    Ni
                  </th>
                  <th className="px-3 font-semibold text-white uppercase text-xs tracking-wide">
                    Mo
                  </th>
                  <th className="px-3 font-semibold text-white uppercase text-xs tracking-wide">
                    Nitrogen (Max)
                  </th>
                  <th className="px-3 font-semibold text-white uppercase text-xs tracking-wide">
                    Cu / Others
                  </th>
                </tr>
              </thead>
              <tbody className="text-white bg-gray-900 [&_tr]:border-t [&_tr]:border-gray-700">
                <tr className="border-t">
                  <td className="px-3 py-2">301</td>
                  <td className="px-3 py-2">0.15</td>
                  <td className="px-3 py-2">2.00</td>
                  <td className="px-3 py-2">0.045</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">1.00</td>
                  <td className="px-3 py-2">16.00 – 18.00</td>
                  <td className="px-3 py-2">6.00 – 8.00</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">0.10</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">304</td>
                  <td className="px-3 py-2">0.08</td>
                  <td className="px-3 py-2">2.00</td>
                  <td className="px-3 py-2">0.045</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">18.00 – 20.00</td>
                  <td className="px-3 py-2">8.00- 10.50</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">0.10</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">304L</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">2.00</td>
                  <td className="px-3 py-2">0.045</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">18.00 – 20.00</td>
                  <td className="px-3 py-2">8.00- 12.00</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">0.10</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">310S</td>
                  <td className="px-3 py-2">0.08</td>
                  <td className="px-3 py-2">2.00</td>
                  <td className="px-3 py-2">0.045</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">1.50</td>
                  <td className="px-3 py-2">24.00- 26.00</td>
                  <td className="px-3 py-2">19.00 – 22.00</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">316</td>
                  <td className="px-3 py-2">0.08</td>
                  <td className="px-3 py-2">2.00</td>
                  <td className="px-3 py-2">0.045</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">16.00 – 18.00</td>
                  <td className="px-3 py-2">10.00 – 14.00</td>
                  <td className="px-3 py-2">2.00 – 3.00</td>
                  <td className="px-3 py-2">0.10</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">316L</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">2.00</td>
                  <td className="px-3 py-2">0.045</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">16.00 – 18.00</td>
                  <td className="px-3 py-2">10.00 – 14.00</td>
                  <td className="px-3 py-2">2.00 – 3.00</td>
                  <td className="px-3 py-2">0.10</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">317</td>
                  <td className="px-3 py-2">0.08</td>
                  <td className="px-3 py-2">2.00</td>
                  <td className="px-3 py-2">0.045</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">18.00 – 20.00</td>
                  <td className="px-3 py-2">11.00 – 14.00</td>
                  <td className="px-3 py-2">3.00 – 4.00</td>
                  <td className="px-3 py-2">0.10</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">317L</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">2.00</td>
                  <td className="px-3 py-2">0.045</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">18.00 – 20.00</td>
                  <td className="px-3 py-2">11.00 – 15.00</td>
                  <td className="px-3 py-2">3.00 – 4.00</td>
                  <td className="px-3 py-2">0.10</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">321</td>
                  <td className="px-3 py-2">0.08</td>
                  <td className="px-3 py-2">2.00</td>
                  <td className="px-3 py-2">0.045</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">17.00 – 19.00</td>
                  <td className="px-3 py-2">9.00 – 12.00</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">0.10</td>
                  <td className="px-3 py-2">Ti5 ( C + N ) Min or 0.70 max</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">347</td>
                  <td className="px-3 py-2">0.08</td>
                  <td className="px-3 py-2">2.00</td>
                  <td className="px-3 py-2">0.045</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">17.00 – 19.00</td>
                  <td className="px-3 py-2">9.00 – 13.00</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">Cb= 10x ( C Min ) or 1.00 Max</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">409</td>
                  <td className="px-3 py-2">0.08</td>
                  <td className="px-3 py-2">1.00</td>
                  <td className="px-3 py-2">0.040</td>
                  <td className="px-3 py-2">0.010</td>
                  <td className="px-3 py-2">1.00</td>
                  <td className="px-3 py-2">10.50 – 11.75</td>
                  <td className="px-3 py-2">0.50</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">Ti= 6x (C+ N ) Min or 0.70 Max</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">409M</td>
                  <td className="px-3 py-2">0.03</td>
                  <td className="px-3 py-2">0.81.2</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.40.75</td>
                  <td className="px-3 py-2">11.00- 12.00</td>
                  <td className="px-3 py-2">1.5 max.</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">Ti= 6x (C) Min or 0.70 Max</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">410S</td>
                  <td className="px-3 py-2">0.08</td>
                  <td className="px-3 py-2">1.00</td>
                  <td className="px-3 py-2">0.040</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">1.00</td>
                  <td className="px-3 py-2">11.50- 13.50</td>
                  <td className="px-3 py-2">0.60</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">410</td>
                  <td className="px-3 py-2">0.15</td>
                  <td className="px-3 py-2">1.00</td>
                  <td className="px-3 py-2">0.040</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">1.00</td>
                  <td className="px-3 py-2">11.50- 13.50</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">420</td>
                  <td className="px-3 py-2">0.35</td>
                  <td className="px-3 py-2">0.50</td>
                  <td className="px-3 py-2">0.035</td>
                  <td className="px-3 py-2">0.015</td>
                  <td className="px-3 py-2">0.50</td>
                  <td className="px-3 py-2">12.00 – 13.00</td>
                  <td className="px-3 py-2">0.20.3</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">430</td>
                  <td className="px-3 py-2">0.12</td>
                  <td className="px-3 py-2">1.00</td>
                  <td className="px-3 py-2">0.040</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">1.00</td>
                  <td className="px-3 py-2">16.00 – 18.00</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">JSL AUS</td>
                  <td className="px-3 py-2">0.08</td>
                  <td className="px-3 py-2">7.08.0</td>
                  <td className="px-3 py-2">0.070</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">15.50 – 16.50</td>
                  <td className="px-3 py-2">4.25 – 4.75</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">0.9 – 1.10</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">JS- 203</td>
                  <td className="px-3 py-2">0.08</td>
                  <td className="px-3 py-2">9.2510.25</td>
                  <td className="px-3 py-2">0.070</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">14.25 – 15.25</td>
                  <td className="px-3 py-2">2.25 – 2.75</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">1.60- 2.0</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">301M</td>
                  <td className="px-3 py-2">0.10</td>
                  <td className="px-3 py-2">4.55.5</td>
                  <td className="px-3 py-2">0.060</td>
                  <td className="px-3 py-2">0.030</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">14.50 – 15.50</td>
                  <td className="px-3 py-2">6.0 – 7.0</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">-</td>
                  <td className="px-3 py-2">1.70- 1.90</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-300 mt-3">
            * Thickness of 1.27mm &amp; below will have elongation of 20% min.
          </p>
        </div>

        <div className="mt-6">
          <div className="bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-700 p-6 overflow-auto">
            <h3 className="text-2xl font-bold text-center text-white mb-4">
              ASTM A285-78 — Pressure Vessel Plates (Low &amp; Intermediate
              Tensile)
            </h3>
            <div className="w-full overflow-x-auto [&_th]:py-3 [&_td]:py-3">
              <table className="table-auto w-full min-w-[1100px] text-sm md:text-base">
                <thead className="bg-gray-900 sticky top-0">
                  <tr className="text-left">
                    <th className="px-3 font-semibold text-white">
                      Designation
                    </th>
                    <th className="px-3 font-semibold text-white">C max</th>
                    <th className="px-3 font-semibold text-white">Mn max</th>
                    <th className="px-3 font-semibold text-white">P max</th>
                    <th className="px-3 font-semibold text-white">S max</th>
                    <th className="px-3 font-semibold text-white">
                      Tensile Strength ksi (MPa)
                    </th>
                    <th className="px-3 font-semibold text-white">
                      Yield Strength ksi (MPa), min.
                    </th>
                    <th className="px-3 font-semibold text-white">
                      Elongation % min (GL=8 in.)
                    </th>
                    <th className="px-3 font-semibold text-white">
                      Elongation % min (GL=2 in.)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-gray-900 [&_tr]:border-t [&_tr]:border-gray-700">
                  <tr>
                    <td className="px-3 py-2">A 285 A</td>
                    <td className="px-3 py-2">0.17</td>
                    <td className="px-3 py-2">0.90</td>
                    <td className="px-3 py-2">0.035</td>
                    <td className="px-3 py-2">0.040</td>
                    <td className="px-3 py-2">45–65 (310–450)</td>
                    <td className="px-3 py-2">24 (165)</td>
                    <td className="px-3 py-2">27</td>
                    <td className="px-3 py-2">30</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">A 285 B</td>
                    <td className="px-3 py-2">0.22</td>
                    <td className="px-3 py-2">0.90</td>
                    <td className="px-3 py-2">0.035</td>
                    <td className="px-3 py-2">0.040</td>
                    <td className="px-3 py-2">50–70 (345–485)</td>
                    <td className="px-3 py-2">27 (185)</td>
                    <td className="px-3 py-2">25</td>
                    <td className="px-3 py-2">28</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">A 285 C</td>
                    <td className="px-3 py-2">0.28</td>
                    <td className="px-3 py-2">0.90</td>
                    <td className="px-3 py-2">0.035</td>
                    <td className="px-3 py-2">0.040</td>
                    <td className="px-3 py-2">55–75 (380–515)</td>
                    <td className="px-3 py-2">30 (205)</td>
                    <td className="px-3 py-2">23</td>
                    <td className="px-3 py-2">27</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-700 p-6 overflow-auto">
            <h3 className="text-2xl font-bold text-center text-white mb-4">
              Alloy Steel — Chemical Composition &amp; Tensile Test
            </h3>
            <div className="w-full overflow-x-auto [&_th]:py-3 [&_td]:py-3">
              <table className="table-auto w-full min-w-[1100px] text-sm md:text-base">
                <thead className="bg-gray-900 sticky top-0">
                  <tr className="text-left">
                    <th className="px-3 font-semibold text-white">
                      Designation
                    </th>
                    <th className="px-3 font-semibold text-white">C max.</th>
                    <th className="px-3 font-semibold text-white">Si</th>
                    <th className="px-3 font-semibold text-white">P max</th>
                    <th className="px-3 font-semibold text-white">S max</th>
                    <th className="px-3 font-semibold text-white">
                      Tensile Strength Kgf/mm2
                    </th>
                    <th className="px-3 font-semibold text-white">
                      Yield Point Kgf/mm2, min.
                    </th>
                    <th className="px-3 font-semibold text-white">
                      Elongation (Test Piece)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-gray-900 [&_tr]:border-t [&_tr]:border-gray-700">
                  <tr>
                    <td className="px-3 py-2">IS 2002-1</td>
                    <td className="px-3 py-2">0.18</td>
                    <td className="px-3 py-2">0.10–0.35</td>
                    <td className="px-3 py-2">0.40</td>
                    <td className="px-3 py-2">0.40</td>
                    <td className="px-3 py-2">37–45</td>
                    <td className="px-3 py-2">55</td>
                    <td className="px-3 py-2">5.65/So: 26 • 4/So: 30</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">IS 2002-2A</td>
                    <td className="px-3 py-2">0.20</td>
                    <td className="px-3 py-2">0.10–0.35</td>
                    <td className="px-3 py-2">0.050</td>
                    <td className="px-3 py-2">0.050</td>
                    <td className="px-3 py-2">42–50</td>
                    <td className="px-3 py-2">50</td>
                    <td className="px-3 py-2">5.65/So: 25 • 4/So: 29</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">IS 2002-2b</td>
                    <td className="px-3 py-2">0.22</td>
                    <td className="px-3 py-2">0.10–0.35</td>
                    <td className="px-3 py-2">0.050</td>
                    <td className="px-3 py-2">0.050</td>
                    <td className="px-3 py-2">52–62</td>
                    <td className="px-3 py-2">50</td>
                    <td className="px-3 py-2">5.65/So: 20 • 4/So: 24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-700 p-6 overflow-auto">
            <h3 className="text-2xl font-bold text-center text-white mb-4">
              Kawasaki Specification [AG] — Steel Plates for Galvanizing Pots
            </h3>
            <div className="w-full overflow-x-auto [&_th]:py-3 [&_td]:py-3">
              <table className="table-auto w-full min-w-[1100px] text-sm md:text-base">
                <thead className="bg-gray-900 sticky top-0">
                  <tr className="text-left">
                    <th className="px-3 font-semibold text-white">
                      Designation
                    </th>
                    <th className="px-3 font-semibold text-white">C</th>
                    <th className="px-3 font-semibold text-white">Si</th>
                    <th className="px-3 font-semibold text-white">Mn</th>
                    <th className="px-3 font-semibold text-white">P (Max)</th>
                    <th className="px-3 font-semibold text-white">S (Max)</th>
                    <th className="px-3 font-semibold text-white">
                      Yield Point
                    </th>
                    <th className="px-3 font-semibold text-white">
                      Tensile Strength Kgf/mm2 (N/mm2)
                    </th>
                    <th className="px-3 font-semibold text-white">
                      Elongation %, Test Piece
                    </th>
                    <th className="px-3 font-semibold text-white">
                      Angle of Bend
                    </th>
                    <th className="px-3 font-semibold text-white">
                      Inside Radius
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-gray-900 [&_tr]:border-t [&_tr]:border-gray-700">
                  <tr>
                    <td className="px-3 py-2">AG</td>
                    <td className="px-3 py-2">0.09</td>
                    <td className="px-3 py-2">tr.0.20-0.40</td>
                    <td className="px-3 py-2">0.30</td>
                    <td className="px-3 py-2">0.030</td>
                    <td className="px-3 py-2">–</td>
                    <td className="px-3 py-2">–</td>
                    <td className="px-3 py-2">–</td>
                    <td className="px-3 py-2">–</td>
                    <td className="px-3 py-2">–</td>
                    <td className="px-3 py-2">–</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemicalInfo;
