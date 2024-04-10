import { AppBar, Typography} from '@mui/material'
import './Header.css'
let header = {
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   flexDirection: 'row',
   background: 'linear-gradient(90deg, rgba(28,187,146,1) 17%,  rgb(27, 215, 177) 95%)',
   width: '100%',
   height: '70px',
   padding: '0 10%',
   marginBottom: '50px',
   fontFamily: "'Alata', sans-serif",
}
export default function Header(){
return(
      <AppBar position="static" sx={header}>
         <Typography variant="h4" component="h1">Dish recipes</Typography>
         <Typography variant="h6" component="p">Created by <a href="https://github.com/KatiaWeb12" target="_blank">KatyaWeb</a></Typography>
      </AppBar>
)
}