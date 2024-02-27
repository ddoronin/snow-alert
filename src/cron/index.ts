import cron from 'node-cron'
import { processAllWatchlists } from './jobs';

// Every minute
cron.schedule('* * * * *', processAllWatchlists)
