import React from 'react';
import {ThemeProvider}from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';



import dark from './styles/themes/darks';
import light from './styles/themes/Light';

import Routes from './routes';

const App: React.FC = () => {
    return (
       
          <ThemeProvider theme={dark}>
            <GlobalStyles/>
            <Routes/>
          </ThemeProvider>
          
        
    );
}

export default App;