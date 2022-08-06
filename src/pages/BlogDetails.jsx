import { Container, Col, Row, Form, FormGroup, Input } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import UserLine from "remixicon-react/UserLineIcon";
import CalendarLine from "remixicon-react/CalendarLineIcon";
import TimeLine from "remixicon-react/TimeLineIcon";
import ReplyLine from "remixicon-react/ReplyLineIcon";


import blogData from "../assets/data/blogData";
import commentImg from "../assets/all-images/ava-1.jpg";
import { Helmet } from "../components";

export const BlogDetails = () => {
    const { slug } = useParams();
    const blog = blogData.find((blog) => blog.title === slug)
    return (
        <Helmet title={blog.title}>
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="8" className="mb-4">
                            <div className="blog__details">
                                <img src={blog.imgUrl} className="w-100" alt="" />
                                <h2 className="section__title blog__title">{blog.title}</h2>

                                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                                    <span className="blog__author"><UserLine size={20} /> {blog.author}</span>

                                    <span className="d-flex align-items-center gap-1 section__description">
                                        <CalendarLine size={20} /> {blog.date}
                                    </span>

                                    <span className="d-flex align-items-center gap-1 section__description">
                                        <TimeLine size={20} /> {blog.time}
                                    </span>
                                </div>

                                <p className="section__description">{blog.description}</p>
                                <h6 className="fw-normal ps-5 "> <blockquote className="fs-4">{blog.quote}</blockquote> </h6>
                                <p className="section__description">{blog.desc2}</p>
                            </div>

                            <div className="comment__list mt-5">
                                <h4 className="mt-5">3 comments</h4>

                                <div className="single__comment d-flex gap-3">
                                    <img src={commentImg} alt="" />
                                    <div className="comment__content">
                                        <h6 className="fw-bold">David Visa</h6>
                                        <p className="section__description mb-0 mt-1">14, July, 2022</p>
                                        <p className="section__description mt-1"> Hmm. Great blog..Thanks for the quality content  </p>
                                        <span className="replay d-flex align-items-center gap-1">
                                            <ReplyLine /> Replay
                                        </span>
                                    </div>
                                </div>
                                <div className="leave__comment-form mt-5">
                                    <h4>Leave a comment</h4>
                                    <p className="section__description">You must sign in to make or comment a post</p>

                                    <Form>
                                        <FormGroup className="d-flex gap-3">
                                            <Input type="text" placeholder="Full name" />
                                            <Input type="email" placeholder="Email" />
                                        </FormGroup>

                                        <FormGroup>
                                            <textarea rows="5" placeholder="Comment..." className="w-100 py-2 px-3"></textarea>
                                        </FormGroup>

                                        <button className="btn mt-3 comment__btn">Post a Comment</button>
                                    </Form>
                                </div>

                            </div>
                        </Col>

                        <Col lg="4" md="4">
                            <div className="recent__post mb-4">
                                <h5 className="fw-bold">Recent Posts</h5>
                            </div>
                            {
                                blogData.map((item) => (
                                    <div className="recent__blog-post mb-4" key={item.id}>
                                        <div className="recent__blog-item d-flex gap-3">
                                            <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                                            <h6> <Link to={`/blogs/${item.title}`}>{blog.title}</Link> </h6>
                                        </div>
                                    </div>
                                ))
                            }
                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    );
}