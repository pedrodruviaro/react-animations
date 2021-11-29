import { Button } from "../Button";
import { Form } from "../Form";

import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Form>
                <label>
                    Email
                    <input type="text" placeholder="youremail@domain.com" />
                </label>
                <label>
                    Password
                    <input type="text" placeholder="******" />
                </label>

                <p>
                    Don't have an account?{" "}
                    <Link to="/register">Create one!</Link>
                </p>

                <Button type="submit">Enter</Button>
            </Form>
        </div>
    );
};
