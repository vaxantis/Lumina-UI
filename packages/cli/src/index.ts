import { Command } from 'commander'
import { addCommand, listCommand } from './commands/add.js'
import { initCommand } from './commands/init.js'

const program = new Command()

program
  .name('lumina-ui')
  .description('Add Lumina UI components to your project')
  .version('0.1.0')

program
  .command('init')
  .description('Set up design tokens in your project')
  .action(async () => {
    await initCommand()
  })

program
  .command('add <components...>')
  .description('Add one or more components to your project')
  .action(async (components: string[]) => {
    await addCommand(components)
  })

program
  .command('list')
  .description('List all available components')
  .action(async () => {
    await listCommand()
  })

program.parseAsync(process.argv).catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
