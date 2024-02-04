import { Wrapper, Header, Body } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
    <Wrapper>
        <Header>
            <h2>{title}</h2>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Wrapper>
);

export default Section;