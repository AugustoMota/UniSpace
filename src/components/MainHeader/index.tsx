import React, {useMemo} from 'react';


import Toggle from '../Togle'
import emojis from '../../utils/emojis';

import { Container, 
    Profile, 
    Welcome, 
    UserName
} from './styles';

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const inidice = Math.floor(Math.random() * emojis.length)
        return emojis[inidice];
    },[])
    return (
        <Container>
            <Toggle/>
            <Profile>
                <Welcome> Olá , {emoji}</Welcome>
                <UserName>Augusto mota</UserName>

            </Profile>
        </Container>
    );
}

export default MainHeader;