import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addAssignment from './actions';

class inputList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' };
  }

  render() {
    const { add } = this.props;
    const { textValue } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={ (event) => this.setState({ textValue: event.target.value })}
        />
        <button type="button" onClick={ () => add(textValue) }>
          Adicionar tarefa
        </button>
      </div>
    );
  }
}

inputList.propTypes = {
  add: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addAssignment(value))
});

export default connect(null, mapDispatchToProps)(inputList) // Retorna uma função que é chamada em seguida
