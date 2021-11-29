import { Button } from "../Button";
import { Form } from "../Form";
import { CustomTitle } from "../CustomTitle";
import { Wrapper } from "../Wrapper";

import { Link } from "react-router-dom";
import { CustomText } from "../CustomText";

export const Login = () => {
    return (
        <Wrapper>
            <CustomTitle>Login</CustomTitle>
            <Form>
                <label>
                    Email
                    <input type="text" placeholder="youremail@domain.com" />
                </label>
                <label>
                    Password
                    <input type="text" placeholder="******" />
                </label>

                <CustomText>
                    Don't have an account?{" "}
                    <Link to="/register">Create one!</Link>
                </CustomText>

                <Button type="submit">Enter</Button>
            </Form>
        </Wrapper>
    );
};
