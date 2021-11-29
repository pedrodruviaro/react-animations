import styled from "styled-components";

export const Container = styled.button`
    background: #d9304f;
    color: #fff;
    padding: 0.5em 1em;

    border-radius: 0.35rem;

    transition: filter 250ms ease-in-out;

    &:hover,
    &:focus-within {
        filter: brightness(1.1);
    }
`;
