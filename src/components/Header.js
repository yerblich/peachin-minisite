import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Image from '../assets/images/header_image.jpeg'; 


const useStyles = makeStyles({
  hero: {
    backgroundImage: `url(${Image})`,
    height: "24vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
});

function Header() {
    const classes = useStyles();
    return (
        <>
            <Box  color="text.primary"  className={classes.hero}>
            </Box>
        </>
    )
}

export default Header
