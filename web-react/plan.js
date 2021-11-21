=======================featues available

q	STRING	For UTF8 characters, percentage encoded and queries including back slashes
page	INTEGER	Page number
type	See Enums Below	Filter type of results
status	See Enums Below	Filter status of results
rated	See Enums Below	Filter age rating of results
genre	See Enums Below	Filter by genre ID(s)
score	FLOAT : 0.0-10.0	Filter score of results
start_date	yyyy-mm-dd	Filter start date of results
end_date	yyyy-mm-dd	Filter end date of results
genre_exclude	boolean : 0/1	To exclude/include the genre you added in your request
limit	INTEGER	Limits item results to the number specified
order_by	See Enums Below	Order results with respect to a property
sort	See Enums Below	Sort order_by (Default is descending)
producer	INTEGER	MAL ID of the producer
magazine	INTEGER	MAL ID of the magazine
letter	UTF8 Character	Search anime or manga by the letter/character it starts with

=======================home

genre   1 2 4 6 7 8 22 23 24 36 46
score	  FLOAT : 8.8-10.0	
Limits    15
order_by  score
sort descending


trending  &order_by=rating&sort=desc&=airing,complete&page=1,2,3&limit=20

new       &status=airing&order_by=score&sort=decs&page=1,2,3&limit=20

rating    &order_by=score&sort=decs&page=1,2,3&limit=20

popular   &order_by=members&sort=desc&page=1,2,3&limit=20


=====================anime description




/synopsis
/episodes	
/news	
/pictures	N/A	List of Related pictures




{

    "mal_id": 1,
    "url": "https:\/\/myanimelist.net\/anime\/1\/Cowboy_Bebop",
    "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/4\/19644.jpg",
    "title": "Cowboy Bebop",
    "title_english": "Cowboy Bebop",
    "score": 8.77,
    "rank": 33,
    "episodes": 26,
    "synopsis": "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys.\" The ragtag team aboard the spaceship Bebop are two such individuals. Mellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels\u2014Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong\u2014the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. Well-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after. [Written by MAL Rewrite]",
   
    
    "genres": [{
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https:\/\/myanimelist.net\/anime\/genre\/1\/Action"
    }, {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https:\/\/myanimelist.net\/anime\/genre\/2\/Adventure"
    }],
    
}

