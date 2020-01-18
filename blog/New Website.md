---
title: New Website
date: 2020-01-13
description:
    I just launched my new website.
layout: Post
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---

# New Website

I just launched my new website. It's still a work in progress, but it's much nicer to work with than the older version. It uses [Vuepress](https://vuepress.vuejs.org) to manage its content and theme.

I can use code blocks with syntax highlighting:

```js
let testFunction = (name) => {
    window.alert(name)
    window.console.info(name)
}
```

I can also type math with TeX-style syntax, which gets converted into inline math like $\rho=\frac{m}{l*w*h}$ or block math like this:

$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$