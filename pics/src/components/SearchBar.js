import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }


  render () {
    return (
      <div className="ui segment">
        <form className="ui form" action="">
          <div className="field">
            <label htmlFor="">Image Search</label>
            {/* <input type="text" onChange={this.onInputChange}/> */}
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar