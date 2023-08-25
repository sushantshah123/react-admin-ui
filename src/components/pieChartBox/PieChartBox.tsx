import "./pieChartBox.scss"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const data = [
    { name: 'Group A', value: 400, color: "#eadb0b" },
    { name: 'Group B', value: 300, color: "#15be1b" },
    { name: 'Group C', value: 300, color: "#9311ea" },
    { name: 'Group D', value: 200, color: "#08e3f3" }
  ];
const PieChartBox = () => {
   
  return (
    <div className="pieChartBox">
        <h2>Leads by Source</h2>
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
            <Tooltip
             contentStyle={{backgroundColor:"red",border:"2px solid white"}}
             
             />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        </div>
        <div className="bottomInfo">
              {data.map((item)=>{
                return(
                    <div className="infoBox">
                <div className="left" style={{backgroundColor:item.color}}></div>
                <div className="right">
                    <h6>{item.name}</h6>
                    <h6>{item.value}</h6>
                </div>
            </div>
                      )
                    })}
        </div>
    </div>
  )
}

export default PieChartBox