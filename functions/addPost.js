import client, { q } from './faunadb'

exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body)

    const post = {
        data
    }

    return client.query(q.Create(q.Collection('posts'), post))
        .then(ret => {
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(ret)
        })
    }).catch(error => {
        callback(null, {
            statusCode: 500,
            body: JSON.stringify(error)
        })
    })
}
