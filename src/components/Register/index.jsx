import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Form } from "../Form";
import { Wrapper } from "../Wrapper";

export const Register = () => {
    return (
        <Wrapper>
            <h1>Register</h1>
            <Form>
                <label>
                    Email
                    <input type="text" placeholder="youremail@domail.com" />
                </label>
                <label>
                    Password
                    <input type="text" placeholder="youremail@domail.com" />
                </label>
                <label>
                    Confirm Password
                    <input type="text" placeholder="******" />
                </label>

                <p>
                    Already have an account? <Link to="/">Log in.</Link>
                </p>

                <Button type="submit">Create</Button>
            </Form>
        </Wrapper>
    );
};
