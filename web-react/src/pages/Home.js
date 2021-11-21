import React,{useState} from 'react'
import {Box,Chip,Paper,Grid,Typography} from '@mui/material'
import Card from '../components/Card'
import {POST} from '../api.js'

const Home = () => {
	const  [type, settype] = useState("popular")
	const [list, setlist] = useState([])
	
	const getanime = async () => {
            const body = {"case":type };
            try {
                const res = await POST("getanimelist",body);
                setlist(res);
                console.log(res);
            } catch (err) {
                console.error(err);
            }
        }
    const click=(acase)=>{

    	settype(acase)
    	getanime()
    }

	return (
		<Box sx={{height:"90vh" ,bgcolor:"#0b0a0f",mt:2,overflow:"hidden"}} >
			<Grid container  sx={{height:"20vh",bgcolor:"transparent",display:"flex",pt:"15px"}} >
				<Grid item  xs={12} md={2}><Typography variant="h5" sx={{ml:6,color:"wheat",width:"80px",mr:"3vw"}}>find by</Typography></Grid>
				<Grid item  xs={6} md={2}><Chip onClick={()=>click("popular")} label="Popular" color="primary" sx={{mr:"3vw",height:"40px",width:"150px"}} /></Grid>
				<Grid item  xs={6} md={2}><Chip onClick={()=>click("rating")} label="Rating" color="primary" sx={{mx:"3vw",height:"40px",width:"150px"}} /></Grid>
				<Grid item  xs={6} md={2}><Chip onClick={()=>click("new")} label="New" color="primary" sx={{mx:"3vw",height:"40px",width:"150px"}} /></Grid>
				<Grid item  xs={6} md={2}><Chip onClick={()=>click("trending")} label="Trending" color="primary" sx={{mx:"3vw",height:"40px",width:"150px"}} /></Grid>
			</Grid>
			<Box sx={{mt:5}} >

				<Paper elevation={3} sx={{height:"60vh",borderRadius:2,bgcolor:"#18191a",m:5,mt:4}}>
					<Grid container rowSpacing ={5} columnSpacing={1} sx={{height:"100%",width:"100%",ml:3.8,overflowY:"scroll"}}>
						{list.map(a=> <Grid item xs={12} md={3}>
						<Card title={a.name} id={a.id} rating={a.score} img={a.img}/>
						</Grid>)}
						
					</Grid>
				</Paper>
			</Box>
		</Box>
	)
}

export default Home