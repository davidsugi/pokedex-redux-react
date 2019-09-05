import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import React from 'react';
import ContentLoader from 'react-content-loader';
import LazyLoad from 'react-lazy-load';
import '../style/App.scss';
import ImgLoader from './ImgLoader';

export default function PokeList({ onClick, name,id, owned=0 ,isLoading}) {
  if(isLoading){
      return (<li>
        <Card className="card" >
           <ContentLoader 
              height={110}
              width={100}
              speed={4}
              primaryColor="#cfcfcf"
              secondaryColor="#ededed"
            >
               <rect x="15" y="13" rx="3" ry="3" width="67" height="67" /> 
                <circle cx="72" cy="79" r="1" /> 
                <circle cx="53" cy="73" r="1" /> 
                <circle cx="53" cy="73" r="1" /> 
                <circle cx="52" cy="73" r="1" /> 
                <rect x="115" y="39" rx="0" ry="0" width="0" height="0" /> 
                <circle cx="35" cy="58" r="1" /> 
                <rect x="17" y="88" rx="0" ry="0" width="39" height="7" /> 
                <rect x="21" y="100" rx="0" ry="0" width="28" height="7" /> 
                <rect x="63" y="88" rx="0" ry="0" width="10" height="7" /> 
            </ContentLoader>
        </Card>
        </li>)
  }

  return (
    <li>
    <Zoom in={true} >
    <Card className="card">
      <CardActionArea  onClick={onClick} style={{ height:'100%' }}>
        <CardContent>
          <div style={{ textAlign:'center' }}>
            <LazyLoad 
            width='100%'
            debounce={false}
            throttle={250}
            offsetVertical={500}
            >
            <ImgLoader className="image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}  />        
            </LazyLoad>
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            {name}            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Owned: {owned}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Zoom>
    </li>
  );
}
