---
title: 'Test Cards'
layout: page
permalink: /cards/
---
* { box-sizing: border-box; }

.container { 
  display: flex; 
  flex-flow: row wrap;
}

.card-wrap {
  flex: 0 0 33.333%;
  display: flex;
  padding: 10px; /* gutter width */
}

.card {
  box-shadow: 0 0 4px rgba(0,0,0,0.4);
  flex: 0 0 100%;
}
</div>

<div class="container">
<div class="card-wrap">
  <div class="card">Card 1</div>
</div>
<div class="card-wrap">
  <div class="card"><br>Card 2</div>
</div>
<div class="card-wrap">
  <div class="card"><br><br><br>Card 3</div>
</div>
</div>
