import Slider from "react-slick";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

export const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    }
    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Car rent service is a great company to work with as they are always get the job done right and in a timely manner.They provide reliable vehicles to customers . car rent service is really good.
                </p>

                <div className="mt-3 d-flex align-items-center gap-4 testimonial__desc">
                    <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Smith Jefferson</h6>
                        <p className="section__decription">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    These guys are incredible. Car rent service have been great at both providing cars and suggesting excellent airports  in a way that is easy to understand.
                </p>

                <div className="mt-3 d-flex align-items-center gap-4 testimonial__desc">
                    <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Mary Erdoes</h6>
                        <p className="section__decription">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    I love the energy and excitement car rent service provide me and family in our last summer holiday. They are a really good company delivering thei services in excellent ways.
                </p>

                <div className="mt-3 d-flex align-items-center gap-4 testimonial__desc">
                    <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Tom McCathy </h6>
                        <p className="section__decription">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Quick response to changes/questions/ideas.Someone always answers right away.Expertise and systematic approach to fulfilling client needs.
                </p>

                <div className="mt-3 d-flex align-items-center gap-4 testimonial__desc">
                    <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Janet Washington</h6>
                        <p className="section__decription">Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    );




}