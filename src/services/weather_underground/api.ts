import queryString from "querystring";
import type { Forecast } from "./types";

// TODO: read from env vars
const baseUrl = 'https://api.tomorrow.io/';
export const apiKey = '1CoMZlPO4Wf7aH1FWUPe3R8YaDtsZ5Wt';

export async function forecast(lat: number, lon: number) {
    try {
        const params = {
            location: `${lat},${lon}`,
            apikey: apiKey
        }
        const res = await fetch(baseUrl + 'v4/weather/forecast?' + queryString.stringify(params))
        return await res.json() as Forecast;
    }
    catch(err){
        console.log('error', err);
        return null;
    }    
}
