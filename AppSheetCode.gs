// This code takes in a event parameter .log or whatever you want to call it.   

// deploy as a web app (Excute as You (youremail@gmail.com)) Who has access (Anyone) or choose your security model.

const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SheetName');

function doPost(e) {
  const log = e.parameter.log;
  ws.insertRowAfter(1); // This inserts a row after the first row position
  ws.getRange(2, 1).setValue(log);
  return ContentService.createTextOutput(200)
}
