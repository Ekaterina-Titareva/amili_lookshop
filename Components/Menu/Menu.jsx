import Navigation from "../Navigation/Navigation"
import "./menu.scss"


const Menu = ({navLinks, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur"></div>
            <div className="menuContent">
            < Navigation 
                navLinks={navLinks}
            />
            </div>
        </div>
    )
}

export default Menu