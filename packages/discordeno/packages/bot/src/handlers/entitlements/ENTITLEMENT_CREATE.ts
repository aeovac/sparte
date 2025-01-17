import type { DiscordEntitlement, DiscordGatewayPayload } from '../../../../types/src/index'
import type { Bot } from '../../bot.js'

export async function handleEntitlementCreate(bot: Bot, data: DiscordGatewayPayload): Promise<void> {
  if (!bot.events.entitlementCreate) return

  const payload = data.d as DiscordEntitlement
  bot.events.entitlementCreate(bot.transformers.entitlement(bot, payload))
}
