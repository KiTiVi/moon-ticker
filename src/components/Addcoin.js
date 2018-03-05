import React, { Component } from 'react'
import styled from 'styled-components'
import '../styles/App.css'
import AddCoinItem from './AddCoinItem'

class AddCoin extends Component {
  renderTableRows = () => {
    console.log(this.props.coinData)
    return this.props.coinData.map(coin => {
      return <AddCoinItem coin={coin} key={coin.id} />
    })
  }

  render() {
    return (
      <AddCoinContainer>
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
      </AddCoinContainer>
    )
  }
}

export default AddCoin

const AddCoinContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Table = styled.table`
  display: block;
  background-color: #f00;
  height: 70vh;
  width: 550px;
  overflow-y: auto;
`
