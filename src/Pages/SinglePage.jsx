import React  from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

class SinglePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            seasons: [],
            cast: []
        }
    }

    fetchSeasons(){
        fetch(`https://api.tvmaze.com/shows/${this.props.movieInfo.id}/seasons`).then(response => response.json()).then(data => this.setState({seasons: data}))
    }

    componentDidMount(){
        this.fetchSeasons()
        this.fetchCast()
    }

    fetchCast(){
        fetch(`https://api.tvmaze.com/shows/${this.props.movieInfo.id}/cast`).then(response => response.json()).then(data => this.setState({cast: data}))
    }

    render(){

        return <div>
            <Header></Header>
            <button onClick={this.props.backToHome}>Back to Home</button>
            <div className="wrapp-all">
                <div className="movie-wrapp-single-page">
                    <h1 className="movie-title">{this.props.movieInfo.name}</h1>
                    <div className="wrapp-img-seas-cast">
                        <img src={this.props.movieInfo.image.medium} alt="slika"></img>
                        <div className="wrapp-seas-cast">
                            <div className="seasons-wrapp">
                                <h2>Seasons ({this.state.seasons.length}) </h2>
                                {this.state.seasons.map((e) => {return <div>{e.premiereDate} - {e.endDate}</div>})}
                            </div>
                            <div className="cast-wrapp">
                                <h2>Cast</h2>
                                {this.state.cast.map((e) => {return <div>{e.person.name}</div>})}
                            </div>
                        </div>
                    </div>
                    <p>{this.props.movieInfo.summary}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    }
}

export default SinglePage
