import express from "express";
import { createWatchlist, deleteWatchlist, showWatchlists, updateWatchlist } from "../controllers/watchlist";

const app = express();

app.get("/health", async (req, res, next) => res.sendStatus(200));

app.get("/watchlists", async (req, res, next) => await showWatchlists(req, res));
app.post("/watchlists", async (req, res, next) => await createWatchlist(req, res));
app.put("/watchlists/:id", async (req, res, next) => await updateWatchlist(req, res));
app.delete("/watchlists/:id", async (req, res, next) => await deleteWatchlist(req, res));

// TODO: read from env variables.
app.listen(3000);