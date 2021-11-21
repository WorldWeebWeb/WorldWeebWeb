const { requestObj, responseObj,apireq } = require('./utils/helper');


exports.handler = async (event, context) => {
  let data = requestObj(event.body);
  try {
    let url=null;
    switch (data.case) {
      case "popular":
        url = "&order_by=members&sort=desc&page=1,2,3&limit=20";
        break; 
      case "rating":
        url = "&order_by=score&sort=decs&page=1,2,3&limit=20";
        break;
      case "trending":
        url = "&order_by=score&sort=desc&=airing,complete&page=1,2,3&limit=20";
        break;
      case "new":
        url = "&status=airing&order_by=score&sort=decs&page=1,2,3&limit=20";
        break;
        case "search":
        url = data.search+"&order_by=score&sort=desc&page=1&limit=1";
        break;
    } 
    resdata = await apireq("/search/anime?q="+url);
    filterres = resdata.results.map((a)=>{return {id:a.mal_id,name:a.title,score:a.score,img:a.image_url}});
    console.log(filterres);
    return responseObj(200, filterres);
  } catch (error) {
    console.log(error)
    return responseObj(500, error);
  }
 
};