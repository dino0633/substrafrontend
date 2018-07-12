import React from 'react';
import {css} from 'react-emotion';

import List from '../../../common/components/list';
import Detail from '../../../common/components/detail';
import actions from '../actions';

const middle = css`
    display: inline-block;
    vertical-align: top;
`;

const list = css`
    ${middle};
    width: 40%;
    overflow-x: auto;
`;

const detail = css`
    ${middle};
    width: 58%;
    margin-left: 2%;
    overflow-x: auto;
`;


const Dataset = () => (
    <div>
        <List className={list} model="dataset" actions={actions} />
        <Detail className={detail} model="dataset" />
    </div>
);


export default Dataset;
