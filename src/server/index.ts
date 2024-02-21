import express from "express";
import bodyParser from 'body-parser';
import { createWatchlist, deleteWatchlist, showWatchlists, updateWatchlist } from "../controllers/watchlist";
import { handleSlackRequest } from "../controllers/webhooks";

const app = express();

// Healthcheck is needed for the k8 deployment.
app.get("/health", async (req, res, next) => res.sendStatus(200));

// Handles incoming requests.
app.post('/webhooks/slack', bodyParser.text({type: '*/*'}), async (req, res, next) => handleSlackRequest(req, res, next))

// CRUD user watchlists.
app.get("/watchlists", async (req, res, next) => await showWatchlists(req, res));
app.post("/watchlists", async (req, res, next) => await createWatchlist(req, res));
app.put("/watchlists/:id", async (req, res, next) => await updateWatchlist(req, res));
app.delete("/watchlists/:id", async (req, res, next) => await deleteWatchlist(req, res));

app.listen(process.env.PORT || 3000);
