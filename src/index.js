import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import { AllThemes } from './themes/AllThemes';
import { setLocal } from './utils/storage';

const Index = () => {
    const allThemes = AllThemes();
    setLocal('all-themes', allThemes);
    return <App />;
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
