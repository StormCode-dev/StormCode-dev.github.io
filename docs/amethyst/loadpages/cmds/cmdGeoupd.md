## geoupd

Updates your geodes with your changes

Geoupd takes three args, where...

1. A string of whom is authoring the changes (author)
2. A string with their reason behind their changes (reason)

Applied to the CLI tool, use the flags:

1. -a : --author : Who is making these changes, not inside quotes if non-spaced
2. -r : --reason : The reason for making these changes

```
amethyst geoupd -a StormCode -r "This would be your reason"
```

And a general output would be:


```
Processing all files: 100%|██████| 1236/1236 [00:00<00:00, 11101.89it/s]
AVCS : avcs folder validated
AVCS: Updating geodes!
AVCS: Geodes updated successfully!
```
