import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';

import withAnalytics, {LOG_DOC} from '../../../analytics';
import Book from '../../common/svg/book';
import {slate} from '../../../../../assets/css/variables';

const picto = css`
    display: block;
    margin: 0 auto 15px;
`;

class DocLink extends React.Component {
    constructor(props) {
        super(props);
        this.logDoc = this.logDoc.bind(this);
    }

    logDoc() {
        const {logDoc} = this.props;
        logDoc();
    }

    render() {
        const {className} = this.props;
        return (
            <a
                href="https://gitlab.com/owkin/substradoc"
                className={className}
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.logDoc}
            >
                <Book className={picto} color={slate} />
                Docs
            </a>
        );
    }
}

DocLink.propTypes = {
    className: PropTypes.string,
    logDoc: PropTypes.func,
};

const noop = () => {};

DocLink.defaultProps = {
    className: null,
    logDoc: noop,
};

export default withAnalytics(DocLink, [LOG_DOC]);
