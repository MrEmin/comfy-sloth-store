const dotenv = require('dotenv')
dotenv.config()

const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN_ID })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async (event, context, cb) => {
  try {
    // default olarak 20 ürün getiriyor, maxRecords: 200 diyerek 200 ürüne kadar getirebiliriz. Zaten max değerde 200.
    const response = await airtable.list({ maxRecords: 200 })
    console.log('######')
    console.log(response)
    console.log('######')
    return {
      statusCode: 200,
      body: 'products route',
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: 'There was an error',
    }
  }
}
