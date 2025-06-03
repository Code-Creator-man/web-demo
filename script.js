const fetchNews = async (page) => {
    console.log("Fetching page...")
    var url = 'https://newsapi.org/v2/everything?'+
    'q=Apple&' +
    'from=2025=05-20&' +
    'pageSiz=20&' +
    'page=' +page+
    'sortBy=popularity&' +
    'apiKey='
}