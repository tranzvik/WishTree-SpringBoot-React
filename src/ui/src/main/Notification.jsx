import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Notification (props){
    return (
        <>
        <Snackbar 
            open={props.open} 
            autoHideDuration={props.duration}
            onClose={props.closeHandler}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
        >
            <Alert onClose={props.closeHandler} severity={props.severity}>
                {props.message}
            </Alert>
        </Snackbar>
        </>
    )
}

