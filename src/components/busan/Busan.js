import React from 'react';

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip'
import CityMap from './CityMap';
const Busan = () => {


    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Chip label="ππ₯π₯λΆμ° λΉ΅μ§μλ‘π₯¨π₯―π₯" color="primary"/>
            </Grid>
            <Grid item xs={12}>
                <CityMap/>
            </Grid>
        </Grid>
    );
};

export default Busan;