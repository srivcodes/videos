import React from "react";

class Searchbar extends React.Component {
state = {term : " "};

onInputChange = (e) => {
this.setState({ term: e.target.value});
};

onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
}

    render(){
        return(
            <div className="search-bar ui segment" style = {{margin : "20px"}}>
            <form onSubmit={this.onFormSubmit} className = "ui form">
            <div className="field">
                <label>Video Search</label>
            </div>
                <input type="text" value = {this.state.term} onChange={this.onInputChange}/>
            </form>
            </div>
        );
    }
}

export default Searchbar ;