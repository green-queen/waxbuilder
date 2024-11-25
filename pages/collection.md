---
layout: page
title: Browse the Collection
gallery: true
permalink: /collection/
---

This site's collection comprises a set of objects, each of which is represented by one or more images. The collection items are from Cornell University's Rare and Manuscript Collections.

{% include gallery.html collection='medievalfragments' facet_by='label|_tags|originalwork|bibliography' num_column=4 %}

## Locations
{% include cloud.html fields="location" min=1 %}

## Subjects
{% include cloud.html fields="tTags;artist" min=1 %}
