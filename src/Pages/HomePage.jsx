import React  from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

class HomePage extends React.Component{
    // constructor(props){
    //     super(props)
    //     // console.log(this.props.funkcija)
    // }

    render(){

        return <div>
            <Header></Header>
            <div className="movie-wrapp">
                                                              {/*props */}
                { this.props.movies.map( (e) => { return <Card funkcija2={this.props.funkcija} singleMovie={e}/> }) }
                {this.props.setSelectMovie}
            </div>
            <Footer></Footer>
        </div>
    }
}

export default HomePage
