---
layout: page
title: Articles
categories: [bb]
permalink: /articles/
---

{% for tag in site.tags %}
{% assign t = tag | first %}
{% assign posts = tag | last %}

<span id="{{ t | downcase }}" class="tag-title">{{ t }}</span>
<ul id="articles">{% for post in posts %}
  {% if post.tags contains t %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a><br />
    <span class="date">{{ post.date | date: "%B %-d, %Y" }} <span class="olddot">•</span> {{ post.tags | reverse | pop | join: ', ' }}</span>
  </li>
  {% endif %}
{% endfor %}</ul>
{% endfor %}
