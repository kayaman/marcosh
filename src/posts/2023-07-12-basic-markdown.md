---
title: Basic Markdown
description: Basic Markdown Course Study Notes
date: '2023-07-12'
categories:
  - markdown
  - learning
  - course
  - study-notes
published: true
---

1. Paragraphs

Separate by one empty line.

<md-block>

This is a paragraph.

This is another paragraph.

</md-block>

Put two spaces at the end of a line for a line break.  This breaks.

2. Headings

<md-block>

# Heading h1

## Heading h2

### Heading h3

#### Heading h4

##### Heading h5

###### Heading h6

</md-block>

3. Markdown Flavors

Normal and Extended.

GFM - Github Flavored Markdown

4. Emphasis

<md-block>

_This text_ is italic.
**This text** is bold.
**_This text_** is bold and italic.

</md-block>

5. Strikethrough and Highlight

<md-block>

~~This text~~ is strikethrough.
==This text== is highlight. But it is not supported by GFM.
<mark>highlight</mark> is supported by GFM.

</md-block>

6. Super and Subscript

<md-block>

This is a super^script^. But it is not supported by GFM.
This is a sub~script~. But it is not supported by GFM.
<sup>superscript</sup> is supported by GFM.
<sub>subscript</sub> is supported by GFM.

</md-block>

7. Emojis

<md-block>

:smile: but it is not supported by GFM.
Copy and paste emojis from https://emojipedia.org/ (for instance) is supported by GFM.

</md-block>

8. Code blocks

<md-block>

This in an inline `code`.

You are inside a code block. Use triple backticks to start and end a code block.

</md-block>

9. Links

<md-block>

[label](url) - with label
<url> - without label
url - without label

</md-block>

10. Images

<md-block>

![alt text](url)

</md-block>

11. Blockquotes

<md-block>

> This is a blockquote.
> This is another blockquote.
>
> > This is a nested blockquote.

</md-block>

12. Horizontal Rules

<md-block>

three dashes

---

or three underscores

---

or three asterisks

---

asdf

</md-block>

13. Lists

<md-block>

- Ordered list (number) - any number will do

1. Ordered list
2. Ordered list
3. Nested ordered list
4. Nested ordered list
5. Nested nested ordered list
6. Nested nested ordered list

- Unordered list (asterisk, hyphen, plus sign)

* Unordered list
* Unordered list
  - Nested unordered list
  - Nested unordered list
    - Nested nested unordered list
    - Nested nested unordered list

- Can nest ordered list inside unordered list and vice versa

</md-block>

14. Tables

<md-block>

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

- At least 3 dashes are required for each column. The bars don't have to be aligned.

- Put a colon at the left, right, or both sides of the dashes to align the column.

</md-block>

15. Checklists

<md-block>

- [ ] Unchecked
- [x] Checked

</md-block>

16. Footnotes

<md-block>

This is a footnote[^1].

[^1]: This is a footnote.

</md-block>

17. Abbreviations

<md-block>

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

</md-block>

18. Definition Lists

<md-block>

Term 1
: Definition 1
Term 2
: Definition 2

</md-block>

19. Math

<md-block> 

$E=mc^2$

</md-block>

## References

- [Markdown Spec](https://spec-md.com/)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Basic Markdown](https://www.markdowntutorial.com/)
- [Daring Fireball](https://daringfireball.net/projects/markdown/syntax)

footnote[^1]

---

[^1]: bleh suxx