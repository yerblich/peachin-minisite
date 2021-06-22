import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

import BreadNav from '../components/BreadNav';
import NextButton from '../components/NextButton';

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
    activeDonationAmount: {
        color: 'white',
        background: "#1A394C"
    },
    inputLabel: {
        textAlign:'right',
        padding: "5px",
        fontWeight:"bold"
    }

}));

export default function Donations() {
    const initialDonationData = {
        donationAmount: "",
        paymentsAmount: 1,
        kevaAmount: 12,
        isKeva: false
    }
    const [donationData, setDonationData] = useState(initialDonationData);
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
                    <Grid item  >
                           <Typography variant="h5" color="primary" className={classes.inputLabel} >מה הסכום שתרצו לתרום?</Typography>
                    </Grid>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            
                            onChange={(e) => { setDonationData({ ...donationData, donationAmount: e.target.value}) }}
                            value={donationData.donationAmount ? donationData.donationAmount : ""}
                            className={classes.textField}

                            InputProps={{
                                inputProps: { type: 'number' },
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
                                <Paper className={`${classes.paper} ${amount === donationData.donationAmount ? classes.activeDonationAmount : ''} `} square onClick={() => { setDonationData({...donationData, donationAmount: amount}) }}  >
                                    <Typography color='primary' className={classes.buttonsLabel}>בחר תרומה</Typography>
                                    <Typography variant="h3" color='primary' className={classes.buttonsAmount}> <span style={{ fontSize: '80%' }}>₪</span>{amount}   </Typography>

                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item xs={12} sm={6} >
                        <Typography variant="h6"   >
                            <Checkbox
                                checked={!donationData.isKeva}
                                onChange={() => {setDonationData({...donationData,isKeva:false})}}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            באופן חד פעמי ב-
                            <Select
                                value={donationData.paymentsAmount ? donationData.paymentsAmount : 1}
                                className={classes.paymentsSelect}
                                onChange={(e) => { setDonationData({...donationData,paymentsAmount:e.target.value}) }}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                            תשלומים
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Typography variant="h6"   >
                        <Checkbox
                                checked={donationData.isKeva}
                                onChange={() => {setDonationData({...donationData, isKeva: true})}}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            <span>אשמח להוראת קבע זה למשך </span>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={donationData.kevaAmount ? donationData.kevaAmount : 12}
                                className={classes.paymentsSelect}
                                onChange={(e) => { setDonationData({...donationData,kevaAmount:e.target.value}) }}
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
                    <NextButton donationData={donationData} />
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}
