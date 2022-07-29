import { Container, Row } from "reactstrap";
import {
    Helmet,
    CommonSection,
    BlogList
} from "../components";

export const Blog = () => {
    return (
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
    );
}