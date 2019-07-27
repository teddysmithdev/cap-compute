import React, {Component} from 'react';
import SearchBar from './SearchBar'
import NavBar from './NavBar'
import Footer from './Footer'

class App extends Component {
  render() {
        return (
            <div>
                <NavBar/>
                <SearchBar/>
                <Footer/>
            </div>
        );
    }
}

export default App;
