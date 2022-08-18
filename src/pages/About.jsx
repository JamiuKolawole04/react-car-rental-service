import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import PhoneLine from "remixicon-react/PhoneLineIcon";


import {
    CommonSection,
    Helmet,
    AboutSection,
    BecomeDriver,
    OurMembers,
    Header,
    Footer
} from "../components";
import driveImg from "../assets/all-images/drive.jpg";

export const About = () => {
    return (
        <Fragment>
            <Header />

            <Helmet title="About">
                <CommonSection title="About Us" />
                <AboutSection aboutClass="aboutPage" />

                <section className="about__page-section">
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12">
                                <div className="about__page-img">
                                    <img src={driveImg} className="w-100 rounded-3" alt="" />
                                </div>
                            </Col>

                            <Col lg="6" md="6" sm="12">
                                <div className="about__page-content">
                                    <h2 className="section__title">We Are Commited To Provide Safe Ride Solutions </h2>

                                    <p className="section__description">
                                        carrental is the world’s leading car-sharing network. We provide on-demand access to cars by the hour or the day in cities and campuses around the globe.
                                    </p>

                                    <p className="section__description">
                                        We're on a mission to enable simple and responsible urban living—a future filled with more car-sharing members than car owners in major cities across the globe.
                                    </p>

                                    <div className="d-flex align-items-center gap-3 mt-4">
                                        <span className="fs-4"> <PhoneLine /> </span>
                                        <div>
                                            <h6 className="section__subtitle">Need Any Help?</h6>
                                            <h4 className="about__number">+00123456789</h4>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <BecomeDriver />

                <section>
                    <Container>
                        <Row>
                            <Col lg="12" className="mb-5 text-center">
                                <h6 className="section__subtitle">Experts</h6>
                                <h2 className="title">Our Members</h2>
                            </Col>
                            <OurMembers />
                        </Row>
                    </Container>
                </section>
            </Helmet>

            <Footer />
        </Fragment>

    );
}