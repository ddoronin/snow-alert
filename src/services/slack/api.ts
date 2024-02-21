const webhookKey = process.env.SLACK_WEBHOOK_KEY

/**
 * Send a message using Slack:
 * https://galactic-zodiac-667774.postman.co/workspace/Dmitry-Doronin---Public-Workspa~a8ac4a7d-37d7-4f33-8a00-287548780401/request/33232-6c18db32-1366-4786-acec-24cb15b67b99
 */
export async function sendMessage(text: string) {
    return await fetch(`https://hooks.slack.com/services/${webhookKey}`, {
        method: 'POST',
        body: JSON.stringify({
            "text": text
        })
    })
}
