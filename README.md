# Block Admiral

Scrape:

```
copy(Array.from(document.querySelectorAll('tr a.link')).map(el => '0.0.0.0     ' + el.innerText).join('\n'));
```

Paste into `hosts` file and then run:

```
node format.js
```

Add content of `hosts` to your local host file.
