const DimensionsInfo = () => {
  return (
    <div className="mb-10">
      <div className="bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-700 dark:border-zinc-800 p-6 overflow-auto">
        <h3 className="text-2xl font-bold text-center text-white mb-4">
          Pipe Schedules — Nominal Bore / Weights
        </h3>
        <div className="w-full overflow-x-auto [&_th]:py-3 [&_td]:py-3">
          <table className="table-auto w-full min-w-275 text-sm md:text-base">
            <thead className="bg-gray-900 sticky top-0">
              <tr className="text-left">
                <th className="px-3 font-semibold text-white">
                  Nominal Bore (mm)
                </th>
                <th className="px-3 font-semibold text-white">INCH</th>
                <th className="px-3 font-semibold text-white">
                  Outside Dia (mm)
                </th>
                <th className="px-3 font-semibold text-white">
                  5S (Wt mm / Kg/mt)
                </th>
                <th className="px-3 font-semibold text-white">
                  10S (Wt mm / Kg/mt)
                </th>
                <th className="px-3 font-semibold text-white">
                  40S (Wt mm / Kg/mt)
                </th>
                <th className="px-3 font-semibold text-white">
                  80S (Wt mm / Kg/mt)
                </th>
                <th className="px-3 font-semibold text-white">
                  160S (Wt mm / Kg/mt)
                </th>
                <th className="px-3 font-semibold text-white">
                  XXS (Wt mm / Kg/mt)
                </th>
              </tr>
            </thead>
            <tbody className="text-white bg-gray-900 [&_tr]:border-t [&_tr]:border-gray-700">
              <tr className="border-t">
                <td className="px-3 py-2">3</td>
                <td className="px-3 py-2">1/8</td>
                <td className="px-3 py-2">10.3</td>
                <td className="px-3 py-2">1.24 / 0.276</td>
                <td className="px-3 py-2">1.24 / 0.28</td>
                <td className="px-3 py-2">1.73 / 0.37</td>
                <td className="px-3 py-2">2.41 / 0.47</td>
                <td className="px-3 py-2">-</td>
                <td className="px-3 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">6</td>
                <td className="px-3 py-2">1/4</td>
                <td className="px-3 py-2">13.7</td>
                <td className="px-3 py-2">1.24 / 0.390</td>
                <td className="px-3 py-2">1.65 / 0.49</td>
                <td className="px-3 py-2">2.24 / 0.631</td>
                <td className="px-3 py-2">3.02 / 0.80</td>
                <td className="px-3 py-2">-</td>
                <td className="px-3 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">10</td>
                <td className="px-3 py-2">3/8</td>
                <td className="px-3 py-2">17.1</td>
                <td className="px-3 py-2">1.24 / 0.490</td>
                <td className="px-3 py-2">1.65 / 0.63</td>
                <td className="px-3 py-2">2.31 / 0.845</td>
                <td className="px-3 py-2">3.20 / 1.10</td>
                <td className="px-3 py-2">-</td>
                <td className="px-3 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">15</td>
                <td className="px-3 py-2">1/2</td>
                <td className="px-3 py-2">21.3</td>
                <td className="px-3 py-2">1.65 / 0.800</td>
                <td className="px-3 py-2">2.11 / 1.00</td>
                <td className="px-3 py-2">2.77 / 1.27</td>
                <td className="px-3 py-2">3.75 / 1.62</td>
                <td className="px-3 py-2">4.75 / 1.94</td>
                <td className="px-3 py-2">7.47 / 2.55</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">20</td>
                <td className="px-3 py-2">3/4</td>
                <td className="px-3 py-2">26.7</td>
                <td className="px-3 py-2">1.65 / 1.03</td>
                <td className="px-3 py-2">2.11 / 1.28</td>
                <td className="px-3 py-2">2.87 / 1.68</td>
                <td className="px-3 py-2">3.91 / 2.20</td>
                <td className="px-3 py-2">5.54 / 2.89</td>
                <td className="px-3 py-2">7.82 / 3.63</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">25</td>
                <td className="px-3 py-2">1</td>
                <td className="px-3 py-2">33.4</td>
                <td className="px-3 py-2">1.65 / 1.30</td>
                <td className="px-3 py-2">2.77 / 2.09</td>
                <td className="px-3 py-2">3.38 / 2.50</td>
                <td className="px-3 py-2">4.55 / 3.20</td>
                <td className="px-3 py-2">6.35 / 4.24</td>
                <td className="px-3 py-2">9.09 / 5.45</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">32</td>
                <td className="px-3 py-2">1-1/4</td>
                <td className="px-3 py-2">42.2</td>
                <td className="px-3 py-2">1.65 / 1.65</td>
                <td className="px-3 py-2">2.77 / 2.70</td>
                <td className="px-3 py-2">3.56 / 3.38</td>
                <td className="px-3 py-2">4.85 / 4.47</td>
                <td className="px-3 py-2">6.35 / 5.61</td>
                <td className="px-3 py-2">9.70 / 7.77</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">40</td>
                <td className="px-3 py-2">1-1/2</td>
                <td className="px-3 py-2">48.3</td>
                <td className="px-3 py-2">1.65 / 1.91</td>
                <td className="px-3 py-2">2.77 / 3.11</td>
                <td className="px-3 py-2">3.68 / 4.05</td>
                <td className="px-3 py-2">5.08 / 5.41</td>
                <td className="px-3 py-2">7.14 / 7.25</td>
                <td className="px-3 py-2">10.16 / 9.54</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">50</td>
                <td className="px-3 py-2">2</td>
                <td className="px-3 py-2">60.3</td>
                <td className="px-3 py-2">1.65 / 2.40</td>
                <td className="px-3 py-2">2.77 / 3.93</td>
                <td className="px-3 py-2">3.91 / 5.44</td>
                <td className="px-3 py-2">5.44 / 5.54</td>
                <td className="px-3 py-2">7.48 / 8.74</td>
                <td className="px-3 py-2">11.1 / 11.07</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">65</td>
                <td className="px-3 py-2">2-1/2</td>
                <td className="px-3 py-2">73.0</td>
                <td className="px-3 py-2">2.11 / 3.69</td>
                <td className="px-3 py-2">3.05 / 5.26</td>
                <td className="px-3 py-2">5.16 / 8.63</td>
                <td className="px-3 py-2">7.01 / 11.4</td>
                <td className="px-3 py-2">9.53 / 14.9</td>
                <td className="px-3 py-2">14.2 / 20.39</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">80</td>
                <td className="px-3 py-2">3</td>
                <td className="px-3 py-2">88.9</td>
                <td className="px-3 py-2">2.11 / 4.51</td>
                <td className="px-3 py-2">3.05 / 6.45</td>
                <td className="px-3 py-2">5.49 / 11.30</td>
                <td className="px-3 py-2">7.62 / 15.2</td>
                <td className="px-3 py-2">11.1 / 21.3</td>
                <td className="px-3 py-2">15.24 / 27.65</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">100</td>
                <td className="px-3 py-2">4</td>
                <td className="px-3 py-2">114.3</td>
                <td className="px-3 py-2">2.11 / 5.84</td>
                <td className="px-3 py-2">3.05 / 8.36</td>
                <td className="px-3 py-2">6.02 / 16.07</td>
                <td className="px-3 py-2">8.56 / 22.3</td>
                <td className="px-3 py-2">13.49 / 33.54</td>
                <td className="px-3 py-2">17.12 / 41.03</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">125</td>
                <td className="px-3 py-2">5</td>
                <td className="px-3 py-2">141.3</td>
                <td className="px-3 py-2">2.77 / 9.47</td>
                <td className="px-3 py-2">3.40 / 11.57</td>
                <td className="px-3 py-2">6.55 / 21.8</td>
                <td className="px-3 py-2">9.53 / 31.97</td>
                <td className="px-3 py-2">15.88 / 49.11</td>
                <td className="px-3 py-2">19.05 / 57.43</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">150</td>
                <td className="px-3 py-2">6</td>
                <td className="px-3 py-2">168.3</td>
                <td className="px-3 py-2">2.77 / 11.32</td>
                <td className="px-3 py-2">3.40 / 13.84</td>
                <td className="px-3 py-2">7.11 / 28.3</td>
                <td className="px-3 py-2">10.97 / 42.7</td>
                <td className="px-3 py-2">18.2 / 67.56</td>
                <td className="px-3 py-2">21.95 / 79.22</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">200</td>
                <td className="px-3 py-2">8</td>
                <td className="px-3 py-2">219.1</td>
                <td className="px-3 py-2">2.77 / 14.79</td>
                <td className="px-3 py-2">3.76 / 19.96</td>
                <td className="px-3 py-2">8.18 / 42.6</td>
                <td className="px-3 py-2">12.7 / 64.6</td>
                <td className="px-3 py-2">23.0 / 111.2</td>
                <td className="px-3 py-2">22.23 / 107.8</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">250</td>
                <td className="px-3 py-2">10</td>
                <td className="px-3 py-2">273.1</td>
                <td className="px-3 py-2">3.40 / 22.63</td>
                <td className="px-3 py-2">4.19 / 27.78</td>
                <td className="px-3 py-2">9.27 / 60.5</td>
                <td className="px-3 py-2">12.7 / 96.0</td>
                <td className="px-3 py-2">28.6 / 172.4</td>
                <td className="px-3 py-2">25.40 / 155.15</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">300</td>
                <td className="px-3 py-2">12</td>
                <td className="px-3 py-2">323.9</td>
                <td className="px-3 py-2">3.96 / 31.25</td>
                <td className="px-3 py-2">4.57 / 36.00</td>
                <td className="px-3 py-2">9.52 / 73.88</td>
                <td className="px-3 py-2">12.7 / 132.0</td>
                <td className="px-3 py-2">33.32 / 238.76</td>
                <td className="px-3 py-2">25.40 / 186.97</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">350</td>
                <td className="px-3 py-2">14</td>
                <td className="px-3 py-2">355.6</td>
                <td className="px-3 py-2">3.96 / 34.36</td>
                <td className="px-3 py-2">4.78 / 41.3</td>
                <td className="px-3 py-2">11.13 / 94.59</td>
                <td className="px-3 py-2">19.05 / 158.08</td>
                <td className="px-3 py-2">35.71 / 281.70</td>
                <td className="px-3 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">400</td>
                <td className="px-3 py-2">16</td>
                <td className="px-3 py-2">406.4</td>
                <td className="px-3 py-2">4.19 / 41.56</td>
                <td className="px-3 py-2">4.78 / 47.29</td>
                <td className="px-3 py-2">12.7 / 123.30</td>
                <td className="px-3 py-2">21.41 / 203.33</td>
                <td className="px-3 py-2">40.46 / 365.11</td>
                <td className="px-3 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">450</td>
                <td className="px-3 py-2">18</td>
                <td className="px-3 py-2">457.2</td>
                <td className="px-3 py-2">4.19 / 46.80</td>
                <td className="px-3 py-2">4.78 / 53.42</td>
                <td className="px-3 py-2">14.27 / 155.80</td>
                <td className="px-3 py-2">23.8 / 254.36</td>
                <td className="px-3 py-2">45.71 / 466.40</td>
                <td className="px-3 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">500</td>
                <td className="px-3 py-2">20</td>
                <td className="px-3 py-2">508.0</td>
                <td className="px-3 py-2">4.78 / 59.25</td>
                <td className="px-3 py-2">5.54 / 68.71</td>
                <td className="px-3 py-2">15.09 / 183.42</td>
                <td className="px-3 py-2">26.19 / 311.2</td>
                <td className="px-3 py-2">49.99 / 564.68</td>
                <td className="px-3 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">600</td>
                <td className="px-3 py-2">24</td>
                <td className="px-3 py-2">609.6</td>
                <td className="px-3 py-2">5.54 / 82.47</td>
                <td className="px-3 py-2">6.35 / 94.45</td>
                <td className="px-3 py-2">17.48 / 255.41</td>
                <td className="px-3 py-2">30.96 / 442.08</td>
                <td className="px-3 py-2">59.54 / 808.22</td>
                <td className="px-3 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DimensionsInfo;
