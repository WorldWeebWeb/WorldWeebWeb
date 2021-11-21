const { requestObj, responseObj,apireq } = require('./utils/helper');


exports.handler = async (event, context) => {
  let data = requestObj(event.body);
  try {
    resdata = await apireq("/anime/"+data.id);
    filterres = {
        url:resdata.url,
        image_url:resdata.image_url,
        title_eng:resdata.title_eng,
        title:resdata.title,
        score:resdata.score,
        rank:resdata.rank,
        episodes:resdata.episodes,
        synopsis:resdata.synopsis,
        genres:resdata.genres.slice(0,3).map((a)=>{return{genre:a.name}})
    }
    console.log(filterres);
    return responseObj(200, filterres);
  } catch (error) {
    console.log(error)
    return responseObj(500, error);
  }
 
};

