import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AllThemes } from './themes/Theme';
import { setLocal } from './utils/Storage';

const Index = () => {
    const allThemes = AllThemes();
    setLocal('all-themes', allThemes);
    return <App />;
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
