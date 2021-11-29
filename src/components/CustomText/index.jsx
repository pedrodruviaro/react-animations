import styled from "styled-components";

export const CustomText = styled.p`
    font-weight: 500;

    a {
        text-decoration: none;
        color: #d9304f;
        position: relative;

        &::after {
            content: "";
            display: block;
            background-color: #d9304f;
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: -2px;

            transition: transform 300ms ease;

            transform: scale(0);
            /* transform-origin: left; */
            opacity: 0;
        }

        &:hover::after,
        &:focus::after {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
