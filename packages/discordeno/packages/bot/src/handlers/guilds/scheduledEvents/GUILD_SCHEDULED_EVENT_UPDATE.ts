import type { DiscordGatewayPayload, DiscordScheduledEvent } from '../../types/src/index'
import type { Bot } from '../../../bot.js'

export async function handleGuildScheduledEventUpdate(bot: Bot, data: DiscordGatewayPayload): Promise<void> {
  if (!bot.events.scheduledEventUpdate) return

  const payload = data.d as DiscordScheduledEvent
  bot.events.scheduledEventUpdate(bot.transformers.scheduledEvent(bot, payload))
}
