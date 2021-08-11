---
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
info: |
  ## Headless, and the Content Authoring Experience

  https://github.com/Decipher/presentation-headless_authoring_experience
theme: ./theme
title: Headless
---

# Headless

And the Content Authoring Experience


---
layout: image-right
image: https://s.gravatar.com/avatar/499831a65f45885a7e1b70ea47c06a58?s=800
src: ./slide-presenter-stuartclark.md
---

---
layout: image-left
image: https://www.drupal.org/files/21784549635_9618b3afe0_z.jpg
---

# Hello!
# We are Guests

- Brian Gilbert
- Jack Taranto
- Lee Rowlands
- Your name here*

<div class="absolute bottom-0 right-10 text-sm">

\* Open Mic and Video encouraged

</div>

---
layout: section
---

# Table of Contents

1. Hello!
2. Traditional CMS
3. Decoupled CMS
4. Headless CMS
5. Serverless CMS

---
image: >-
  https://cdn.dribbble.com/users/9683/screenshots/12232498/media/26803da2823d3f5044b7902ba01dd450.png?compress=1&resize=1200x900
layout: image-right
position: right
---

# Traditional CMS
### = Drupal + L\*MP

<div class="text-sm my-5">

- Content Authoring in Drupal
- Content Rendering in Drupal
- Content Storage in Drupal

</div>

```mermaid {theme: 'neutral', scale: 0.75}
flowchart LR
  subgraph L*MP
    Drupal --> DB
    DB --> Drupal
  end
  Author --> Drupal
  Drupal --> Browser
```

<!--
Brian Gilbert to talk to this?
Paragraphs, Gin, etc.
-->

---
image: https://mateuaguilo.com/assets/images/drupal-embed.png
layout: image-left
position: right
---

# Progressively decoupled
### = Drupal + ??? + L*MP

<div class="text-sm my-5">

- Content Authoring in Drupal
- Content Rendering in Drupal
- Content Storage in Drupal

</div>

```mermaid {theme: 'neutral', scale: 0.75}
flowchart LR
  subgraph L*MP
    Drupal --> DB
    DB --> Drupal
  end
  Author --> Drupal
  Drupal --> Browser
```

<!--
Jack Taranto to demo and talk to pros/cons.
-->

---
image: https://site.druxtjs.org/assets/img/umami.fb2904b6.png
layout: image-right
position: left
---

# Fully decoupled
### = (Drupal + L*MP) + Jamstack

<div class="text-sm my-5">

- Content Authoring in Drupal
- Content Rendering in Jamstack
- Content Storage in Drupal

</div>


```mermaid {theme: 'neutral', scale: 0.6}
flowchart LR
  subgraph L*MP
    Drupal --> DB
    DB --> Drupal
  end
  Author --> Drupal
  Drupal --> Jamstack
  Jamstack --> Browser
```

<!--
Stuart / Lee to talk to.
-->

---
layout: two-cols
---

<img src="https://druxtjs.org/logo.svg" class="w-90" />

:: right ::
# DruxtJS

[DruxtJS.org](https://druxtjs.org)

+ Fully Decoupled
+ Server Side and Client Side Rendering
+ Static Site Generator
+ Vue.js/Nuxt.js

---
image: >-
  https://images.ctfassets.net/vkdbses00qqt/Dz58dBKd9TTfnQaIcau2F/9b7b94b3be605195a65e88633dbe9e79/gatsbyjs.com_Keyvisual_4-2021.jpg?w=960&h=1080&q=80
layout: image-right
---

# Gatsby

[Gatsbyjs.com](https://www.gatsbyjs.com/)

+
+
+
+

---
layout: image-left
---

# Headless
### = Fully Decoupled
### + Decoupled Authoring Experience


<div class="text-sm my-5">

- Content Authoring in Jamstack
- Content Rendering in Jamstack
- Content Storage in Drupal

</div>

```mermaid {theme: 'neutral', scale: 0.75}
flowchart LR
  subgraph L*MP
    Drupal --> DB
    DB --> Drupal
  end
  Author --> Jamstack
  Drupal --> Jamstack
  Jamstack --> Drupal
  Jamstack --> Browser
```


---
layout: two-cols
---

# Serverless
### = (Fully Decoupled + Cloud IDE + Full Static)
### + Static hosting

<div class="text-sm my-5">

- Content Authoring in Jamstack
- Content Rendering in Jamstack
- Content Storage in Drupal via Tome Sync

</div>

:: right ::

```mermaid {theme: 'neutral', scale: 0.7}
flowchart LR
  subgraph GitPod
    subgraph L*MP
      TomeSync --> Drupal
      Drupal --> DB
      Drupal --> TomeSync
      DB --> Drupal
    end
    Jamstack
  end
  Author --> Jamstack
  Drupal --> Jamstack
  Jamstack --> Drupal
  Jamstack -- Deploy Static --> Netlify
  Netlify --> Browser
```
