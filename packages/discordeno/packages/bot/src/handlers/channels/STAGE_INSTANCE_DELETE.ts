import type { DiscordGatewayPayload, DiscordStageInstance } from '../../../../types/src/index'
import type { Bot } from '../../bot.js'

export async function handleStageInstanceDelete(bot: Bot, data: DiscordGatewayPayload): Promise<void> {
  if (!bot.events.stageInstanceDelete) return

  const payload = data.d as DiscordStageInstance

  bot.events.stageInstanceDelete({
    id: bot.transformers.snowflake(payload.id),
    guildId: bot.transformers.snowflake(payload.guild_id),
    channelId: bot.transformers.snowflake(payload.channel_id),
    topic: payload.topic,
  })
}
