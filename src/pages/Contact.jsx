import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import FacebookLine from "remixicon-react/FacebookLineIcon";
import InstagramLine from "remixicon-react/InstagramLineIcon";
import LinkedinLine from "remixicon-react/LinkedinLineIcon";
import TwitterLine from "remixicon-react/TwitterLineIcon";


import {
    Helmet,
    CommonSection
} from "../components";

export const Contact = () => {
    const socialLinks = [
        {
            url: "#",
            icon: <FacebookLine size={18} />
        },
        {
            url: "#",
            icon: <InstagramLine size={18} />
        },
        {
            url: "#",
            icon: <LinkedinLine size={18} />
        },
        {
            url: "#",
            icon: <TwitterLine size={18} />
        }

    ]
    return (
        <Helmet title="Contact">
            <CommonSection title="contact" />
            <section>
                <Container>
                    <Row>
                        <Col lg="7" md="7">
                            <h6 className="fw-bold mb-4">Get in Touch</h6>

                            <Form>
                                <FormGroup className="contact__form">
                                    <Input placeholder="Your Name" type="text" />
                                </FormGroup>
                                <FormGroup className="contact__form">
                                    <Input placeholder="Email" type="email" />
                                </FormGroup>
                                <FormGroup className="contact__form">
                                    <textarea rows="5" placeholder="Message" className="textarea"></textarea>
                                </FormGroup>

                                <button className="btn contact__btn" type="submit">Send Message</button>
                            </Form>
                        </Col>

                        <Col lg="5" md="5">
                            <div className="contact__info">
                                <h6 className="fw-bold">Contact Information</h6>
                                <p className="section__description mb-0">123, ZindaBazar, Sylhet, Bangladesh</p>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className="fs-6 mb-0">Phone: </h6>
                                    <p className="section__description mb-0">+88683896366</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className="mb-0 fs-6">Email: </h6>
                                    <p className="section__description mb-0"> rentcarservice@gmail</p>
                                </div>

                                <h6 className="fw-bold mt-4">Follow Us</h6>

                                <div className="d-flex align-items-center gap-4 mt-3">
                                    {
                                        socialLinks.map((item, index) => (
                                            <Link
                                                to={item.url}
                                                key={index}
                                                className="social__link-icon"
                                            >{item.icon}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}