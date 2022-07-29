import { Fragment } from "react";

import { Routers } from "../../routers/routers";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = () => {
    return (
        <Fragment>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />


        </Fragment>

    );
}