import { uniqBy, zip } from 'lodash';
import { Alert } from './../models/alert';
import { Watchlist } from "../models/watchlist";
import { forecast } from '../services/weather_underground/api';
import { Forecast } from '../services/weather_underground/types';

export function uniqueLocations(watchlists: Watchlist[]) {
    const allLocations = watchlists.flatMap(wl => wl.locations)
    return uniqBy(allLocations, ({lat, lon}) => `${lat},${lon}`);
}

export async function createAlerts(watchlists: Watchlist[]) {
    const locations = uniqueLocations(watchlists);
    const forecasts = await Promise.all(locations.map(({lat, lon}) => forecast(lat, lon)));
    
    const forecastByLocation = new Map<string, Forecast>();
    for (const [location, forecast] of zip(locations.map(({lat, lon}) => `${lat},${lon}`), forecasts)) {
        if (location && forecast) {
            forecastByLocation.set(location, forecast)
        }
    }

    return watchlists.flatMap(wl => {
        return wl.locations.filter((location) =>  {
            const {lat, lon} = location
            const forecast = forecastByLocation.get(`${lat},${lon}`)??null;
            return isAlert(wl, forecast)
        }).map(location => ({watchlist: wl, locationName: location.name}))
    }).map(({watchlist, locationName}) => new Alert(watchlist, locationName))
}

export function isAlert(watchlist: Watchlist, forecast: Forecast | null): boolean {
    if (!forecast) return false;

    // Sophisticated logic checking if the snow intensity and forecast requirements are met.
    // Could be database calls.
    return true;
}

export function sendAlerts(alerts: Alert[], publish: (arg: string) => void) {
    if (alerts.length === 0) return;

    // Here we cans use Redis pub/sub, kafka, rabbitmq, etc. to fan out notifications
    // via different platforms.
    publish("Yay! It's snowing 🌨️")
    for (const alert of alerts) {
        publish(`❄️\t${alert.watchlist.name} - ${alert.locationName}`);
    }
}
