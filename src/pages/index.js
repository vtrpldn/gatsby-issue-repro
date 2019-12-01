import React, { Component } from "react"

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <>
        <h2 onClick={() => this.setState({
          count: this.state.count + 1
        })}>Click to increment</h2>
        <h2>This count will update normally:
          <div>
            {this.state.count}
          </div>
        </h2>
        <h2>This count will stop updating if you click really fast: <br /> {this.state.count}</h2>
      </>
    )
  }
}

export default IndexPage
