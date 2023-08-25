import "../../styles/global.scss";
import "./topDeals.scss"
import { topDealUsers } from "../../data";

const TopDeals = () => {
  return (
    <div className="topDeals">
        <h2>Top Deals</h2>
        {topDealUsers.map((data)=>{
            return(

                <div className="dealsContainer" key={data.id}>
            <div className="left">
            <img src={data.img} alt="" />
            <div className="title">
                <h5>{data.username}</h5>
                <h6>{data.email}</h6>
            </div>
            </div>
            <h6>${data.amount}</h6>
        </div>
            )
        })}
    </div>
  )
}

export default TopDeals