import type { DiscordGuildWidgetSettings } from '../../types/src/index'
import type { Bot, GuildWidgetSettings } from '../index.js'

export function transformWidgetSettings(bot: Bot, payload: DiscordGuildWidgetSettings): GuildWidgetSettings {
  const widget = {
    enabled: payload.enabled,
    channelId: payload.channel_id ?? undefined,
  }

  return bot.transformers.customizers.widgetSettings(bot, payload, widget)
}
