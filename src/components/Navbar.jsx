import { Link, NavLink  } from 'react-router-dom';

const Navbar = () => {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <header className="site-header sticky-top">
            <div className="topnav" id="myTopnav">
                <Link to="/home"> CafeMX</Link>
                <NavLink to="/home">Productos</NavLink>
                <NavLink to="/checkout">Carrito</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="icon" onClick={myFunction}>
                    <i className="fa fa-bars" />
                </a>
            </div>


        </header>);
}

export default Navbar;