import {Watchlist} from './watchlist';

describe("models/watchlist", () => {
    describe("Watchlist", () => {
        it("should create an instance of the watchlist with N/A name by default", () => {
            const wl = new Watchlist();
            expect(wl.name).toBe('N/A')
        })

        it("should create an instance of the watchlist with duration 3 hours by default", () => {
            const wl = new Watchlist();
            expect(wl.duration).toBe(3)
        })

        it("should create an instance of the watchlist with snow intencity 1 inch/hour by default", () => {
            const wl = new Watchlist();
            expect(wl.snowIntencity).toBe(1)
        })
    })
    
    describe("Watchlist.findAll()", () => {
        it("should return 2 watchlists", async () => {
            const wls = await Watchlist.findAll();
            expect(wls.length).toBe(2)
        })
    })
});
