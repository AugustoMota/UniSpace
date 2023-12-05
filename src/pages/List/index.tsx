import React, {useMemo} from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container , Content, Filters } from './styles';

import HistoryFinanceCard   from '../../components/HistoryFinanceCard';


const List: React.FC = () => {
    const months = [
        {value: 7, label:'julho'},
        {value: 8, label:'Agosto'},
        {value: 9, label:'Setembro'},
    ];
    
    const years = [
        {value: 2023, label:2023},
        {value: 2022, label:2022},
        {value: 2021, label:2021},
    ];



    return (
        <Container>
             <ContentHeader title='Saidas' lineColor='#E44C4E'>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button 
                className="tag-filter tag-filter-recurrent"
                type="button"
         
                >  
                    Recorentes
                </button>

                <button 
                className="tag-filter tag-filter-eventual"
                type="button"
         
                >
                    
                    Enventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard 
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='  27/07/2023'
                    amout='R$ 210'
                />
        
            </Content>
        </Container>

    );
}

export default List;