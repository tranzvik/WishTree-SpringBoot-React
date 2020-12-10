import React, {Component} from "react";
import "./home.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import {WishDetails} from "./WishDetails";
import Axios from 'axios';
import Notification from "./Notification";


export class TagContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: props.id,
            detail: props.data.wishDetails,
            wishTaken: props.data.wishTaken,
            dialogOpen: false,
            wishDetails: new WishDetails(),
            error: {
                open: false,
                message: '',
                severity: 'info',
            }
        }
    }

    componentDidMount() {

    }

    onWishSubmit = () => {
        this.handleClickOpen();

    }

    handleClickOpen = () => {
        this.setState({dialogOpen: true});
    }

    handleClose = () => {
        this.setState({dialogOpen: false});
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let formData = this.state.wishDetails;
        formData[name] = value;
        this.setState({
            userInfo: formData
        });
    };

    onRegisterButtonClick = (event) => {
        let formData = this.state.wishDetails;
        formData['wishId'] = this.state.key;
        formData['wishDetails'] = this.state.detail;
        formData['wishTaken'] = true;
        this.setState({wishDetails: formData});
        console.log("wishDetails" + this.state.wishDetails);
        this.submitData(this.state.wishDetails);

    };

    submitData = (wishDetails) => {

        let msg = "";
        let priority = "";
        Axios.post('http://blr00cms.in.oracle.com:8080/wishtree', wishDetails, {
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        })
            .then(function (response) {
                msg = response.data;
                priority = "success"
                console.log(response);
            }).catch(error => {
            console.log("error" + error);
            msg = "Error in saving Details. Contact anil.np@oracle.com";
            priority = "error";

        }).finally(()=> {

            this.handleClose();
            this.setState({
                error: {
                    message: msg,
                    severity: priority,
                    open: true
                }
            });
        })

    }

    handleNotificationClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({

            error: {
                open: false,
                message: '',
                severity: 'info'
            }
        });

    }


    render() {
        return (
            <div>

                <Notification
                    message={this.state.error.message}
                    severity={this.state.error.severity}
                    open={this.state.error.open}
                    closeHandler={this.handleNotificationClose}
                ></Notification>

                <div className="tag-container">
                    <div className="tag">
                        <div className="tag-side tag-1-side">
                            <div className="tag-1-top"></div>
                            <div className="tag-text tag-1-text">
                                Merry<br/>Christmas <br/> WishId:{this.state.key}
                            </div>
                        </div>

                        <div className="tag-side tag-1-side is-back">
                            <div className="tag-1-top"></div>
                            <div className="tag-text tag-1-text tag-back">
                                {this.state.detail}
                                <div>
                                    <Button variant="contained"
                                            color="primary"
                                            style={this.state.wishTaken ? { backgroundColor: 'grey', color:"white" } : {}}
                                        color="primary"
                                            onClick={this.onWishSubmit}
                                            disabled={this.state.wishTaken}>
                                        {this.state.wishTaken ? "Wish Fulfilled":"Fulfill Wish"}
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Dialog open={this.state.dialogOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Fulfill this wish</DialogTitle>
                    <DialogContent>
                        <form className="form-1col">
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="employeeId"
                                        type="number"
                                        label="employee Id"
                                        helperText="Employee Id is required"
                                        variant="outlined"
                                        name="employeeId"
                                        onChange={this.handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="txtFullName"
                                        label="Full Name"
                                        helperText="*Full Name is required"
                                        variant="outlined"
                                        name="employeeName"
                                        onChange={this.handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="txtUsername"
                                        label="Email"
                                        helperText="*Email is required"
                                        variant="outlined"
                                        name="emailId"
                                        onChange={this.handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="txtPhone"
                                        type="number"
                                        label="Phone Number"
                                        helperText="*Phone Number is required"
                                        variant="outlined"
                                        name="phoneNumber"
                                        onChange={this.handleInputChange}
                                    />
                                </Grid>


                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" onClick={this.onRegisterButtonClick}>
                                        Submit
                                    </Button>
                                    <Button style={{marginLeft: "1em"}} variant="contained" color="secondary"
                                            onClick={this.handleClose}>
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>


        )
    }


}