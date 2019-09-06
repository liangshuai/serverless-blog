import client, { q } from './faunadb'

exports.handler = (event, context, callback) => {
    return client.query(q.Paginate(q.Match(q.Ref("indexes/all_posts"))))
        .then(ret => {
            const postRefs = ret.data
            const getAllPostDataQuery = postRefs.map(ref => {
                return q.Get(ref)
            })
            return client.query(getAllPostDataQuery).then(refs => {
                return callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(refs)
                })
            })
        }).catch(error => {
            callback(null, {
                statusCode: 500,
                body: JSON.stringify(error)
            })
        })
}
