/* written by Forrest Walker - https://www.youtube.com/watch?v=Dj5hzKBxCBI&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&index=3 */
/* Using Foursquare API https://developer.foursquare.com/ */
class Helper {
    static baseURL() {
        /*this establishes the base address for Foursquare*/
        return "https://api.foursquare.com/v2";
    }
    static auth() {
        /*authentication for our Foursquare API request*/
        const keys = {
            client_id: "DE1DKNEUOSEUI2FOQT2MFCSGQYSWR2VCCK5BXXLBIWVRYAFR",
            client_secret: "ON5Y30V0RI0PCHPYOZJAFGY4YVP4SVYRKGDYIOY20PX1AOTD",
            v:"20181017"
        };
        /*turn the keys object into a string for the request*/
        return Object.keys(keys)
            .map(key => `${key}=${keys[key]}`)
            .join("&");
    }
    static urlBuilder(urlPrams) {
        if(!urlPrams) {
            return ""
        }
        return Object.keys(urlPrams)
            .map(key => `${key}=${urlPrams[key]}`)
            .join("&");
    }
    /*setting the headers for the client / server request / response */
    static headers() {
        return {
            Accept: "application/json"
        };
    }
    /* making our fetch request */
    static simpleFetch(endPoint, method, urlPrams) {
        let requestData = {
            method,
            /* this is establised because this is a static function */
            headers: Helper.headers()
        };
        return fetch(`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
            urlPrams
        )}`,
        requestData
        ).then(res => res.json()).catch(() => alert('Oops! looks like something went wrong finding locations'))
    }
}
export default class SquareAPI {
    /* establishing our 'Search' endpoint */
    static search(urlPrams) {
        return Helper.simpleFetch("/venues/search","GET",urlPrams);
    }
    /* establishing our 'venue detail' endpoint */
    static getVenueDetails(VENUE_ID) {
        return Helper.simpleFetch(`/venues/${VENUE_ID}`,"GET")
    }
}