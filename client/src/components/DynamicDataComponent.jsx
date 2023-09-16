import { useState, useEffect } from "react";
import axios from "axios";
import ShowData from "./ShowData";

export default function DynamicDataComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/tickers")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container px-5 mx-auto max-w-screen-xl overflow-x-auto">
      {loading ? (
        <div className="text-gray-400 text-4xl ">Loading data...</div>
      ) : (
        <table className="w-full table-auto mt-10 border-separate border-spacing-y-5">
          <thead>
            <tr className="text-gray-400 text-2xl">
              <th>Name</th>
              <th>Last</th>
              <th>Buy</th>
              <th>Sell</th>
              <th>Volume</th>
              <th>Base Unit</th>
            </tr>
          </thead>
          <tbody className="text-2xl">
            {data.tickers.map((item) => (
              <ShowData
                key={item.id}
                id={item.id}
                name={item.name}
                last={item.last}
                buy={item.buy}
                sell={item.sell}
                volume={item.volume}
                base_unit={item.base_unit}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
