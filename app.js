//Push to a Google sheet using an AppleScript web app

// Google Sheets App Script web app URL:
const url =
	'https://script.google.com/macros/s/{googleSheetWEBAppID}/exec';

let logs = []; // Array to store log

function sendToGoogleSheet(LogEntry) {
	const urlWithParam = `${url}?log=${LogEntry}`;
	const formData = new FormData(); // without this object it will not work
	formData.append('key1', 'Value1');
	fetch(urlWithParam, {
		method: 'POST',
		body: formData,
	})
		.then((res) => res.json())
		.then((data) => {
			console.log('response from google form: ', data);
		});
}
