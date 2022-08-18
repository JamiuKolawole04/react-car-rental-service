import { useEffect, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import StarSFillLine from "remixicon-react/StarSFillIcon";
import RoadsterLine from "remixicon-react/RoadsterLineIcon";
import Settings2Line from "remixicon-react/Settings2LineIcon";
import TimerFlashLine from "remixicon-react/TimerFlashLineIcon";
import MapPinLine from "remixicon-react/MapPinLineIcon";
import WheelchairLine from "remixicon-react/WheelchairLineIcon";
import Building2Line from "remixicon-react/Building2LineIcon";


import CarData from "../assets/data/carData";
import {
    Helmet,
    BookingForm,
    PaymentMethod,
    Header,
    Footer
} from "../components";

export const CarDetails = () => {
    const { slug } = useParams();

    const singleCartItem = CarData.find((item) => item.carName === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [singleCartItem])


    return (
        <Fragment>
            <Header />

            <Helmet title={singleCartItem.carName}>
                <section>
                    <Container>
                        <Row>
                            <Col lg="6">
                                <img src={singleCartItem.imgUrl} alt="" className="w-100" />
                            </Col>

                            <Col lg="6">
                                <div className="car__info">
                                    <h2 className="section__title">{singleCartItem.carName}</h2>

                                    <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                                        <h6 className="rent__price fw-bold fs-4">${singleCartItem.price}.00 / Day</h6>

                                        <span className="d-flex align-items-center gap-2">
                                            <span style={{ color: "#f9a826" }}>
                                                <StarSFillLine size={16} />
                                                <StarSFillLine size={16} />
                                                <StarSFillLine size={16} />
                                                <StarSFillLine size={16} />
                                                <StarSFillLine size={16} />
                                            </span>

                                            ({singleCartItem.rating} ratings)
                                        </span>
                                    </div>

                                    <p className="section__description car__desc" style={{ fontSize: "14px" }}>{singleCartItem.description}</p>

                                    <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                                        <span className="d-flex align-items-center gap-1 section__description" style={{ fontSize: "14px" }}>
                                            <RoadsterLine size={16} style={{ color: "#f9a826" }} /> {singleCartItem.model}
                                        </span>

                                        <span className="d-flex align-items-center gap-1 section__description" style={{ fontSize: "14px" }}>
                                            <Settings2Line size={16} style={{ color: "#f9a826" }} /> {singleCartItem.automatic}
                                        </span>

                                        <span className="d-flex align-items-center gap-1 section__description" style={{ fontSize: "14px" }}>
                                            <TimerFlashLine size={16} style={{ color: "#f9a826" }} /> {singleCartItem.speed}
                                        </span>
                                    </div>

                                    <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                                        <span className="d-flex align-items-center gap-1 section__description" style={{ fontSize: "14px" }}>
                                            <MapPinLine size={16} style={{ color: "#f9a826" }} /> {singleCartItem.gps}
                                        </span>

                                        <span className="d-flex align-items-center gap-1 section__description" style={{ fontSize: "14px" }}>
                                            <WheelchairLine size={16} style={{ color: "#f9a826" }} /> {singleCartItem.seatType}
                                        </span>

                                        <span className="d-flex align-items-center gap-1 section__description" style={{ fontSize: "14px" }}>
                                            <Building2Line size={16} style={{ color: "#f9a826" }} /> {singleCartItem.brand}
                                        </span>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="7" className="">
                                <div className="booking-info mt-5">
                                    <h5 className="mb-4 fw-bold">Booking Information</h5>
                                    <BookingForm />
                                </div>
                            </Col>

                            <Col lg="5" className="">
                                <div className="payment__info mt-5">
                                    <h5 className="mb-4 fw-bold">Payment Information</h5>
                                    <PaymentMethod />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>

            <Footer />
        </Fragment>

    );
}