import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import FacebookLine from "remixicon-react/FacebookLineIcon";
import TwitterLine from "remixicon-react/TwitterLineIcon";
import LinkedinLine from "remixicon-react/LinkedinLineIcon";
import InstagramLine from "remixicon-react/InstagramLineIcon";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";

export const OurMembers = () => {
    const OUR_MEMBERS = [
        {
            name: "Jhon Doe",
            experience: "3 years of experience",
            fbUrl: "#",
            instUrl: "#",
            twitUrl: "#",
            linkedinUrl: "#",
            imgUrl: ava01,
        },
        {
            name: "David Lisa",
            experience: "5 years of experience",
            fbUrl: "#",
            instUrl: "#",
            twitUrl: "#",
            linkedinUrl: "#",
            imgUrl: ava02,
        },
        {
            name: "Hilton King",
            experience: "4 years of experience",
            fbUrl: "#",
            instUrl: "#",
            twitUrl: "#",
            linkedinUrl: "#",
            imgUrl: ava03,
        },
        {
            name: "John Nil",
            experience: "1 years of experience",
            fbUrl: "#",
            instUrl: "#",
            twitUrl: "#",
            linkedinUrl: "#",
            imgUrl: ava01,
        }
    ]
    return (
        <Fragment>
            {
                OUR_MEMBERS.map((item, index) => (
                    <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
                        <div className="single__member">
                            <div className="single__member-img">
                                <img src={item.imgUrl} alt="" className="w-100" />

                                <div className="single__member-social">
                                    <Link to={item.fbUrl}> <FacebookLine /> </Link>
                                    <Link to={item.twitUrl}> <TwitterLine /> </Link>
                                    <Link to={item.linkedinUrl}> <LinkedinLine /> </Link>
                                    <Link to={item.instUrl}> <InstagramLine /> </Link>
                                </div>
                            </div>
                            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                            <p className="section__description text-center">{item.experience}</p>
                        </div>
                    </Col>
                ))
            }
        </Fragment>

    );
}