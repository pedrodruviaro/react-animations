import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Form } from "../Form";

export const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <Form>
                <label>
                    Email
                    <input type="text" />
                </label>
                <label>
                    Password
                    <input type="text" />
                </label>
                <label>
                    Confirm Password
                    <input type="text" />
                </label>

                <p>
                    Already have an account? <Link to="/">Log in.</Link>
                </p>

                <Button type="submit">Create</Button>
            </Form>
        </div>
    );
};
