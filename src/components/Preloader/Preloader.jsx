import { CircularProgress, LinearProgress } from '@mui/material'
import './Preloader.css'

export default function Preloader({color='primary', variant='linear'}){
    return(
      <>
         {variant == 'linear' ? <LinearProgress className='preloader' color={color}/> : <CircularProgress className='preloader' color={color}/>}
      </>
      
    )
}