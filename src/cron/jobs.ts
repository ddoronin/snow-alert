import { createAlerts, sendAlerts } from '../core/alerting';
import { Watchlist } from '../models/watchlist';
import * as Slack from '../services/slack';

export async function processAllWatchlists() {
    const allWatchlists = await Watchlist.findAll();
    const alerts = await createAlerts(allWatchlists);
    sendAlerts(alerts, Slack.sendMessage);
}
