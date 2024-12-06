---
layout: page
title: Browse the Collection
gallery: true
permalink: /collection/
fields: tTags;worktype;location
---

This site's collection comprises a set of objects, each of which is represented by one or more images. The collection items are from Cornell University's Rare and Manuscript Collections.

{% include gallery.html collection='medievalfragments' facet_by='label|originalwork|worktype|' num_column=4 %}

## Locations
{% include cloud.html fields="location" min=2 %}
{% include tag-carousel.html %}

## Subjects
{% include cloud.html fields="subject;worktype" min=2 %}
{% include tag-carousel.html field="location" %}
