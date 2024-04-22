import { useEffect, useState } from "react";
import pb from "../lib/pocketbase";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";

export default function Progress() {
  const [data, setData] = useState([]);
  async function getData() {
    const data = await pb.collection("recorded_weight").getFullList({
      sort: "created",
    });
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="h-dvh">
        <h1 className="text-xl font-bold text-gray-700 mb-6">
          A Goal Without a Plan is Just a Wish
        </h1>
        <ResponsiveContainer width="100%" height="60%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="created" />
            <YAxis domain={[100, 150]} />
            <Tooltip />

            <Line type="monotone" dataKey="weight" stroke="#8884d8" />
            {/* <Line type="monotone" dataKey="bench" stroke="#82ca9d" />
              <Line type="monotone" dataKey="squat" stroke="#ffc658" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
