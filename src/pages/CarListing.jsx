import { Container, Row, Col } from "reactstrap";
import SortAsc from "remixicon-react/SortAscIcon";

import {
    Helmet,
    CommonSection,
    CarItem
} from "../components";
import carData from "../assets/data/carData";

export const CarListing = () => {
    return (
        <Helmet title="cars">
            <CommonSection title="cars Listing" />

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="d-flex align-items-center gap-5 mb-5">
                                <span className="d-flex align-items-center gap-2"> <SortAsc /> Sort By </span>

                                <select>
                                    <option value="">Select</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                </select>
                            </div>
                        </Col>

                        {
                            carData.map((item) => <CarItem item={item} key={item.id} />)
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}