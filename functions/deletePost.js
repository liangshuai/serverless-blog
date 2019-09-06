import client, { q } from './faunadb'

exports.handler = (event, context, callback) => {
    const id = event.path.match(/([^\/]*)\/*$/)[0]

    return client.query(q.Delete(q.Ref(q.Collection("posts"), id)))
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
