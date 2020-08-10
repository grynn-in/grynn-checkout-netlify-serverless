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
  
  ///* construct the fauna query */
  /*
  return client.query(q.Create(q.Ref("classes/todos"), todoItem))
  .then((response) => {
    console.log("success", response)
    // Success! return the response with statusCode 200 
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  }).catch((error) => {
    console.log("error", error)
    // Error! return the error with statusCode 400 
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
  */
  
  return {
    statusCode: 200,
    headers: {"Access-Control-Allow-Origin":"*"},
    body: JSON.stringify({
      rdata: data
    }),
  };
  
  
};
