import { parseText } from "./webhooks"

describe("controllers/webhooks", () => {
    describe("parseText", () => {
        it("should parse text from a slack message", () => {
            const text = parseText("token=UuXTuGIhGhEpwJn8ssAKH5LV&team_id=T06LKMSB2D6&team_domain=snow-alert&channel_id=C06KQ9BFFM4&channel_name=general&user_id=U06KZC3SSS0&user_name=doronindm&command=%2Fwatch-snow-alert&text=asdasd+sa&api_app_id=A06KGBTU8H5&is_enterprise_install=false&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FT06LKMSB2D6%2F6676244238805%2ForJjIAHBxDT92XIYkO83guxI&trigger_id=6679054438931.6699740376448.f8f9403021c70d42d30b4edd679d1dc0");
            expect(text).toBe("asdasd sa")
        })
    })
})
