---
title: The Infinite Journey Gallery
layout: layout.njk
---

<h1 class="site-title">{{ title }}</h1>

<div class="gallery-grid">
  {% for page in collections.infiniteJourneyGallery %}
    <a href="{{ page.url }}">
      <img src="{{ page.data.thumbnail }}" alt="{{ page.data.title }}">
    </a>
  {% endfor %}
</div>

