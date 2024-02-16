import {Alert} from './alert';
import { Watchlist } from './watchlist';

describe("models/alert", () => {
    describe("Alert", () => {
        it("should create an instance of an alert", () => {
            const wl = new Watchlist();
            const alert = new Alert(wl, "New York");
            expect(alert).toBeDefined();
            expect(alert.watchlist).toBe(wl);
            expect(alert.locationName).toBe("New York");
        })
    })
});
