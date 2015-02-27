/**
 * Retrieves all the rows in the active spreadsheet that contain data and logs the
 * values for each row.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function geocodeRows(sheet) {
  if(typeof(sheet)==='undefined') sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getDataRange();
  var rowData = rows.getValues();
  var numRows = rowData.length;
  var numColumns = rowData[0].length;
  
  //Find the columns for 'Address', 'Latitude', and 'Longitude'
  var addressColumn;
  var latColumn;
  var lngColumn;
  for (var i = 0; i < numColumns; i++) {
    if (rowData[0][i].trim() == 'Address') { addressColumn = i; }
    else if (rowData[0][i].trim() == 'Latitude') { latColumn = i; }
    else if (rowData[0][i].trim() == 'Longitude') { lngColumn = i; }
  }

  //Geocode the address
  for (var i = 1; i < numRows; i++) {    
    if ((rowData[i][latColumn] == "" || rowData[i][latColumn] == "") && rowData[i][addressColumn] != "") {
      Utilities.sleep(50); //Google complains that we're calling the geocode function too quickly, so we'll use a slight delay. Might need to be increased
      var geocodeResponse = Maps.newGeocoder().geocode(rowData[i][addressColumn]);
      var lat = geocodeResponse.results[0].geometry.location.lat;
      var lng = geocodeResponse.results[0].geometry.location.lng;
      
      //Write our lat and lng to their respective cells
      sheet.getRange(i+1,latColumn+1).setValue(lat); //rowData[i][latColumn] = lat;
      sheet.getRange(i+1,lngColumn+1).setValue(lng); //rowData[i][lngColumn] = lng;
    } else {
      Logger.log('Skipped row: %s', i);
    }
  }

};

function geocodeRowsAllSheets() {
  allSheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  for (var i = 0; i < allSheets.length; i++) {
    geocodeRows(allSheets[i]);
  }
};

/**
 * Adds a custom menu to the active spreadsheet, containing a single menu item
 * for invoking the readRows() function specified above.
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function onOpen() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : "Geocode Rows - Current Sheet",
    functionName : "geocodeRows"
  },{
    name : "Geocode Rows - All Sheets",
    functionName : "geocodeRowsAllSheets"
  }];
  spreadsheet.addMenu("Geocoding", entries);
};
