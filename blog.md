---
layout: blog-list
title: blog
---

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="marginnote">{{ post.date | date: "%B %-d, %Y" }}</span>
  </li>
{% endfor %}
</ul>