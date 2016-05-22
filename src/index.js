import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import Routes from './Routes';

// import foundationCSS from './css/foundation.css';
import mainCSS from './css/main.css';
import typographyCSS from './css/typography.css';
import spacingCSS from './css/spacing.css';
import layoutCSS from './css/layout.css';
import displayCSS from './css/display.css';

render(Routes, document.getElementById('root'));
