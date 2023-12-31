import styled from "styled-components";


interface ITitleContainerProps {
    lineColor: string;

}
export const Container = styled.div`
    width:100%;

    display:flex;
    Justify-content:space-between;

    margin-bottom:25px;

    
`;

export const TitleContainer = styled.div<ITitleContainerProps>`

>h1 {
    color: ${props =>props.lineColor};

    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
        
    }
}

`;

export const Controllers = styled.div`
    display:flex;

`;