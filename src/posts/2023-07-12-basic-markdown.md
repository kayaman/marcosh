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

This is a paragraph.

This is another paragraph.

Put two spaces at the end of a line for a line break.

2. Headings

# Heading h1

## Heading h2

### Heading h3

#### Heading h4

##### Heading h5

###### Heading h6

3. Markdown Flavors

Normal and Extended.

GFM - Github Flavored Markdown

4. Emphasis

```markdown
_This text_ is italic.
_This text_ is italic.
**This text** is bold.
**This text** is bold.
**_This text_** is bold and italic.
**_This text_** is bold and italic.
```

5. Strikethrough and Highlight

```markdown
~~This text~~ is strikethrough.
==This text== is highlight. But it is not supported by GFM.
<mark>highlight</mark> is supported by GFM.
```

6. Super and Subscript

```markdown
This is a super^script^. But it is not supported by GFM.
This is a sub~script~. But it is not supported by GFM.
<sup>superscript</sup> is supported by GFM.
<sub>subscript</sub> is supported by GFM.
```

7. Emojis

```markdown
:smile: but it is not supported by GFM.
Copy and paste emojis from https://emojipedia.org/ (for instance) is supported by GFM.
```

8. Code blocks

```markdown
This in an inline `code`.

You are inside a code block. Use triple backticks to start and end a code block.
```

9. Links

```markdown
[label](url) - with label
<url> - without label
url - without label
```

10. Images

```markdown
![alt text](url)
```

11. Blockquotes

```markdown
> This is a blockquote.
> This is another blockquote.
>
> > This is a nested blockquote.
```

12. Horizontal Rules

```markdown
three dashes

---

or three underscores

---

or three asterisks

---

asdf
```

13. Lists

```markdown
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
```

14. Tables

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

- At least 3 dashes are required for each column. The bars don't have to be aligned.

- Put a colon at the left, right, or both sides of the dashes to align the column.
```

15. Checklists

```markdown
- [ ] Unchecked
- [x] Checked
```

[The Only Markdown Crash Course You Will Ever Need](https://www.youtube.com/watch?v=_PPWWRV6gbA)
