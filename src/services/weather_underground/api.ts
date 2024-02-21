import queryString from "querystring";
import type { Forecast } from "./types";

const baseUrl = process.env.WEATHER_UNDERGROUND_URL;
export const apiKey = process.env.WEATHER_UNDERGROUND_API_KEY;

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
