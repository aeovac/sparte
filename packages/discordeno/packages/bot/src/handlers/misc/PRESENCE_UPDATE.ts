import type { DiscordGatewayPayload, DiscordPresenceUpdate } from '../../types/src/index'
import type { Bot } from '../../index.js'

export async function handlePresenceUpdate(bot: Bot, data: DiscordGatewayPayload): Promise<void> {
  if (!bot.events.presenceUpdate) return

  bot.events.presenceUpdate(bot.transformers.presence(bot, data.d as DiscordPresenceUpdate))
}
