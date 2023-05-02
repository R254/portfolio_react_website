
const nav = [ {name:'Home'},{name:'About'},{name:'portfolio'},{name:'Contact'} ]

const Navbar = () => {
  return (
    <nav className="nav__bar">
        <a href="">
            <img src="" alt="Logo" />
        </a>
        <ul>
            {nav.map((item, index) => (
                <li key={index}>
                    <a href="#">
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar

  