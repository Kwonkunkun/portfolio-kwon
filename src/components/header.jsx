import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ComputerIcon from "@material-ui/icons/Computer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="relative">
            <Toolbar>
                <ComputerIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    KUNWOO KWON
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));

export default Header;
