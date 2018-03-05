import React, { Component } from 'react'
import styled from 'styled-components'
import '../styles/App.css'

class AddCoin extends Component {
  renderTableRows = () => {
    console.log(this.props.coinData)
    return this.props.coinData.map(coin => {
      return (
        <tr key={coin.id}>
          <td>{coin.name}</td>
          <td>{coin.price_usd}</td>
          <td>
            <input type="number" required />
          </td>
          <td>
            <button>ADD</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Moon target</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </Table>
      </div>
    )
  }
}

export default AddCoin

const Table = styled.table`
  height: 70vh;
  overflow-y: auto;
  background-color: #f00;
`
