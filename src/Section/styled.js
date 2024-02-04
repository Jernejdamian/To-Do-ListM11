import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: #ffffff;
    border-bottom: 2px solid #eee;
`;

export const Header = styled.div`
    border-bottom: 2px solid #eee;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr auto auto;
    justify-content: space-between;
    align-items: center;

    @media(max-width:767px){
        grid-template-columns: 1fr;
    }  
`;

export const Body = styled.div`
    padding: 0px 20px 20px;
`;