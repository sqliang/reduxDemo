import React from 'react';
import ReactDOM from 'react-dom';
import routes from './router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import './index.scss';

const store = configureStore();


ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('react-dom'));