import React, {Component} from 'react';
import './SearchBar.css'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '', cityStateZip: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({address: event.target.value});
    }
    handleSubmit(event) {
        alert(this.state.address)
        alert(this.state.cityStateZip);
        event.preventDefault()
    }
    render() {
        return (
            <div className="container">
                <div className="col-sm">
                <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.address}
                        onChange={this.handleChange} />
                </form>
                    <div className="form-group">
                        <form onSubmit={this.handleSubmit}>
                            <label>City, State, Zip</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.cityStateZip}
                                onChange={this.handleChange}/>
                        </form>
                    </div>
                    <button
                        type="submit"
                        onSubmit={this.handleSubmit}
                        className="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
