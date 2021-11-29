import styled from "styled-components";

export const Container = styled.button`
    background: #d9304f;
    color: #fff;
    padding: 0.5em 1em;

    border-radius: 0.35rem;

    transition: transform 200ms ease-in-out;

    &:hover,
    &:focus-within {
        transform: scale(1.1);
    }
`;
