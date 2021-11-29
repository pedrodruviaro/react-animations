import { Link } from "react-router-dom";
import { Button } from "../Button";
import { CustomText } from "../CustomText";
import { CustomTitle } from "../CustomTitle";
import { Form } from "../Form";
import { Wrapper } from "../Wrapper";

export const Register = () => {
    return (
        <Wrapper>
            <CustomTitle>Register</CustomTitle>
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

                <CustomText>
                    Already have an account? <Link to="/">Log in.</Link>
                </CustomText>

                <Button type="submit">Create</Button>
            </Form>
        </Wrapper>
    );
};
