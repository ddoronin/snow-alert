type Hour = number
type InchesPerHour = number

/**
 * 
 * Watchlist is a core entity that incapsulates a list of locations
 * and criterias for triggering an alert.
 * 
 * Example of a criteria is snowing duration and intencity.
 */
export class Watchlist {
    public name: string = 'N/A';

    public locations: {name: string, lat: number, lon: number}[] = [];

    // Default snowing duration is 3 hours.
    public duration: Hour = 3

    public snowIntencity: InchesPerHour = 1

    static async findAll() {
        return require('./watchlists.json') as Watchlist[];
    }
}
