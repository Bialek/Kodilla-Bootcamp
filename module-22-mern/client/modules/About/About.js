import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h2>build with mern.io</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus a nulla id tincidunt. Nunc vulputate nisi tellus, non vulputate mauris mattis sed. Etiam sed tristique nisl. Donec sagittis non odio eu lacinia. Proin facilisis pretium odio vulputate faucibus. Nulla.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
