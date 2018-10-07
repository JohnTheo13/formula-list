// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlexContainer from './FlexContainer'
import { mapStateToProps, mapDispatchToprops } from './stateToProps'
import ListContainer from '../../components/ListContainer'

class Formula extends Component {
  constructor (props) {
    super(props)
    this.state = { favourite: false }
  }

  componentDidMount () {
    this.props.getSeasons('seasons.json?limit=30&offset=59');
  }

  render () {
    const { favourite } = this.state,
          { seasonList: { list } } = this.props;
    return (
      <FlexContainer>
        <div>
          {list &&
            <ListContainer list={list} name="Seasons" />
          }
        </div>
        <div>
          <button onClick={() => this.setState({favourite: !favourite})} >SKATA2</button>
        </div>
        {favourite &&
          <div>SKATA3</div>
        }
      </FlexContainer>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Formula)
