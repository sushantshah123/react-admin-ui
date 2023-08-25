import { Link } from "react-router-dom"
import './menu.scss'
import { menu } from "../../data"

const Menu = () => {
  return (
    <div className="menu">
      {
        menu.map((data)=>{
       return(

         <div className="item" key={data.id}>
        <span className="title">{data.title}</span>

        {
        data.listItems.map((dataItem)=>{
          return(
            <Link className="listIcon" to={dataItem.url} key={dataItem.id}>
        <img src={dataItem.icon} alt="" />
        <span>{dataItem.title}</span>
        </Link>
            )
        })}

      </div>
        )
        })
      }
    </div>
  )
}

export default Menu