import { Link } from "react-router-dom";
import { Button } from "../Button";
import { CustomText } from "../CustomText";
import { CustomTitle } from "../CustomTitle";
import { Form } from "../Form";
import { Wrapper } from "../Wrapper";

export const Register = () => {
    return (
        <Wrapper className="fade-in">
            <CustomTitle>Register</CustomTitle>
            <Form>
                <label>
                    Email
                    <input
                        type="text"
                        placeholder="youremail@domail.com"
                        autoFocus
                    />
                </label>
                <label>
                    Password
                    <input type="password" placeholder="youremail@domail.com" />
                </label>
                <label>
                    Confirm Password
                    <input type="password" placeholder="******" />
                </label>

                <CustomText>
                    Already have an account? <Link to="/">Log in.</Link>
                </CustomText>

                <Button type="submit">Create</Button>
            </Form>
        </Wrapper>
    );
};
