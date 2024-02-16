import { Watchlist } from "../models/watchlist";
import { processAllWatchlists } from "./jobs";

jest.mock('../models/watchlist')
jest.mock('../core/alerting')
global.fetch = jest.fn(async () => ({json: async () => []}) as any);

describe('cron/jobs', () => {
    describe('processAllWatchlists', () => {
        it("should query all watchlists and create alerts", () => {
            (Watchlist as jest.Mocked<typeof Watchlist>).findAll.mockImplementation(async () => [])

            processAllWatchlists()
            expect(Watchlist.findAll).toHaveBeenCalled()
        });
    })
});
