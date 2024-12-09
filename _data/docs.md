## _data
This folder contains some of the most essential files for configuring your site, including your collections data and the configuration for the map and data tables. This document walks you through what each file does and how to edit things in each file.

### configmap.csv
This file just sets the values for the information that appears on an item popup on the map. If you don't want your items to have popup information or you don't need the map, you can delete this.

If you want to change what information appears in the popup, under **field** write the name of a metadata field that's in your collection CSV file. Under **display_name**, type the text you'd like the value to display after. By default, text includes colons, so you don't need to add these in the display name. Under **search**, you can type either true or false to determine whether you want those values to be searchable through the map search bar.
