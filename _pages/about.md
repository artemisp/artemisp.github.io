---
layout: academic
title: Research
permalink: /
description: "Artemis Panagopoulou — Senior Research Scientist at Salesforce Research. Multimodal models, synthetic data, cross-modal reasoning, and evaluation."
---
<section class="hero" aria-labelledby="name">
  <div class="hero-copy">
    <h1 id="name">Artemis Panagopoulou</h1>
    <p class="role"><strong>Senior Research Scientist</strong> · <a href="https://www.salesforce.com/ai-research/">Salesforce Research</a></p>
    <p>I want to bring AI out of the chatbot and into the world. My research spans multimodal models, synthetic data, and evaluation, with a focus on spatial understanding and reasoning across images, video, audio, text, and 3D.</p>
    <p class="bio-history">I received my Ph.D. in Computer and Information Science from the University of Pennsylvania, advised by <a href="https://www.cis.upenn.edu/~myatskar/">Mark Yatskar</a>. Previously, I was a Student Researcher at Google in Augmented Reality and an AI Research Intern at Salesforce Research.</p>
    <div class="contact-links" aria-label="Contact and profiles"><a href="mailto:{{ site.email }}">{% include academic-icon.html name="mail" %}Email</a><a href="https://scholar.google.com/citations?user=3agzZjYAAAAJ&amp;hl=en">{% include academic-icon.html name="scholar" %}Google Scholar</a><a href="https://github.com/artemisp">{% include academic-icon.html name="code" %}GitHub</a><a href="https://www.linkedin.com/in/apanagop/">{% include academic-icon.html name="linkedin" %}LinkedIn</a><a href="{{ '/assets/pdf/Artemis_Panagopoulou_CV.pdf' | relative_url }}">{% include academic-icon.html name="file" %}CV (PDF)</a></div>
  </div>
  <figure class="portrait"><img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" width="186" height="232" alt="Artemis Panagopoulou" fetchpriority="high"><figcaption>Salesforce Research<br>Palo Alto, California</figcaption></figure>
</section>

<div class="themes" aria-label="Research themes">
  <div><h2><a href="#xinstructblip">{% include academic-icon.html name="modalities" %}Multimodal models</a></h2><p>Learning and reasoning across images, video, audio, and 3D.</p></div>
  <div><h2><a href="#maptrace">{% include academic-icon.html name="data" %}Synthetic data</a></h2><p>Generating the data needed to teach models new skills.</p></div>
  <div><h2><a href="#viunit">{% include academic-icon.html name="evaluation" %}Evaluation & reliability</a></h2><p>Understanding model failures and testing the reasoning behind an answer.</p></div>
</div>

<section class="section" id="selected-research" aria-labelledby="selected-heading">
  <div class="section-heading"><h2 id="selected-heading">Selected research</h2><a href="{{ '/publications/' | relative_url }}">All publications</a></div>
  {% for project in site.data.academic.projects %}
  <article class="project" id="{{ project.id }}">
    <a class="project-figure" href="{{ project.links.first.url }}" aria-label="Read {{ project.name }}"><img src="{{ project.image | prepend: '/assets/img/research/' | relative_url }}" alt="{{ project.alt | escape }}" width="520" height="300" loading="lazy"></a>
    <div>
      <div class="project-kicker"><span class="project-name">{{ project.name }}</span><span aria-hidden="true">·</span><span>{{ project.venue }}</span></div>
      <h3><a href="{{ project.links.first.url }}">{{ project.question }}</a></h3>
      <p class="project-summary">{{ project.summary }}</p>
      <p class="project-detail">{{ project.detail }}</p>
      <div class="resource-links" aria-label="{{ project.name }} resources">{% for link in project.links %}<a href="{{ link.url }}">{{ link.label }}</a>{% endfor %}</div>
      {% if project.related %}<p class="project-related" id="{{ project.related.id }}"><span>Related work:</span> <a href="{{ project.related.url }}">{{ project.related.name }}</a> ({{ project.related.venue }}). {{ project.related.summary }} <a href="{{ project.related.project }}">Project & data</a></p>{% endif %}
    </div>
  </article>
  {% endfor %}
</section>

<section class="section" aria-labelledby="news-heading"><div class="section-heading"><h2 id="news-heading">News</h2><a href="{{ '/news/' | relative_url }}">Archive</a></div><ul class="news-list">{% assign news = site.news | sort: "date" | reverse %}{% for item in news limit:5 %}{% include news-item.html item=item %}{% endfor %}</ul></section>
