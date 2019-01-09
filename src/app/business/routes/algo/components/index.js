import React from 'react';
import ReduxBase from '../../../common/components/base/redux';

import actions from '../actions';

const AlgoBase = ReduxBase();

const download = {
    filename: 'algo.tar.gz',
    address: ['storageAddress'],
    text: 'Download algo tarball',
};

const Algo = () => <AlgoBase actions={actions} model="algo" download={download} />;

export default Algo;
