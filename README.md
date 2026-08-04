# Block Admiral

Scrape:

```
copy(Array.from(document.querySelectorAll('tr a.link')).map(el => el.innerText).join('\n'));
```

Paste into `lists.txt` and run:

```
bun scripts/format.js
```

Add content of `hosts` to your local host file.
