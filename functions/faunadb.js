import faunadb from 'faunadb'

export const q = faunadb.query
const client = new faunadb.Client({
      secret: process.env.FAUNADB_SECRET
})

export default client
