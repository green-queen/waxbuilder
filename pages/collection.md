---
layout: page
title: Browse the Collection
gallery: true
permalink: /collection/
---
This site's collection comprises a set of objects, each of which is represented by one or more images. The collection items are from Cornell University's Rare and Manuscript Collections.

{% include gallery.html collection='medievalfragments' facet_by='label|originalwork|worktype|' num_column=4 %}

## Subjects
{% include tag-carousel.html fields="worktype" %}
{% include tag-carousel.html fields="tTags" %}

## Locations
{% include tag-carousel.html fields="location" %}
