# pushingauthor

This argument is specifically used by geopush to notify which developer is pushing their changes. 

This is one user, and also can be just StormCode, or equivalent, and follows the same naming scheme as -a in geoupd

To use:

```
amethyst geopush -a "StormCode, FooBar" -pa StormCode -r "Testing"
```

And the expected output is:

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