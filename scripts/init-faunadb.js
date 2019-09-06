const faunadb = require('faunadb')
const chalk = require('chalk')
const q = faunadb.query

console.log(chalk.cyan('Init your faunadb database'))

if (!process.env.FAUNADB_SECRET) {
    console.log(chalk.yellow('Required FAUNADB_SERVER_SECRET enviroment variable not found.'))
    process.exit(1)
}

function initFaunaDB () {
    const client = new faunadb.Client({
        secret: process.env.FAUNADB_SECRET
    })

    client.query(q.CreateCollection({ name: 'posts' }))

    console.log(chalk.cyan('Your collections have been initilized successfully'))
    process.exit(0)
}

initFaunaDB()


