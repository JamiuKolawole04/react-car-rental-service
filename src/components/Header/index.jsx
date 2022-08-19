import { useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import PhoneLineIcon from "remixicon-react/PhoneLineIcon";
import LoginCircleLine from "remixicon-react/LoginCircleLineIcon";
import UserLine from "remixicon-react/UserLineIcon";
import CarLine from "remixicon-react/CarLineIcon";
import EarthLine from "remixicon-react/EarthLineIcon";
import TimeLine from "remixicon-react/TimeLineIcon";
import MenuLine from "remixicon-react/MenuLineIcon";
import SearchLine from "remixicon-react/SearchLineIcon";





export const Header = () => {
    const menuRef = useRef(null);
    const navigate = useNavigate()

    const toggleMenu = () => {
        menuRef.current.classList.toggle("menu__active")
    }


    const navLinks = [
        {
            path: "/home",
            display: "Home"
        },
        {
            path: "/about",
            display: "About"
        },
        {
            path: "/cars",
            display: "Cars"
        },
        {
            path: "/blogs",
            display: "Blogs"
        },
        {
            path: "/contact",
            display: "Contact"
        }
    ];

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");

    }


    return (

        <header className="header">
            <div className="header__top">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className="header__top__left d-flex align-items-center">
                                <span>Need Help?</span>
                                <span className="header__top__help d-flex align-items-center">
                                    <PhoneLineIcon className="i" /> +1-202-555-0149
                                </span>
                            </div>
                        </Col>

                        <Col lg="6" md="6" sm="6">
                            <div className="header__top__right d-flex  align-items-center justify-content-end gap-3">
                                {!user &&
                                    <Fragment>
                                        <Link to="/login" className="d-flex align-items-center gap-1"> <LoginCircleLine size={18} /> Login </Link>
                                        <Link to="/register" className="d-flex align-items-center gap-1"><UserLine size={18} /> Register</Link>
                                    </Fragment>
                                }

                                {user &&
                                    <Fragment>
                                        <p className="d-flex align-items-center gap-1"><UserLine size={18} />{user.email}</p>
                                        <p className="d-flex align-items-center gap-1 pointer" onClick={handleLogout}><LoginCircleLine size={18} /> Logout</p>
                                        {/* <Link to="/register" className="d-flex align-items-center gap-1"><UserLine size={18} />{user.email}</Link>
                                        <Link to="/login" className="d-flex align-items-center gap-1"> <LoginCircleLine size={18} /> Logout </Link> */}
                                    </Fragment>
                                }

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="header__middle">
                <Container>
                    <Row>
                        <Col lg="4" md="3" sm="4">
                            <div className="logo">
                                <h1 className="">
                                    <Link to="/home" className="d-flex align-items-center gap-3"> <CarLine />
                                        <span>Rent Car <br /> Service</span>
                                    </Link>
                                </h1>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span> <EarthLine />  </span>
                                <div className="header__location-content">
                                    <h4>Bangladesh </h4>
                                    <h6>Sylhet City, Bangladesh</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2s">
                                <span> <TimeLine /> </span>
                                <div className="header__location-content">
                                    <h4>Sunday to Friday </h4>
                                    <h6>10am - 7pm</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
                            <button className="header__btn btn  ">
                                <Link to="/contact" className="d-flex align-items-center">
                                    <PhoneLineIcon size={16} /> Request a call
                                </Link>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="main__navbar">
                <Container>
                    <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                        <span className="mobile__menu">
                            <MenuLine onClick={toggleMenu} />
                        </span>

                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu d-flex align-items-center">
                                {
                                    navLinks.map((item, index) => (
                                        <NavLink to={item.path} className={navClass => navClass.isActive ? "nav__active nav__item" : "nav__item"} key={index}>{item.display}</NavLink>
                                    ))
                                }
                                {!user &&
                                    <Fragment>
                                        <Link to="/login" className="nav__item">Login</Link>
                                        <Link to="/register" className="nav__item">Regiser</Link>
                                    </Fragment>
                                }
                                {user &&
                                    <Fragment>
                                        <p style={{ color: "#000d6b" }}>{user.email}</p>
                                        <p style={{ color: "#000d6b" }} className="pointer" onClick={handleLogout}>Logout</p>
                                    </Fragment>
                                }
                            </div>
                        </div>

                        <div className="nav__right">
                            <div className="search__box d-flex  align-items-center ">
                                <input type="text" placeholder="Search" />
                                <span> <SearchLine size={16} /> </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>

    );
}