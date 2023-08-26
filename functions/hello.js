// domain/.netlify/functions/hello
// bu api'nin totalde 125k istek hakkı var
/* const items = [
  { id: 1, name: 'Emin' },
  { id: 2, name: 'Suzan' },
  { id: 3, name: 'Ali' },
]
 */
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    // body: JSON.stringify(items),
    body: 'hello world',
  }
}
