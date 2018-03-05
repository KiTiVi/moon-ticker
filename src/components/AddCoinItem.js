import React, { Component } from 'react'

class AddCoinItem extends Component {
  state = {
    value: null,
    error: null
  }

  handleSubmit = () => {
    this.setState({ error: 'Sket sig' })
    alert(this.state.value)
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <tr>
        <td>{this.props.coin.name}</td>
        <td>${this.props.coin.price_usd}</td>
        <td>
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
          {this.state.error ? <div>{this.state.error}</div> : null}
        </td>
        <td>
          <button onClick={this.handleSubmit}>ADD</button>
        </td>
      </tr>
    )
  }
}

export default AddCoinItem
