## geopush

Collects your changes, typically after doing geoupd, and puts them into a geopush file, afterwards flagging involved geodes with a pushmarker.

Push takes three args, where...

1. A string of authors seperated by commas (author)
2. A name of the author who is pushing the changes (pushingauthor)
3. The reason for pushing these changes (reason)


In practice, it could look like this:

```
amethyst geopush -a "StormCode, FooBar" -pa StormCode -r "Testing"
```

And the assumed output could be

```
AVCS : avcs folder validated
AVCS: Pushing!
AVCS: Creating push file: C:\Users\micro\Documents\GitHub\StormCode-dev.github.io\amethystversioncontrol\pushes\push1.geopush
AVCS: [WARN] No previous push marker found in index.html. Including the entire file.
AVCS: [WARN] No previous push marker found in package-lock.json. Including the entire file.
AVCS: [WARN] No previous push marker found in package.json. Including the entire file.
AVCS: [WARN] No previous push marker found in projects.html. Including the entire file.
AVCS: [WARN] No previous push marker found in README.md. Including the entire file.
```

Note that -a can also be just a single name, as outlined with geoupd. This would however mean that you would be the only developer

This command also generates a .geopush file that lives inside "amethystversioncontrol\pushes" in sequential order. An expected output would look like:

```
META-=
Developers: StormCode, FooBar
Pushing Author: StormCode
Reason: Testing
SnapshotTimestamp: 09/26/2025 at 01:45 AM
META-=

<index.html>-=

+-= AMETHYST: Auto-Created geode for index.html added on 09/26/2025 at 12:48 AM


<index.html>-=
END OF FILE
```

Currently, this has no major functionality, but future commands like upload, download, etc. will give it more of a purpose.

