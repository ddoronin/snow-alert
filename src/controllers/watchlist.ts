import { Watchlist } from "../models/watchlist";

export async function showWatchlists(req: any, res: any) {
    const watchlists = await Watchlist.findAll();
    return res.send(watchlists);
}

export async function createWatchlist(req: any, res: any) {
    throw new Error("Not implemented")
}

export async function updateWatchlist(req: any, res: any) {
    throw new Error("Not implemented")
}

export async function deleteWatchlist(req: any, res: any) {
    throw new Error("Not implemented")
}
