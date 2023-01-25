import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { AllThemes } from './themes/Theme';
import { setLocal } from './utils/Storage';

const Index = () => {
    const allThemes = AllThemes();
    setLocal('all-themes', allThemes);
    return <App />;
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Index />,
);
