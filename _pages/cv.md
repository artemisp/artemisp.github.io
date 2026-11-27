---
layout: academic
title: CV
permalink: /cv/
description: "Research experience, education, awards, talks, service, and patent applications of Artemis Panagopoulou."
---
<header class="page-header"><h1>Curriculum vitae</h1><div class="page-links"><a href="{{ '/assets/pdf/Artemis_Panagopoulou_CV.pdf' | relative_url }}">Download CV (PDF)</a><a href="{{ '/publications/' | relative_url }}">Publications</a></div></header>
{% for section in site.data.cv %}<section class="cv-section" id="{{ section.title | slugify }}"><h2>{{ section.title }}</h2>
{% if section.type == 'time_table' %}{% for item in section.contents %}{% if item.items %}<ul class="cv-awards">{% for text in item.items %}<li><time>{{ item.year }}</time><span>{{ text }}</span></li>{% endfor %}</ul>{% else %}<article class="timeline-entry"><div class="timeline-header"><h3>{{ item.title }}</h3><span class="timeline-year">{{ item.year }}</span></div><div class="timeline-institution">{{ item.institution }}</div>{% if item.description %}<ul>{% for description in item.description %}<li>{{ description }}</li>{% endfor %}</ul>{% endif %}</article>{% endif %}{% endfor %}
{% else %}<ul class="plain-list">{% for item in section.contents %}<li>{{ item }}</li>{% endfor %}</ul>{% endif %}</section>{% endfor %}
