import "./chartBox.scss";
import { Link } from "react-router-dom";
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
  color:string;
  icon:string;
  title:string;  
  number:number | string;
  dataKey:string;
  percentage:number;
  chartData:object[];
  }
const ChartBox = (props:Props) => {
 

  return (
    <div className="chartBox">
        <div className="left">
            <div className="top">
                <img src={props.icon} alt="" />
                <h5>{props.title}</h5>
            </div>
            <h2>{props.number}</h2>
            <Link to="/" style={{color:props.color}}>view all</Link>
        </div>
        <div className="right">
          <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={props.chartData}>
            <Tooltip 
            contentStyle={{background:"transparent",border:"none"}}
            labelStyle={{display:"none"}}
            position={{x:0,y:60}}
            />
          <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
          </div>
            <div className="percent">
            <h5 style={{color:props.percentage< 0 ? "red" : "greenyellow"}}>{props.percentage}%</h5>
            <h6>this month</h6>
            </div>
        </div>
    </div>
  )
}

export default ChartBox
