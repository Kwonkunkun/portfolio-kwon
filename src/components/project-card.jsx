import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";

const ProjectCard = ({ project }) => {
    const classes = useStyles();

    const handleClick = () => {
        window.open(project.gitUrl, "_blank");
    };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardActionArea onClick={handleClick}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={project.img}
                        title={project.title}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {project.title}
                        </Typography>
                        <Typography>{project.info}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={handleClick} size="small" color="primary">
                        more detail
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

const useStyles = makeStyles((theme) => ({
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%", // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));
export default ProjectCard;