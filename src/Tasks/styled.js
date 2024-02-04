import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 0px;
 `;

export const Item = styled.li`
    list-style: none;
    padding: 5px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;
    border-bottom: 1px solid #eee;
    margin: 10px;
    
    ${({ hidden }) => hidden && css`
    display: none;
    `}
 `;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    color: white;

    ${({done})=>done && css`
    background-color: green;
    `
    }

    ${({remove})=>remove && css`
    background-color: red;
    `
    }

    &:hover{
        transition: 1s;
        transform: scale(1.1);
    }
`
export const Content = styled.span`
    text-transform: capitalize;

    ${({done})=>done && css`
    text-decoration: line-through;
`}
`