const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", () => {
  const mainWindow = new BrowserWindow();
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  mainWindow.webContents.openDevTools();

});

// module.exports = {
//     init: function(e) {
//         var xlsx = require('xlsx');
//         var file = xlsx.readFile('./text.xlsx');
//         var data = [];
//         var sheets = file.SheetNames;

//         for (let i = 0; i < sheets.length; i++) {
//             var getData = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
//             getData.forEach((res) => {
//                 data.push(res)
//             });
//         }

//         console.log('e', e);
//         console.log('e', process);
//         // document.querySelector('#excell-file').addEventListener('change', this.onFileInput, false);

//         console.log('data', data)
//     },
//     onFileInput: function(e) {
//         var files = e.target.files, f = files[0];
//         console.log('files', files);
//         var reader = new FileReader();

//         reader.onload = function(e) {
//             var data = new Uint8Array(e.target.result);
//             var workbook = XLSX.read(data, {type: 'array'});
//             console.log('workbook', workbook);
//         };
//         reader.readAsArrayBuffer(f);
//     },
// }
