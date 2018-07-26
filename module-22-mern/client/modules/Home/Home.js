import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hello world!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna libero, dignissim a pellentesque sit amet, fermentum non urna. Nullam facilisis nisl eget enim laoreet venenatis. Maecenas sit amet risus ut erat ultricies vehicula facilisis id ex. Phasellus ac nisi leo. Etiam mauris metus, egestas vel euismod sed, dictum id magna. Nulla facilisi. Sed molestie lorem dolor, id rutrum ante vehicula eget. Cras metus elit, semper vel turpis et, blandit egestas libero. Maecenas vehicula arcu sit amet euismod finibus. Vivamus non vehicula mauris. Praesent lorem augue, porta vel fermentum sed, lobortis vel velit. Suspendisse auctor tortor neque, et tincidunt erat feugiat feugiat. Nam sagittis, erat et lacinia venenatis, orci sem gravida mauris, a sagittis ligula turpis eget metus. Cras tellus justo, varius ut aliquam nec, maximus sed augue. Cras mattis eget ex in euismod.</p>
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

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
