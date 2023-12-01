import React ,{Children, ReactNode} from 'react';

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

interface ContentProps {
    children?: ReactNode;  // children é agora uma propriedade opcional
  }

const Layout: React.FC<ContentProps> = ({children}) => {
    return (
        <Grid>
            <MainHeader/>
            <Aside/>
            <Content>
                {children}
            </Content>
        </Grid>
    );
}

export default Layout;