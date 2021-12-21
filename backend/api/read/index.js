var xlsx = require('xlsx');
var multipart = require('parse-multipart-data');

module.exports.handler = async function(event, context) {
    const file = xlsx.read(event.body);
    console.log('event.body', event.body);
    console.log('event.header', event.headers);
    // const body = Buffer.from(event.body, 'base64')
    const body = Buffer.from(event.body.trim().replace(/\n/g, '\r\n'))
    console.log('body', body);

    const parts = multipart.parse(body, multipart.getBoundary(event.headers["Content-Type"]));
    console.log('parts', parts);
    console.log('parts.length', parts.length);
    console.log('boundary', event.headers["Content-Type"].split('=')[1]);

    var data = [];
    var sheets = file.SheetNames;

    for (let i = 0; i < sheets.length; i++) {
        var getData = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
        getData.forEach((res) => {
            data.push(res)
        });
    }

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data),
    };
}