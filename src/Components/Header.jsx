import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: []
        }
    }

    fetchSearch(search){
        fetch(`https://api.tvmaze.com/search/shows?q=${search}`).then(response => response.json()).then(data => {this.setState({input:data})})
    }

    render(){

        return <div id="header">
            <div>
                <img src="https://cdn-icons.flaticon.com/png/128/3172/premium/3172476.png?token=exp=1655471162~hmac=2d45ce0f519dd577954d57d476f48ebc" alt="logo" />
                <h2 onClick={this.props.backToHome}>TV Maze</h2>
            </div>
            <div className="wrapp-input">
                <input onChange={(event) => this.fetchSearch(event.target.value)} type="text" placeholder="Search..."  />
                <ul className="search-list">{this.state.input.map((e) => {return <li>{e.show.name}</li>})}</ul>
            </div>
        </div>
    }
}
export default Header