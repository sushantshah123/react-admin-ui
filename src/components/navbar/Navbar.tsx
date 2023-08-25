import './navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar">
       <div className="logo">
        <img src="logo.svg" alt="" />
        <span>logo</span>
       </div>
       <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notification.svg" alt="" className="icon" />
          <span>5</span>
        </div>
        <div className="user">
          <img src="/profile.svg" alt="" />
          <span>Nejm</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
       </div>
    </div>
  )
}

export default Navbar