import React, {Component} from "react";
import Axios from "axios";
import {TagContainer} from "./TagContainer";
//import routes from "../data/data";

export class WishList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wishData: [],
            loading: true
        }
    }

     componentDidMount() {
        this.fetchWishData();
    }

     fetchWishData =  () => {
        try {
            const data =  Axios.get('http://localhost:8080/wishtreedetails', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((response) => {
                console.log(response.data);
                this.setState({
                    wishData: response.data,
                    loading: false
                });
            })
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        return (<div>
            {this.state.loading && this.state.wishData.length < 0 ? <div>LOADING...</div> :
              <div className="tags">{
                  this.state.wishData.map((item, index) => (
                      <TagContainer id={item.wishId} data={item} key={index}></TagContainer>
                  ))
              }</div> }

        </div>)

    }
}
