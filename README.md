# Mingsheng Tian — Homepage

A plain HTML/CSS academic homepage served by GitHub Pages at https://mingshengtian.github.io/.
No build step and no web fonts, so it loads quickly everywhere (including mainland China).

## Files

- `index.html`: homepage (About, Research with selected papers, Education, Honors).
- `publications.html`: full publication list, grouped by year.
- `assets/css/style.css`: all styling. The one accent colour is `--navy`.
- `assets/js/site.js`: the English / 中文 toggle.

## Editing bilingual text

Every piece of text that changes with the language comes as a pair:

```html
<span class="en">Education</span><span class="zh">教育经历</span>
```

Edit both halves. Text without `en`/`zh` classes (for example, paper titles and authors) appears in both languages.

Visitors' language choice is remembered in their browser. Links can force a language with `?lang=zh` or `?lang=en`
(for example, https://mingshengtian.github.io/?lang=zh).

## Adding a paper

Copy an existing `<li class="pub">` block:

```html
<li class="pub">
  <a class="pub-title" href="https://doi.org/...">Paper Title</a>
  <p class="pub-authors"><b>M. Tian</b><sup>*</sup>, A. Author<sup>*</sup>, and B. Author</p>
  <p class="pub-venue"><span class="journal">Physical Review Letters</span> <span class="num"><b>135</b>, 000000 (2026)</span><span class="pub-extra"><a href="https://arxiv.org/abs/XXXX.XXXXX">arXiv</a></span></p>
</li>
```

`<sup>*</sup>` marks equal contribution. After changing the CSS or JS, bump the `?v=` number where it is linked in both HTML files
so browsers pick up the new version.
