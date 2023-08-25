import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss"
  
type Props = {
    color:string;
    title:string;  
    dataKey:string;
    chartData:object[];
    }

const BarChartBox = (props:Props) => {
  return (
    <div className="barChartBox">
        <h2>{props.title}</h2>
        <div className="chart">
       <ResponsiveContainer width="99%" height="100%">
        <BarChart data={props.chartData}>
        <Tooltip 
            contentStyle={{background:"#2a3447",borderRadius:"5px"}}
            labelStyle={{display:"none"}}
            cursor={{fill:"none"}}
            position={{y:70}}
            />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox