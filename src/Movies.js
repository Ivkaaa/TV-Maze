import React from "react";
import "./Movies.css";
import HomePage from "./Pages/HomePage"
import SinglePage from "./Pages/SinglePage"


class Movies extends React.Component{
    constructor(props){
        super(props)
        this.fetchData = this.fetchData.bind(this)
        this.setSelectMovie = this.setSelectMovie.bind(this)
        this.backToHome = this.backToHome.bind(this)
        this.state = {
            selectedMovie : "",    
            data: []
        }
    }

    fetchData(){
        fetch("http://api.tvmaze.com/shows")
        .then(res => res.json())
        .then(response => this.setState({
            data: response.sort((a,b) => b.rating.average - a.rating.average).filter((e,i) => i<50)
        }))
    }

    componentDidMount(){   {/* ne poziva se odradjuje se sama, i sada vise ne moramo da kliknemo na dugme da bi prikazalo podatke */}
        this.fetchData()
    }

    setSelectMovie(movie){
        this.setState({
        selectedMovie : movie 
        })
    }
    
    backToHome(){
        this.setState({
            selectedMovie: ""
        })
    }

    render(){
        return <div>
            {!this.state.selectedMovie ? <HomePage movies={this.state.data} funkcija={this.setSelectMovie}/> : <SinglePage backToHome={this.backToHome} movieInfo={this.state.selectedMovie}/>}
        </div>
    }
}

export default Movies
