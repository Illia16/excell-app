module.exports = {
    init: function(e) {
		console.log('e', e.target.files);
		let invalidFile = false;
		const filename = e.target.files[0];
		const isExcell = ['xlsx', 'xls', 'csv'].includes(filename.name.split('.').at(-1));
		if (!isExcell) {
			invalidFile = true
			return {invalidFile:invalidFile, data:null};
		}

					// // console.log('isExcell', isExcell);
					// console.log('filename', filename);

					// var reader = new FileReader();
					// reader.onloadend = function() {
					// 	console.log('this', this.result);
					// }

					// // reader.readAsText(filename);
					// reader.readAsArrayBuffer(filename);

		this.readExcellFile(filename);
    },
	readExcellFile: function(data) {
		console.log('data', data);
		var xlsx = require('xlsx');
		console.log('xlsx', xlsx);
        var file = xlsx.readFile('../text.xlsx');
		console.log('file', file);

        // var data = [];
        // var sheets = file.SheetNames;

        // for (let i = 0; i < sheets.length; i++) {
        //     var getData = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
        //     getData.forEach((res) => {
        //         data.push(res)
        //     });
        // }

        // console.log('e', e);
        // console.log('e', process);
        // document.querySelector('#excell-file').addEventListener('change', this.onFileInput, false);

        // console.log('data', data)
	},
    onFileInput: function(e) {
        var files = e.target.files, f = files[0];
        console.log('files', files);
        // var reader = new FileReader();

        // reader.onload = function(e) {
        //     var data = new Uint8Array(e.target.result);
        //     var workbook = XLSX.read(data, {type: 'array'});
        //     console.log('workbook', workbook);
        // };
        // reader.readAsArrayBuffer(f);
    },
}


// var readExcellFile = function(data) {
//     var xlsx = require('xlsx');
//     console.log('this', this);
//     console.log('__dirname', __dirname);
//     const fileLocation =  __dirname.replace('src', 'test.xlsx');
//     var file = xlsx.readFile(fileLocation);
//     console.log('file', file);

//     var data = [];
//     var sheets = file.SheetNames;
//     console.log('sheets', sheets);
//     console.log('xlsx.utils', xlsx.utils);

//     for (let i = 0; i < sheets.length; i++) {
//         var getData = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
//         getData.forEach((res) => {
//             data.push(res)
//         });
//     }

//     console.log('data', data)
// };

// readExcellFile();