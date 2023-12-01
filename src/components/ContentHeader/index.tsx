import React, { ReactNode } from 'react';

import SelectInput from '../../components/SelectInput';


import { 
    Container,
    Controllers,
    TitleContainer,
    

} from './styled';
import { title } from 'process';

interface IContentHeaderProps {
    title: string;
    lineColor:string;
    children:React.ReactNode;
}


const ContentHeader: React.FC<IContentHeaderProps> =  ({
    title, lineColor, children
}) => {    
  
    return (
        <Container >
            <TitleContainer lineColor={lineColor}>
            <h1>{title}</h1>
            </TitleContainer>   
            <Controllers>
                {children}
            </Controllers>
        </Container>
    );
}

export default ContentHeader;