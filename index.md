---
layout: home
title: Global MBA Program
---

<div class="hero-section">
  <div class="hero-content">
    <h1>Tunghai University Global MBA</h1>
    <p class="tagline">Cultivating Future Business Leaders in Asia's Dynamic Market</p>
    <div class="cta-buttons">
      <a href="/program" class="btn btn-primary">Explore Our Program</a>
      <a href="/admissions" class="btn btn-secondary">Apply Now</a>
    </div>
  </div>
</div>

## Why Choose Tunghai Global MBA?

<div class="features-grid">
  <div class="feature-card">
    <h3>🌏 Global Perspective</h3>
    <p>International faculty and diverse student body from across Asia and beyond</p>
  </div>
  <div class="feature-card">
    <h3>💼 Industry Connections</h3>
    <p>Strong partnerships with leading companies in Taiwan and the region</p>
  </div>
  <div class="feature-card">
    <h3>🎓 Academic Excellence</h3>
    <p>AACSB-accredited program with world-class curriculum</p>
  </div>
  <div class="feature-card">
    <h3>🚀 Career Growth</h3>
    <p>Comprehensive career services and alumni network support</p>
  </div>
</div>

## Our Class Profile

<div class="class-profile">
  <div class="profile-intro">
    <p>Our diverse student body brings together professionals from various industries and backgrounds, creating a rich learning environment.</p>
  </div>

  <div class="visualization-container">
    <div class="chart-section">
      <h3>Industry Background</h3>
      <canvas id="industryChart"></canvas>
    </div>

    <div class="chart-section">
      <h3>Geographic Distribution</h3>
      <canvas id="geographyChart"></canvas>
    </div>

    <div class="chart-section">
      <h3>Work Experience</h3>
      <canvas id="experienceChart"></canvas>
    </div>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-number">45</div>
      <div class="stat-label">Students</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">12</div>
      <div class="stat-label">Countries</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">5.2</div>
      <div class="stat-label">Avg. Years Experience</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">65%</div>
      <div class="stat-label">International Students</div>
    </div>
  </div>
</div>

## Latest News

<div class="news-section">
  {% assign recent_news = site.news | where: "published", true | sort: 'date' | reverse | limit: 3 %}
  {% if recent_news.size > 0 %}
    <div class="news-grid">
      {% for post in recent_news %}
        <article class="news-card">
          {% if post.image %}
            <img src="{{ post.image }}" alt="{{ post.title }}" class="news-image">
          {% endif %}
          <div class="news-content">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            {% if post.excerpt %}
              <p>{{ post.excerpt }}</p>
            {% endif %}
            <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
          </div>
        </article>
      {% endfor %}
    </div>
    <div class="news-archive-link">
      <a href="/news" class="btn btn-outline">View All News</a>
    </div>
  {% else %}
    <p>No news available at the moment. Check back soon!</p>
  {% endif %}
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script src="/assets/js/charts.js"></script>
