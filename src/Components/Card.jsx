import React from "react";

class Card extends React.Component{
    // constructor(props){
    //     super(props)
    //     // console.log(this.props.funkcija2)
    // }
    render(){
        return <div onClick={() => this.props.funkcija2(this.props.singleMovie)}>
            <img src={this.props.singleMovie.image.medium} alt="movie img" />
            <h3>{this.props.singleMovie.name}</h3>  
        </div>
    }
}
export default Card