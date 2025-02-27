## _data
This folder contains some of the most essential files for configuring your site, including your collections data and the configuration for the map and data tables. This document walks you through what each file does and how to edit things in each file.

### config-map.csv
This file sets the values for the information that appears on an item popup on the map. If you don't want your items to have popup information or you don't need the map, you can delete this.

If you want to change what information appears in the popup, under **field** write the name of a metadata field that's in your collection CSV file. Under **display_name**, type the text you'd like the value to display after. By default, text includes colons, so you don't need to add these in the display name. Under **search**, you can type either true or false to determine whether you want those values to be searchable through the map search bar.

### data-settings.yml
The file determines the values that will populate the data table and the data downloads. See the comment at the top of this file for instructions/help.

### map-settings.yml
This file determines the basic settings for the map, like zoom level, center point, etc. You can leave these field blank to use the default setting in maps-js.html and maps.html, or you can change the values to adjust your map's display. I don't recommend changing the navbar or Bootswatch settings, but feel free to do so if you have the know-how. These themes only affect how the map's navigation elements look.

You should also upload two copies of your CSV of collection metadata: one, an original copy that you will never edit; two, a copy that will be the main editing/working copy of your metadata. If you need help setting up a CSV, please see [Minicomp's Wax documentation](https://minicomp.github.io/wiki/wax/preparing-your-collection-data/metadata/).

