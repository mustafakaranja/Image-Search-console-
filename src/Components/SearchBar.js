import React from 'react';

class SearchBar extends React.Component {
    state = { term : ''};
    // onInputChange(event) {
          //console.log(event.target.value); 
         // I haev written the same thing below in the input tag either write here or there it is our choice,but the main thing is that the value is same for the value
//}
     onFormSubmit = (event) => {
          event.preventDefault();
          this.props.runonSubmit(this.state.term);
     }

        render() {
            return (
                  <div className= "ui segment"> 
                   <form onSubmit={this.onFormSubmit} className="ui form">
                       <label> Image Search </label>
                       <input type = "text" 
                       value={this.state.term}
                       onChange={(e) => this.setState({ term : e.target.value })}
                      />
                   </form>
                  </div>  
            )
        }
}

export default SearchBar;