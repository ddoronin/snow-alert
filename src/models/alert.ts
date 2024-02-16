import { Watchlist } from "./watchlist";

export class Alert {
    constructor(
        public watchlist: Watchlist,
        public locationName: string
    ){}
}
