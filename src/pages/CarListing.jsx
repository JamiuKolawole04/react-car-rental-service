import { Fragment, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SortAsc from "remixicon-react/SortAscIcon";

import {
    Helmet,
    CommonSection,
    CarItem,
    Header,
    Footer
} from "../components";
import carData from "../assets/data/carData";

export const CarListing = () => {
    const [data, setData] = useState(carData);

    const handleSort = e => {
        const filterValue = e.target.value;
        if (filterValue === "high") {
            const filterData = carData.filter((item) => item.price >= 70);

            setData(filterData);
        }

        if (filterValue === "mid") {
            const filterData = carData.filter((item) => item.price >= 5.50 && item.price < 6);

            setData(filterData);
        }

        if (filterValue === "low") {
            const filterData = carData.filter((item) => item.price >= 40.89 && item.price < 69.50);

            setData(filterData);
        }
    }

    return (
        <Fragment>
            <Header />

            <Helmet title="cars">
                <CommonSection title="cars Listing" />

                <section>
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="d-flex align-items-center gap-5 mb-5">
                                    <span className="d-flex align-items-center gap-2"> <SortAsc /> Sort By </span>

                                    <select onChange={handleSort}>
                                        <option value="">Select</option>
                                        <option value="low">Low to High</option>
                                        <option value="high">High to Low</option>
                                    </select>
                                </div>
                            </Col>

                            {
                                data?.map((item) => <CarItem item={item} key={item.id} />)
                            }
                        </Row>
                    </Container>
                </section>
            </Helmet>

            <Footer />
        </Fragment>

    );
}