import React from 'react';

import { Container } from './styled';

import SelectInput from '../../components/SelectInput';

import ContentHeader from '../../components/ContentHeader';
const Dashboard: React.FC = () => {

    const options = [
        {value:'Augusto', label:'Augusto'},
        {value:'Augusto', label:'Augusto'},
        {value:'Augusto', label:'Augusto'},
    ]


    return (
        <Container>
            <ContentHeader title='Dasboard' lineColor='#F7931B'>
                <SelectInput options={options}/>
            </ContentHeader>
            
            

        </Container>
    );
}

export default Dashboard;