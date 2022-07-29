import { Container, Row, Col } from "reactstrap";
// import CheckboxCircleLine from "remixicon-react/CheckboxCircleLineIcon";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";


export const AboutSection = ({ aboutClass }) => {
    return (
        <section className="about__section" style={aboutClass === "aboutPage" ? { marginTop: "0" } : { marginTop: "280px" }}>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="about__section-content">
                            <h4 className="section__subtitle">About Us</h4>
                            <h2 className="section__title">Welcome to car rent service</h2>
                            <p className="section__description"> We offer convenient locations to rent a car  in bustling downtown areas of cities around the world and at airports. We provide a wide assortment of different vehicles to choose from, all at affordable prices. Our rental locations offer flexible hours for you, plus many provide 24-hour return service. If you have a large group, book a passenger van or bus. If you are coming here for business, rent one of our luxury sedans. </p>

                            {/* <div className="about__section-item d-flex align-items-center">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <CheckboxCircleLine size={20} /> one-day rental or a weekly rental.
                                </p>
                                <p className="section__description d-flex align-items-center gap-2">
                                    <CheckboxCircleLine className="sm-ml-4" size={20} /> additional sits for young ones.
                                </p>
                            </div>

                            <div className="about__section-item d-flex align-items-center">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <CheckboxCircleLine size={20} /> cars, SUVS, vans and buses.
                                </p>
                                <p className="section__description d-flex align-items-center gap-2 ml-40">
                                    <CheckboxCircleLine size={20} /> Driver service.
                                </p>
                            </div> */}

                            {/* <div className="about__section-item d-flex align-items-center">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <CheckboxCircleLine size={20} /> adjustable rental options.
                                </p>
                                <p className="section__description d-flex align-items-center gap-2 ml-52">
                                    <CheckboxCircleLine size={20} /> Unlimited mileage.
                                </p>
                            </div> */}
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="about__img">
                            <img src={aboutImg} alt="" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}