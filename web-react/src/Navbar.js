import React from 'react'
import {Box,Button,Typography,Grid} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import logo from "./favicon.ico"

const Navbar = ({children}) => {
	const navigate = useNavigate();
	const  change=(tabno)=> {
		navigate(tabno);
	}
	return (
		<Box sx={{bgcolor:"#0b0a0f",height:"100vh"}} >
			<Grid conatiner sx={{bgcolor:"orange",width:"100vw",height:"7vh",display:"flex",alignItems:"center"}}>
				<Grid item xs={6} md={9} sx={{width:"45%",ml:1,display:"flex"}}>
					<Box sx={{mt:"5px",mr:1}}><img src={logo} alt="" width="30px"/></Box>
					<Typography variant="h4">Aniverse</Typography>
				</Grid>
				<Grid item xs={6} md={3} sx={{width:"10%",display:"flex"}} >
					<Button onClick={()=>change("/")} sx={{color:"white"}} ><Typography variant="h5" sx={{mr:1}}>Home </Typography></Button>
					<Typography variant="h5" sx={{mt:"3px",color:"wheat"}} > | </Typography>
					<Button onClick={()=>change("/fun")} sx={{color:"white"}} ><Typography sx={{ml:1}} variant="h5"> Fun</Typography></Button>
				</Grid>
				
			</Grid>
			{children}
		</Box>
	)
}

export default Navbar;