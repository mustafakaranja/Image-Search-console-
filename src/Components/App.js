import React from 'react';
import unsplash from '../API/upsplash';
import SearchBar from './SearchBar';
import Imagelist from './ImageList';


class App extends React.Component {
    state = { image: []};
    onSearchSubmit = (term) => {
        unsplash.get('/search/photos', {
            params: { query: term},
            
        }).then(response => {
            this.setState({image: response.data.results});
        })
    }
   render () {
    return (
        <div className="ui container" style={{ marginTop:'10px'}}>
            <SearchBar runonSubmit={this.onSearchSubmit}/>
             About : {this.state.image.length} Images.
             <Imagelist image={this.state.image} />
        </div>
    );
  }
}

export default App;