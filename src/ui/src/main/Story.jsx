import {Component} from "react";
import logo from "./../assets/StroyFinal.jpg";

export class Story extends Component {
    render() {
        return(
            <div>
                <img src={logo} alt="story" style={{width:"100%"}}></img>
            </div>
        )
    }

}