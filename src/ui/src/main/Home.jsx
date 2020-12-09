import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "../styles/over-ride-styles.css";
import {StylesProvider} from "@material-ui/styles";
import {WishList} from "./WishList";
import {Story} from "./Story";
import {Help} from "./Help";
import {HowToDeliver} from "./HowToDeliver";

export function TabPanel(props) {
    const { children, value, index, ...other } = props;


    return (

        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>

    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.paper,
        width:"100%",

    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <StylesProvider injectFirst>
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Pick a Wish" {...a11yProps(0)} />
                    <Tab label="Story" {...a11yProps(1)} />
                    <Tab label="How to Deliver" {...a11yProps(2)} />
                    <Tab label="Help" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <WishList></WishList>
               {/* <div className="tags">
                    { wishData.map((item, index) => (
                        <TagContainer id={item.wishId} icon={item.wishDetails} key={index}></TagContainer>
                    ))  }

                </div>*/}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Story></Story>
            </TabPanel>
            <TabPanel value={value} index={2}>
               <HowToDeliver></HowToDeliver>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Help></Help>
            </TabPanel>
        </div>

        </StylesProvider>
    );
}