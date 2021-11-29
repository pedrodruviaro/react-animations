import styled from "styled-components";

export const Container = styled.h1`
    font-size: clamp(2rem, 1rem + 5vw, 3rem);
    text-align: left;
    margin-bottom: 1.5rem;
    position: relative;

    &::before {
        content: "";
        display: block;
        background: #d9304f;
        width: 0.75em;
        height: 0.15em;
        aspect-ratio: 1;

        position: absolute;
        bottom: 0;
        left: 0;
    }
`;
