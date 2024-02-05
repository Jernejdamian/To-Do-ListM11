import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    font-size: 18px;

@media(max-width:767px){
    grid-template-columns: 1fr;
}
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    color: teal;

    ${({ disabled }) => disabled && css`
    color: #eee;
    `}
    
&:hover{
    transition: 1s;
    transform: scale(1.1);
}
`;