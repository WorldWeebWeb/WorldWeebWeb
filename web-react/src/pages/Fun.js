import React,{useState} from 'react'
import {Box,Typography,Button,Paper,Grid,Stack} from '@mui/material'

const Fun = () => {
	const [link, setlink] = useState({anime:"",quote:"",character:""})
	const [img, setimg] = useState("")
	const click= async()=>{
        try {
            const res = await(await fetch("https://animechan.vercel.app/api/random")).json();
            setlink(res);
            console.log(res);
        } catch (err) {
            console.error(err);
        }

	}
	const clicki=()=>{
		console.log("/"+Math.floor(Math.random()*7)+".gif");
        setimg("/"+Math.floor(Math.random()*7)+".gif");
	}
	return (
		<Box sx={{height:"90vh" ,bgcolor:"#0b0a0f",mt:2,overflowX:"hidden"}} >
			<Grid container spacing={8}>
				<Grid item xs={12}  md={6}>			
					<Paper elevation={3} sx={{height:"75vh",borderRadius:2,bgcolor:"transparent",border:"30px",mt:15,width:"90%",ml:3}}>
						<Stack sx={{width:"450px"}}>
						    <Typography variant="h4" sx={{color:"white"}}>Quote</Typography>
							<Box sx={{height:"150px",bgcolor:"#18191a",width:"100%",p:1,borderRadius:4}}><Typography variant="h6" sx={{color:"wheat"}}>{link.quote}</Typography></Box>
						    <Box sx={{width:"104%",my:4,bgcolor:"#18191a"}}>
						        <Typography variant="h6" sx={{color:"wheat"}}>{link.anime+" | "+link.character}</Typography>
						    </Box>
					   		<Button  onClick={()=>click()} variant="contained" size="medium" sx={{ml:13,width:"200px",bgcolor:"#3500D3"}}>get</Button>
						</Stack>
					</Paper>
				</Grid>
				<Grid item xs={26} md={6}>
					<Typography variant="h4" sx={{color:"white",mt:8}}>Gif</Typography>
					<Paper elevation={3} sx={{height:"60vh",borderRadius:2,bgcolor:"#18191a",mx:5,mt:1,overflow:"hidden"}}>
						<img alt="gif" src={img} width="100%" />
					</Paper>
					<Button  onClick={()=>clicki()} variant="contained" size="medium" sx={{mt:3,ml:"200px",width:"90px",bgcolor:"#3500D3"}}>get</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Fun

