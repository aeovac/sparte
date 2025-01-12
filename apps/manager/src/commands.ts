export const commands = [{
    name: 'edit',
    description: 'edit'
}, {
    name: 'create',
    description: 'create'
}] as (import('discordeno').CreateApplicationCommand & { guild_id?: string })[];

