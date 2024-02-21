import cron from 'node-cron'
import { processAllWatchlists } from './jobs';

// Every hour:
cron.schedule('0 * * * *', processAllWatchlists)
