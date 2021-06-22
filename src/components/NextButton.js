import React from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';




function NextButton(props) {
    return (
        <>
            <Box pt={5}>
                <Button variant="contained" color="secondary" onClick={() => { console.log(props.donationData); alert('Check Console') }} >
                    <Typography style={{color:"white",fontWeight:"bold"}}>
                        לשלב הבא {">"}
                    </Typography>
                </Button>
            </Box>
        </>
    )
}

export default NextButton
