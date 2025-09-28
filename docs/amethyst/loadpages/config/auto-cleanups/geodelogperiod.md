# Geodelogperiod

```
#tidies up geodes interacted with. can either be a flat integer for instances of diffs recorded, or a time period like "20 days" or "1 week"
#input 'never' to always record everything. amethyst always defaults to 'never' to preserve history
geodelogperiod = never
```

If you track history over a long period of time, it will get large. This is useful if you still want readability, but also a cutoff date. This however **will remove your ability to track your history back to when the repo was initialized.** Thus, it is reccommended you choose your options carefully.