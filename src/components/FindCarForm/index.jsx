import { Form, FormGroup } from "reactstrap";

export const FindCarForm = () => {
    return (
        <Form className="form">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
                <FormGroup className="form__group">
                    <input type="text" placeholder="From address" required />
                </FormGroup>

                <FormGroup className="form__group">
                    <input type="text" placeholder="To address" required />
                </FormGroup>

                <FormGroup className="form__group">
                    <input type="date" placeholder="Journey date" required />
                </FormGroup>

                <FormGroup className="form__group">
                    <input type="time" className="journey__time" placeholder="Journey time" required />
                </FormGroup>

                <FormGroup className="select__group">
                    <select>
                        <option value="ac">AC car</option>
                        <option value="non-ac">Non AC car</option>
                    </select>
                </FormGroup>

                <FormGroup className="form__group">
                    <button className="btn find__car-btn">Find car</button>
                </FormGroup>
            </div>
        </Form>
    );
}