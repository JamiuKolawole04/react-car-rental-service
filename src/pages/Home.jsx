import { Container, Row, Col } from "reactstrap";

import {
    HeroSlider,
    Helmet,
    FindCarForm,
    AboutSection,
    ServicesList,
    CarItem,
    BecomeDriver,
    Testimonial,
    BlogList
} from "../components";
import carData from "../assets/data/carData"

export const Home = () => {
    return (
        <Helmet title="Home">
            <section className="p-0 hero__slider-section">
                <HeroSlider />

                <div className="hero__form">
                    <Container>
                        <Row className="form__row">
                            <Col lg="4" md="4">
                                <div className="find__cars__left">
                                    <h2>Find your best car here</h2>
                                </div>
                            </Col>

                            <Col lg="8" md="8" sm="12">
                                <FindCarForm />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <AboutSection />

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section__subtitle">See our</h6>
                            <h2 className="section__title">Popular services</h2>
                        </Col>

                        <ServicesList />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h6 className="section__subtitle">Come with</h6>
                            <h2 className="section__title">Hot offers</h2>
                        </Col>
                        {
                            carData.slice(0, 6).map((item) => (
                                <CarItem item={item} key={item.id} />
                            ))
                        }
                    </Row>
                </Container>
            </section>

            <BecomeDriver />

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-4 text-center">
                            <h6 className="section__subtitle">Our client says</h6>
                            <h2 className="section__title">Testimonials</h2>
                        </Col>
                        <Testimonial />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section__subtitle">Explore our blogs</h6>
                            <h2 className="section__title">Latest Blogs</h2>
                        </Col>
                        <BlogList />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}