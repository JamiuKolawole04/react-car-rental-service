import { Fragment } from "react";
import { Col, } from "reactstrap";

import servicesData from "../../assets/data/serviceData";



const ServiceItem = ({ item }) => (
    <Col lg="4" md="4" sm="6" className="mb-3">
        <div className="service__item mb-3 d-inline-block">
            <span className="mb-3">
                {item.icon}
            </span>

            <h6 className="mt-4">{item.title}</h6>
            <p className="section__description">{item.desc}</p>
        </div>
    </Col>
)

export const ServicesList = () => {
    return (
        <Fragment>
            {
                servicesData.map((item) => (
                    <ServiceItem item={item} key={item.id} />
                ))
            }
        </Fragment>
    );

}

