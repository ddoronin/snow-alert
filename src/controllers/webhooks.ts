import * as Slack from "../services/slack";

export function handleSlackRequest(req: any, res: any, next: any) {
     // TODO: get info about the slack chennel, group or user id.
    const text = parseText(req.body);
    Slack.sendMessage(`The original request is "${text}".`);
    res.sendStatus(200)
}

export function parseText(s: string): string {
    const [_, text] = /text=([^&]+)/g.exec(s)??[];
    if (text) {
        return decodeURIComponent(text.replace(/\+/g, '%20'));
    }
    return '';
}
