import React,{useState,useEffect} from 'react'
import {Box,Paper,Grid,Stack,Typography} from '@mui/material'
import {POST} from '../api.js'
import {useParams} from 'react-router-dom'

const Details = () => {
	const {id} = useParams()
	const [data, setdata] = useState({image_url:""})

	useEffect(()=>{
		const getanime = async () => {
            const body = {"id":id };
            console.log(data);
            try {
                const res = await POST("animedetails",body);
                setdata(res);
                console.log(res);
            } catch (err) {
                console.error(err);
            }
        }
        getanime();
	}, [id,data,setdata])

	return (
		<Box sx={{height:"90vh" ,bgcolor:"#0b0a0f",mt:2,overflowX:"hidden"}} >
			<Grid container >
				<Grid item xs={12}  md={3} >
					<Box sx={{mt:8,ml:5}}>	
					<img src={data.image_url} alt="anime" />
					</Box>
				</Grid>
				<Grid item xs={12}  md={9}>	
					<Paper elevation={3} sx={{height:"80vh",borderRadius:2,bgcolor:"#18191a",mx:1,mt:4}}>
						<Stack>
							<Box sx={{display:"flex"}}>
								<Stack sx={{p:2}}>
									<Typography variant="h3" sx={{width:"95%",color:"yellow"}}>
										{data.title}
									</Typography>
									<Typography variant="h6" sx={{color:"orange"}}>
										{data.title}
									</Typography >
									<Typography variant="h6" sx={{my:1,color:"wheat"}}>
										{data === {image_url:""}? " w": `rating: ${data.score} | ${data.episodes} episodes`}
									</Typography>
									<Typography variant="h5" sx={{color:"orange",mt:3}}>
										{data === {image_url:""}? " a": "synopsis"}
									</Typography>
									<Typography sx={{text:"5px",color:"white"}} variant="p">
										{data.synopsis}
									</Typography>
								</Stack>
							</Box>
						</Stack>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Details