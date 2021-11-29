import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Quicksand', sans-serif;
    }

    body {
        background-color: #fafafa;
        color: #212121;
    }

    h1, h2, h3,h4 {
        font-weight: 600;
    }

    p {
        line-height: 1.4;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
        background: none;

        font-size: 1rem;
        font-weight: 600;
    }
`;
