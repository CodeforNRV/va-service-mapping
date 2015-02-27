# VA Service Mapping

A simple web page that uses data about VA Service locations to create a map with a table of contents.

### [Data](https://docs.google.com/spreadsheets/d/1w8D1D_zCisaayQ5629nY7spJmzntJ5nRZKWD0x2kY44/edit?usp=sharing)
### [Demo](http://codefornrv.github.io/va-service-mapping/)
### [Live Site](http://www.vaservice.org/go/volunteer/volunteer_map/map/)

The data set is curated by the [Virginia Department of Social Services](www.vaservice.org) and is read-only for the public.

This site was created by volunteers at [Code for New River Valley](http://codefornrv.org). Pull requests are welcomed, but any changes must utimately be approved and published by VDSS.

## Editing the Data
Users authorized by VDSS may edit the data in the Google Spreadsheet. Changes to the data will be reflected on the map instantly. Changes cannot be undone, so please take care when editing the data. We recommend that editors download a local copy of the spreadsheet for backup.

### Sheets
The spreadsheet contains a number of sheets, accessible through the tabs at the bottom of the window. The order and title of these sheets determines how the Table of Contents on the website is created.

### Required Columns
Each sheet has four required columns: `Program`, `Address`, `Latitude`, and `Longitude`. The `Program` column is used to title the info window that pops up on the map when an icon is clicked. The `Address` column must contain the full street address, including city, state, and zip code. The `Latitude` and `Longitude` columns must be created manually (with the headings spelled correctly), but those cells in each row will be filled in automatically.

### Optional Columns
Any other column will be used to populate the info window that appears when an icon is clicked on the map.

### Adding Rows or Changing Addresses of Existing Rows
When a new row is added or an address is changed, make sure a cells for `Latitude` and `Longitude` are blank. Once the address is correct, click `Geocoding` in the menu at the top, then click `Geocode Rows - Current Sheet`. The `Latitude` and `Longitude` fields should be filled in automatically.

![](http://i.imgur.com/O72HjkQ.png)
![](http://i.imgur.com/tknMjpC.png)
![](http://i.imgur.com/x6ZDtJ4.png)
