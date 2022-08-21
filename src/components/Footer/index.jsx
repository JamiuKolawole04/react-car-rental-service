import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import CarLine from "remixicon-react/CarLineIcon";
import SendPlaneLine from "remixicon-react/SendPlaneLineIcon";
import CopyrightLine from "remixicon-react/CopyrightLineIcon";


export const Footer = () => {
    const quickLinks = [
        {
            path: "/about",
            display: "About"
        },
        {
            path: "/#",
            display: "Privacy Policy"
        },
        {
            path: "/cars",
            display: "Car Listing"
        },
        {
            path: "/blogs",
            display: "Blog"
        },
        {
            path: "/contact",
            display: "Contact"
        },
    ];
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg="4" md="4" sm="12">
                        <div className="logo footer__logo">
                            <h1 className="">
                                <Link to="/home" className="d-flex align-items-center gap-3"> <CarLine />
                                    <span>Rent Car <br /> Service</span>
                                </Link>
                            </h1>
                        </div>
                        <p className="footer__logo-content">
                            Car Rental and Reservation Service: Modules, Providers, and Implementation Services
                        </p>
                    </Col>

                    <Col lg="2" md="4" sm="6">
                        <div className="mb-4">
                            <h5 className="footer__link-title">Quick Links</h5>
                            <ListGroup>
                                {
                                    quickLinks.map((item, index) => (
                                        <ListGroupItem className="p-0 mt-3 quick__link" key={index} >
                                            <Link to={item.path}>{item.display}</Link>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <div className="mb-4">
                            <h5 className="footer__link-title mb-4">Head office</h5>
                            <p className="office__info">123 Zindabazar, Sylhet, Bangladesh</p>
                            <p className="office__info">Phone: +0995345875365</p>
                            <p className="office__info"><a href="mailto:rentcarservice@gmail.com">Email: rentcarservice@gmail</a></p>
                            <p className="office__info">Office Time: 10am  - 7pm</p>
                        </div>
                    </Col>

                    <Col lg="3" md="4" sm="12">
                        <div className="mb-4">
                            <h5 className="footer__link-title mb-4">Newsletter</h5>
                            <p className="footer__section__description">Subscribe our newsletter</p>
                            <div className="newsletter d-flex align-items-center justify-content-between">
                                <input type="email" placeholder="Email" />
                                <span><SendPlaneLine size={16} /></span>
                            </div>
                        </div>
                    </Col>

                    <Col lg="12">
                        <div className="footer__bottom">
                            <p className="footer__section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                                <CopyrightLine /> Copyright {new Date().getFullYear()}, Developed by Jay All rights reserved.
                            </p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}