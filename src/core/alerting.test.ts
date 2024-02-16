import { Alert } from '../models/alert';
import { Watchlist } from '../models/watchlist';
import { isAlert, sendAlerts, uniqueLocations } from './alerting';

describe("core/alerting", () => {
    describe('uniqueLocations()', () => {
        it("should return unique locations", () => {
            const wl = new Watchlist();
            wl.locations = [{
                name: "A",
                lat: 1,
                lon: 2
            },{
                name: "B",
                lat: 1,
                lon: 3
            }, {
                name: "C",
                lat: 1,
                lon: 2
            }]
            
            expect(uniqueLocations([wl])).toStrictEqual([{
                name: "A",
                lat: 1,
                lon: 2
            },{
                name: "B",
                lat: 1,
                lon: 3
            }])
        })
    })

    describe('isAlert', () => {
        it("should return false if there is no forecast for a given location", () => {
            expect(isAlert(new Watchlist(), null)).toBe(false)
        })

        it("should return true if there is any forecast for a given location", () => {
            expect(isAlert(new Watchlist(), {
                timelines: {
                    daily: [],
                    hourly: []
                }
            })).toBe(true)
        })
    });

    describe('sendAlerts', () => {
        it("should publish alerts", () => {
            const publish = jest.fn();
            sendAlerts([new Alert(new Watchlist(), "test")], publish)
            expect(publish).toHaveBeenCalledTimes(2);
        })
    });
})
