---
layout: page
title: News & Events
permalink: /news/
---

# News & Events

Stay updated with the latest news, events, and announcements from Tunghai Global MBA.

<div class="news-archive">
  {% assign all_news = site.news | where: "published", true | sort: 'date' | reverse %}

  {% if all_news.size > 0 %}
    {% for post in all_news %}
      <article class="news-item">
        <div class="news-item-date">
          <time datetime="{{ post.date | date_to_xmlschema }}">
            <span class="day">{{ post.date | date: "%d" }}</span>
            <span class="month">{{ post.date | date: "%b" }}</span>
            <span class="year">{{ post.date | date: "%Y" }}</span>
          </time>
        </div>
        <div class="news-item-content">
          {% if post.image %}
            <div class="news-item-image">
              <img src="{{ post.image }}" alt="{{ post.title }}">
            </div>
          {% endif %}
          <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          {% if post.excerpt %}
            <p class="excerpt">{{ post.excerpt }}</p>
          {% endif %}
          <a href="{{ post.url | relative_url }}" class="read-more">Read Full Article →</a>
        </div>
      </article>
    {% endfor %}
  {% else %}
    <div class="no-news">
      <p>No news articles available at the moment. Check back soon for updates!</p>
    </div>
  {% endif %}
</div>
