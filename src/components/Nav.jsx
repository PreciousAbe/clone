import instagram from "../Images/instagram.png"
const Nav = () => {
  return (
    <nav>
      <button className="logo">
        <img src={instagram} alt="logo" />
      </button>
      <input type="text" className="search" placeholder="Search" />
      <span className="nav-links">
        <button>
          <i className="fas fa-home" />
        </button>
        <button>
          <i className="fas fa-comment-alt" />
        </button>
        <button>
          <i className="fas fa-heart" />
        </button>
        <button>
          <i className="far fa-compass" />
        </button>
      </span>
    </nav>
  )
}

export default Nav
