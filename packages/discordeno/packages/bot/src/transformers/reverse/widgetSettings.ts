import type { DiscordGuildWidgetSettings } from '../../types/src/index'
import type { Bot, GuildWidgetSettings } from '../../index.js'

export function transformWidgetSettingsToDiscordWidgetSettings(_bot: Bot, payload: GuildWidgetSettings): DiscordGuildWidgetSettings {
  return {
    enabled: payload.enabled,
    channel_id: payload.channelId ?? null,
  }
}
