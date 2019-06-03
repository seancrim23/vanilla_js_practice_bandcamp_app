import bandcamp from 'bandcamp-scraper';

var params = {
    query: 'Regional Justice Center',
    page: 1
};

bandcamp.search(params, (error, searchResults) => {
    if(error){
        console.log(error);
    }else{
        console.log(searchResults);
    }
});