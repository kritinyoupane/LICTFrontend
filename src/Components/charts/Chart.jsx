import "../charts/Chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const defaultData = [
  { name: "January", Total: 30 },
  { name: "February", Total: 35 },
  { name: "March", Total: 48 },
  { name: "April", Total: 32 },
  { name: "May", Total: 40 },
  { name: "June", Total: 45 },
  { name: "January", Total: 30 },
  { name: "February", Total: 35 },
  { name: "March", Total: 48 },
  { name: "April", Total: 32 },
  { name: "May", Total: 40 },
  { name: "June", Total: 45 },
];

const Chart = ({ aspect, title, width = "100%", data = defaultData }) => {
  if (!data || data.length === 0) {
  }
  //const [dataKey, dataValue] = Object.keys(data[0]);

  let dataKey = "";
  let dataValue = "";
  if (data && data.length > 0) {
    const keys = Object.keys(data[0]);
    dataKey = keys[0];
    dataValue = keys[1];
  }
  return (
    <div className="chart">
      <div>{title}</div>

      {dataKey === "" ? (
        "Error: Data Unavailable"
      ) : (
        <ResponsiveContainer width={width} aspect={aspect}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey={dataKey} stroke="black" />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={dataValue}
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Chart;
