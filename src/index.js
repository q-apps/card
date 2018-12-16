import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div>

    <Card img_class="mdl-card__title1" title="Amazon icon" text="ADCDEFG">
    </Card>
    <Card img_class="mdl-card__title2" title="Pinterest icon" text="HIJKLMN">
    </Card>
    <Card img_class="mdl-card__title3" title="Instagram icon" text="OPQRSTU">
    </Card>
    <Card img_class="mdl-card__title4" title="Google icon" text="VWXYZ">
    </Card>


</div>
  , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
