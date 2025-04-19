---
title: The Rings of Chaos Gallery
layout: layout.njk
---

<h1 class="site-title">{{ title }}</h1>

<div class="gallery-grid">
  {% for page in collections.trocGallery %}
    <a href="{{ page.url }}">
      <img src="{{ page.data.thumbnail }}" alt="{{ page.data.title }}">
    </a>
  {% endfor %}
</div>


