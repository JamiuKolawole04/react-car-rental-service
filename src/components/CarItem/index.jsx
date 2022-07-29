import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import CarLine from "remixicon-react/CarLineIcon";
import Settings2Line from "remixicon-react/Settings2LineIcon";
import TimerFlashLine from "remixicon-react/TimerFlashLineIcon";


export const CarItem = ({ item }) => {
    const { imgUrl, model, carName, automatic, speed, price } = item;
    return (
        <Col lg="4" md="4" sm="6" className="mb-5">
            <div className="car__item">
                <div className="car__img">
                    <img src={imgUrl} alt="" className="w-100" />
                </div>

                <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{carName}</h4>
                    <h6 className="rent__price text-center">${price}.00 <span>/ Day</span></h6>

                    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                        <span className="d-flex align-items-center gap-1"> <CarLine size={20} /> {model} </span>
                        <span className="d-flex align-items-center gap-1"> <Settings2Line size={20} /> {automatic} </span>
                        <span className="d-flex align-items-center gap-1"> <TimerFlashLine size={20} /> {speed} </span>
                    </div>
                    <button className=" w-50 car__item-btn car__btn-rent">
                        <Link to={`/cars/${carName}`}>Rent</Link>
                    </button>

                    <button className=" w-50 car__item-btn car__btn-details">
                        <Link to={`/cars/${carName}`}>Details</Link>
                    </button>
                </div>


            </div>
        </Col>
    );
}