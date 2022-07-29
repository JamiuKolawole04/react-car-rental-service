import { Fragment } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import UserLine from "remixicon-react/UserLineIcon";
import CalendarLine from "remixicon-react/CalendarLineIcon";
import TimeLine from "remixicon-react/TimeLineIcon";

import blogData from "../../assets/data/blogData"

const BlogItem = ({ item }) => {
    const { imgUrl, title, author, date, description, time } = item;

    return (
        <Col lg="4" md="6" sm="6" className="mb-5">
            <div className="blog__item">
                <img src={imgUrl} alt="" className="w-100" />
                <div className="blog__info p-3">
                    <Link to={`/blogs/${title}`} className="blog__title">{title}</Link>
                    <p className="section__description mt-3">
                        {
                            description.length > 100 ? description.substr(0, 100) : description
                        }
                    </p>

                    <Link to={`/blogs/${title}`} className="read__more">Read More</Link>

                    <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
                        <span className="blog__author"><UserLine size={20} /> {author}</span>

                        <div className="d-flex align-items-center gap-3">
                            <span className="d-flex align-items-center gap-1 section__description">
                                <CalendarLine size={20} /> {date}
                            </span>

                            <span className="d-flex align-items-center gap-1 section__description">
                                <TimeLine size={20} /> {time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );


}

export const BlogList = () => {
    return (
        <Fragment>
            {
                blogData.map((item) => (
                    <BlogItem item={item} key={item.id} />
                ))
            }
        </Fragment>
    );

} 