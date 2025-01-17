import type { DiscordEntitlement, DiscordGatewayPayload } from '../../../../types/src/index'
import type { Bot } from '../../bot.js'

export async function handleEntitlementUpdate(bot: Bot, data: DiscordGatewayPayload): Promise<void> {
  if (!bot.events.entitlementUpdate) return

  const payload = data.d as DiscordEntitlement
  bot.events.entitlementUpdate(bot.transformers.entitlement(bot, payload))
}
