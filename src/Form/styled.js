import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

@media(max-width:767px){
    grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: teal;
    color: white;

    &:hover{
        background-color: hsl(180, 100%, 30%);
        transition: 2s;
        transform: scale(1.2);
    }
    &:active{
        background-color: hsl(180, 100%, 35%);
    }
`;