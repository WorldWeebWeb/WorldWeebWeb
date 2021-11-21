import React from 'react'
import {Box,Paper} from '@mui/material'
import {useNavigate} from 'react-router-dom'

const Card = ({title,id,img,rating}) => {
	const navigate = useNavigate();
	const click =(no)=>{
		navigate("/anime/"+no);
	}
	return (
		<Paper onClick={()=>click(id)} elevation={3} sx={{width:"230px",height:"330px",borderRadius:3,display:"flex",overflow:"hidden"}}>
			<Box sx={{width:"100%",height:"100%"}}>
			<img alt="anime"src={img} width="100%" height="100%"/>
			</Box>
			
		</Paper>
	)
}
//<Box sx={{ml:"-90%"}} >
	// 		<h2>{title}</h2><p>{`Rating:${rating}`}</p>
		//	</Box>
export default Card