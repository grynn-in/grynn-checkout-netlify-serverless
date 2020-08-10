/* code from functions/todos-create.js */
const faunadb = require('faunadb')
const q = faunadb.query


exports.handler = async (event, context, callback) => { 
  
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  }) 
  
  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body);
  
  console.log("data: ", data);
  
  console.log("type: ", typeof(data) );
  
  var queryData = data["create"];
  
  console.log( "type: ", typeof(queryData), queryData );
  
  
  return client.query(
    q.Create(
      q.Collection('grynntable'),
      { data: queryData },
    )
  )
  .then((response) => {
      console.log('success', response)
      return {
        headers: {"Access-Control-Allow-Origin":"*"},
        statusCode: 200,
        body: JSON.stringify(response)
      }
    }).catch((error) => {
      console.log('error', error)
      return {
        headers: {"Access-Control-Allow-Origin":"*"},
        statusCode: 400,
        body: JSON.stringify(error)
      }
    });
  
};
