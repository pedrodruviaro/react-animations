import styled from "styled-components";

export const Form = styled.form`
    display: grid;
    gap: 1.5rem;

    width: 100%;
    max-width: 30rem;

    margin-inline: auto;
    padding: 2rem;

    label {
        font-weight: 400;
        font-size: 1rem;
    }

    input {
        display: block;
        width: 100%;

        font-size: 1.125rem;
        padding: 0.5rem;
        margin-top: 0.15rem;

        outline: none;

        border: none;

        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
            rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

        &:hover,
        &:focus {
            outline: 1px solid #d9304f;
        }
    }
`;