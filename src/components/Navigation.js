import React from 'react';
import {Link} from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () => {
    <div>
        <li><Link to = {routes.SIGN_IN}>Sign In</Link></li>
        <li><Link to = {routes.LANDING}>Landing</Link></li>
        <li><Link to = {routes.HOME}>Home</Link></li>
        <li><Link to = {routes.ACCOUNT}>Account</Link></li>
    </div>
}

export default Navigation;