var xlsx = require('xlsx');
const XlsxPopulate = require('xlsx-populate');

module.exports.handler = async function() {
    const filePath = __dirname.replace('api/read', 'files/test.xlsx')

    try {
        const data = await xlsx.readFile(filePath);
        var sheets = data.SheetNames;

        const res = []
        await XlsxPopulate.fromFileAsync(filePath)
        .then(workbook => {
            for (let i = 0; i < sheets.length; i++) {
                res.push({year: sheets[i], data: workbook.sheet(sheets[i]).usedRange().value()})
            };
        });

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(res),
        };

       } catch(err) {
        console.log('err', err);
        process.exit(1);
       }
}