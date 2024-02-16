import cron from 'node-cron'
import { processAllWatchlists } from './jobs';

// Every hour:
// 0 * * * *
cron.schedule('* * * * *', processAllWatchlists)
