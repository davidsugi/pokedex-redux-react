import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ContentLoader from "react-content-loader";
import { capitalize } from '../helper';

const LoaderVariant =[
    <ContentLoader height={20} width={180} speed={4} primaryColor="#cfcfcf" secondaryColor="#ededed"> <rect x="11" y="8" rx="0" ry="0" width="75" height="12" />  <rect x="104" y="9" rx="0" ry="0" width="15" height="13" />  <rect x="129" y="10" rx="0" ry="0" width="90" height="12" /></ContentLoader>,
    <ContentLoader  height={20} width={200} speed={4} primaryColor="#cfcfcf" secondaryColor="#ededed"> <rect x="11" y="5" rx="0" ry="0" width="75" height="15" />  <rect x="95" y="5" rx="0" ry="0" width="44" height="17" />  <rect x="147" y="6" rx="0" ry="0" width="72" height="16" /></ContentLoader>,
     <ContentLoader  height={20} width={200} speed={4} primaryColor="#cfcfcf" secondaryColor="#ededed"> <rect x="11" y="3" rx="0" ry="0" width="118" height="17" />  <rect x="137" y="4" rx="0" ry="0" width="82" height="18" /></ContentLoader>,
     <ContentLoader  height={20} width={200} speed={4} primaryColor="#cfcfcf" secondaryColor="#ededed"> <rect x="11" y="3" rx="0" ry="0" width="171" height="17" /></ContentLoader>,
]

export default function MySnackbarContentWrapper(props) {



  return (
    <Grid item xs={12} md={6} style={{ textAlign:'center'}}>
                              <Grow in={true} {...({ timeout: 1500 })}>
                              <Paper elevation={4} style={{ margin: '10px', padding:'10px'}}>
                                
                                    { props.isLoading ? <div style={{ width:180, height:30, margin:'auto'}}>
                                        {LoaderVariant[Math.floor(Math.random()*LoaderVariant.length)]}
                                   </div> 
                         : <Typography variant="h6" component="p" gutterBottom> {capitalize(props.label)  }</Typography> }
                              
                              </Paper>
                              </Grow>
    </Grid>
  );
}


