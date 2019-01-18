import React from 'react';
import PropTypes from 'prop-types';

import Detail from '../../../../common/components/detail';
import {withDetailRedux} from '../../../../common/components/detail/redux';
import {withDetailAnalytics} from '../../../../common/components/detail/analytics';
import Title from './components/title';
import Traintuple from './components/traintuple';
import BrowseRelatedLinks from './components/browseRelatedLinks';
import Metadata from './components/metadata';


class ModelDetail extends Detail {
    filterUp = o => (e) => {
        e.preventDefault();
        e.stopPropagation();

        const {item, filterUp, logFilterFromDetail} = this.props;
        filterUp(item.key);
        logFilterFromDetail(item.key);
    };
}

const ModelDetailWithLocalComponents = ({item, addNotification, ...rest}) => (
    <ModelDetail
        Title={Title}
        BrowseRelatedLinks={BrowseRelatedLinks}
        Metadata={Metadata}
        item={item}
        addNotification={addNotification}
        {...rest}
    >
        <Traintuple traintuple={item} addNotification={addNotification} />
    </ModelDetail>
);

ModelDetailWithLocalComponents.propTypes = {
    item: PropTypes.shape(),
    addNotification: PropTypes.func,
};

const noop = () => {};

ModelDetailWithLocalComponents.defaultProps = {
    item: null,
    addNotification: noop,
};

export default withDetailRedux(withDetailAnalytics(ModelDetailWithLocalComponents));
