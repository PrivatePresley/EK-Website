---
title: Emerald (cradled in the waves)
---

This is my second work of art.

{% assign previousPost = collections.works | getPreviousCollectionItem %}
{% assign nextPost = collections.works | getNextCollectionItem %}
Previous: {{previousPost.url}}
Next: {{nextPost.url}}
