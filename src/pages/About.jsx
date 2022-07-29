import { Container, Row, Col } from "reactstrap";
import PhoneLine from "remixicon-react/PhoneLineIcon";


import {
    CommonSection,
    Helmet,
    AboutSection,
    BecomeDriver,
    OurMembers
} from "../components";
import driveImg from "../assets/all-images/drive.jpg";

export const About = () => {
    return (
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
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem non eius obcaecati voluptatibus, consectetur quod facere fuga assumenda unde architecto, distinctio iure reprehenderit animi veritatis, totam quos consequuntur voluptatem iusto?
                                </p>

                                <p className="section__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem non eius obcaecati voluptatibus, consectetur quod facere fuga assumenda unde architecto, distinctio iure reprehenderit animi veritatis, totam quos consequuntur voluptatem iusto?
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
    );
}