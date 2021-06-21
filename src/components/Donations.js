import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import BreadNav from '../components/BreadNav';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: '50px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: "5px 10px 5px 10px",
        cursor: "pointer",
        borderRadius: "3px",
        '&:hover': {
            background: '#1A394C',
            color: 'white'
        }

    },
    container: {
        borderTop: '2px solid orange',
        borderBottom: '2px solid orange',
        marginTop: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
        maxWidth: '85vw',

    },
    textField: {
        minHeight: '80px',
        width: '100%',
        '& .MuiInputBase-root': {
            height: '80px',
            width: '100%',
            fontSize: '34px'
        },


    },
    inputAdornment: {
        fontSize: '40px',
        paddingLeft: '10px',
        fontWeight: 'bold'
    },
    buttonsAmount: {
        fontWeight: "bold",
        fontSize: '2rem',
        color: "inherit"
    },
    buttonsLabel: {
        color: "inherit"
    },
    paymentsSelect: {
        marginRight: "2px",
        marginLeft: "4px",
    },
    donationsWrap: {
        margin: "40px 0px 40px 0px",
    },
    nextButton: {
        color: 'white',
        fontWeight: 'bold'
    },
    activeDonationAmount: {
        color: 'white',
        background: "#1A394C"
    }

}));

export default function Donations() {
    const [donationAmount, setDonationAmount] = useState(0);
    const [paymentsAmount, setPaymentsAmount] = useState(1);
    const [kevaAmount, setKevaAmount] = useState(12);
    const [isKeva, setIsKeva] = useState(false);


    const classes = useStyles();

    const presets = ["50", "100", "180", "250"];
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];



    return (
        <div className={classes.root}>
            <Container fixed className={classes.container} >
                <Grid container spacing={3} >
                    <BreadNav />
                </Grid>
                <Grid container spacing={3} alignItems="center" justify="center" className={classes.donationsWrap}>
                    <Grid item xs={12} sm={5} >
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            value={donationAmount ? donationAmount : "0"}
                            className={classes.textField}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start" >
                                        <Typography color='primary' className={classes.inputAdornment}>₪</Typography>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid container item xs={12} sm={7} justify={'space-between'}>
                        {presets.map(amount =>
                            <Grid key={amount} item xs={6} sm={6} md={6} lg={3}>
                                <Paper className={`${classes.paper} ${amount === donationAmount ? classes.activeDonationAmount : ''} `} square onClick={() => { setDonationAmount(amount) }}  >
                                    <Typography color='primary' className={classes.buttonsLabel}>בחר תרומה</Typography>
                                    <Typography variant="h3" color='primary' className={classes.buttonsAmount}> <span style={{ fontSize: '80%' }}>₪</span>{amount}   </Typography>

                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item xs={12} sm={6} >
                        <Typography variant="h5"   >
                            <Checkbox
                                checked={!isKeva}
                                onChange={() => {setIsKeva(false)}}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            באופן חד פעמי ב-
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={paymentsAmount ? paymentsAmount : 1}
                                className={classes.paymentsSelect}
                                onChange={(e) => { setPaymentsAmount(e.target.value) }}
                            >

                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                            תשלומים
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Typography variant="h5"   >
                        <Checkbox
                                checked={isKeva}
                                onChange={() => {setIsKeva(true)}}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            <span>אשמח להוראת קבע זה למשך </span>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={kevaAmount ? kevaAmount : 12}
                                className={classes.paymentsSelect}
                                onChange={(e) => { setKevaAmount(e.target.value) }}
                            >
                                {months.map(month =>
                                    <MenuItem key={month} value={month}>{month}</MenuItem>

                                )}

                            </Select>
                            <span>חודושים</span>
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container spacing={3} alignItems="center" justify="flex-end" className={classes.nextButtonWrap} >
                    <Grid item   >
                        <Box pt={5}>
                            <Button variant="contained" color="secondary" onClick={() => { console.log({ donationAmount, paymentsAmount, kevaAmount,isKeva }) }} >
                                <Typography className={classes.nextButton}>
                                    לשלב הבא {">"}
                                </Typography>
                            </Button>
                        </Box>

                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}
