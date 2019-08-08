import React, {Component, useState} from "react";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles(theme => ({
    buttonVoice: {
        margin: theme.spacing(1),
        color: "#51BBFE",
        backgroundColor: "#30343F"
    },
    buttonAsl: {
        margin: theme.spacing(1),
        color: "#8FF7A7",
        backgroundColor: "#30343F"
    },
    input: {
        display: "none",
    },
    root: {
        flexGrow: 1,
    },
    paperMain: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.primary,
        backgroundColor: "#D3D4D9"
    },
    paperDataVoice: {
        padding: theme.spacing(2),
        textAlign: "left",
        color: theme.palette.text.primary,
        backgroundColor: "#51BBFE",
        margin: 5,
    },
    paperDataAsl: {
        padding: theme.spacing(2),
        textAlign: "left",
        color: theme.palette.text.primary,
        backgroundColor: "#8FF7A7",
        margin: 5
    },
    gridResponse: {
        //...theme.typography.button,
    }
}));


function MainBodyHook(props) {
    const classes = useStyles();

    console.log(props);
    return (
        <Grid className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.paperMain}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Typography variant={"h5"}><b>VOICE-TO-TEXT</b>
                                        <Button variant="outlined" className={classes.buttonVoice} onClick={props.onClickHandlerVoice}>
                                            Start Listening Voice
                                        </Button>
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}><Typography variant={"h4"}><b>Assistive Tech Warriors</b></Typography></Grid>
                                <Grid item xs={4}>
                                    <Typography variant={"h5"}>
                                        <Button variant="outlined" className={classes.buttonAsl} onClick={props.onClickHandlerAsl}>
                                            Start Listening Asl
                                        </Button>
                                        <b>ASL-TO-TEXT</b>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.gridResponse}>
                    <Grid item xs={6}>
                        {props.voiceResponseDataArray.map((voiceToTextData, index) =>
                            <Paper className={classes.paperDataVoice} key={index}><b>{voiceToTextData}</b></Paper>)
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {props.aslResponseDataArray.map((aslToTextData, index) =>
                            <Paper className={classes.paperDataAsl} key={index}><b>{aslToTextData}</b></Paper>)
                        }
                    </Grid>
                </Grid>
        </Grid>
    )
}

export default function MainBody(props){
    const [voiceResponse, setVoiceResponse] = useState([]);
    const [aslResponse, setAslResponse] = useState([]);

    const startListeningHandlerStateVoice = () => {

    let url = "http://localhost:5000/voicetotext";
    let method = "GET";
    let data = {keyword: "startListening"};

    let authOptions = {
        method: method,
        url: url,
        data: data,
    };

    axios(authOptions)
        .then(function (response) {
        console.log(response.data);
        setVoiceResponse([...voiceResponse, response.data.voiceToTextOutput]);
    })
        .catch(function (error) {
            console.log(error);
        });
    };

    const startListeningHandlerStateAsl = () => {

    let url = "http://localhost:4000/asltotext";
    let method = "GET";
    let data = {keyword: "startListening"};

    let authOptions = {
        method: method,
        url: url,
        data: data,
    };

    axios(authOptions)
        .then(function (response) {
        console.log(response.data);
        setAslResponse([...aslResponse, response.data.aslToTextOutput]);
    })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <div>
            <MainBodyHook voiceResponseDataArray={voiceResponse} onClickHandlerVoice={startListeningHandlerStateVoice} aslResponseDataArray={aslResponse} onClickHandlerAsl={startListeningHandlerStateAsl}/>
        </div>
    )
}