import styled from "styled-components";

export const Container = styled.button`
    background: #d9304f;
    color: #fff;
    padding: 0.5em 1em;

    border-radius: 0.35rem;

    font-size: 1.125rem;

    transition: transform 200ms ease-in-out, box-shadow 300ms ease;

    &:hover,
    &:focus-within {
        transform: scale(1.05);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    }
`;
