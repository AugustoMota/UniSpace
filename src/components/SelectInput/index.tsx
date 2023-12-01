import React, { ReactNode } from 'react';
import { Container } from './styles';


interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
}

interface ContentProps {
  children?: ReactNode;  // children é agora uma propriedade opcional
}

const SelectInput: React.FC<ISelectInputProps> = ({options}) => (
  <Container>
    <select>
        {   
            options.map(option => (
                <option value={option.value}>{option.label}</option>
            ))
            
        }
        
        
    </select>
  </Container>
);

export default SelectInput;

