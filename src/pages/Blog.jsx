import { Fragment } from "react";
import { Container, Row } from "reactstrap";

import {
    Helmet,
    CommonSection,
    BlogList,
    Header,
    Footer
} from "../components";

export const Blog = () => {
    return (
        <Fragment>
            <Header />

            <Helmet title="blogs">
                <CommonSection title="Blogs" />
                <section>
                    <Container>
                        <Row>
                            <BlogList />
                            <BlogList />
                        </Row>
                    </Container>
                </section>
            </Helmet>

            <Footer />
        </Fragment>

    );
}