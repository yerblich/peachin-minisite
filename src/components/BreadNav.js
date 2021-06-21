import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({

    breadcrumbs: {
       margin:"15px"
    },
    firstBread: {
        fontWeight: 'bold'
    }
}));

function BreadNav() {
    const classes = useStyles();
    return (
        <>
             <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.breadcrumbs} >
                        <Breadcrumbs separator=">" aria-label="breadcrumb" >
                            <Link color="inherit" href="/" >
                            <Typography color="primary" className={classes.firstBread}>בחירת תרומה</Typography>
                              </Link>
                            <Link color="inherit" href="/getting-started/installation/" >
                            <Typography color="primary">פרטים אישים </Typography>
                              </Link>
                            <Typography color="primary"> פרטי תשלום </Typography>
                        </Breadcrumbs>
                    </Grid>   
        </>
    )
}

export default BreadNav
