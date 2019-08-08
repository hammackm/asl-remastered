import React from "react";

import {makeStyles} from '@material-ui/styles';
import classes from "./Header.module.css";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

const createStyles = makeStyles({
    AppBar: {
        background: 'transparent',
        boxShadow: 'none',
    },
    AppBarTitle: {
        fontFamily: "Prompt, sans-serif",
        fontWeight: 900,
        fontSize: "6vh"
    }
});

function Header() {
    const styles = createStyles();

    //AppBar
    return (
        <div>
            <AppBar style={{display: "flex", flexDirection: "column", background: "#30343F"}} position="static" className={styles.Appbar}>
                <Toolbar>
                    <Typography className={styles.AppBarTitle} variant="h4" color="inherit" style = {{flex: 1}}>
                        Assistive Tech Warriors
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;