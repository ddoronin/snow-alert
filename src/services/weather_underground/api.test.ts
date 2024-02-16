import { forecast, apiKey } from "./api"; './api';

global.fetch = jest.fn(async () => ({json: async () => {}}) as any);

describe("services/weather_underground/api", () => {
    describe("forecast", () => {
        it("should be called with lat and lon encoded in the query string", async () => {
            const lat = 123
            const lon = 456
            await forecast(lat, lon)
            expect(fetch).toHaveBeenCalledWith(`https://api.tomorrow.io/v4/weather/forecast?location=123%2C456&apikey=${apiKey}`);
        });
    })
})
