
let API_URL = 'https://public-api.aktuality.sk/';


export default {

    ONE_DAY_ARTICLES: API_URL + 'articles/mostread/aktuality?limit=8&amp;days=1',

    THREE_DAYS_ARTICLES: API_URL + 'articles/xmostread/aktuality?limit=8&amp;days=3',
    
    SEVEN_DAYS_ARTICLES: API_URL + 'articles/mostread/aktuality?limit=8&amp;days=7',

}