import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

@media(max-width:${({theme})=>theme.breakpoint.mobileMax}px){
    grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: ${({theme})=>theme.color.teal};
    color: ${({theme})=>theme.color.white};

    &:hover{
        background-color: hsl(180, 100%, 30%);
        transition: 2s;
        transform: scale(1.2);
    }
    &:active{
        background-color: hsl(180, 100%, 35%);
    }
`;