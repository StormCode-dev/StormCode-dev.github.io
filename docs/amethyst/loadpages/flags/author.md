# author

This will apply to the commands geoupd, and geopush.

# For Geoupd

This is a singular user, you! Amethyst will allow for plain inputs like StormCode, but with spaces, you will need quotations around it. To use:

```
amethyst geoupd -a StormCode -r "I'm not on the internet. Some people read."
```

or

```
amethyst geoupd -a "Maxwell the Cat" -r "My primary goal in this futile form is to acquire fish. Fish, yes, fish. For if you have any, it shall be swiftly usurped off your hands and into my grubby mitts."
```

and if we were to take the first instance of an example, this is what a same geode could look like:

```
+-= (StormCode: I'm not on the internet. Some people read.) on 09/26/2025 at 01:33 AM

LN17-SUB         <div> --CHANGEDTO[73d39]-->         <div class="sidebar-content">
```


# For geopush

Author works a little bit differently. Author can either be a single instance (so still a flat name like StormCode) or a comma-seperated list of names, so "StormCode, FooBar, Maxwell".

Here is an example:

```
amethyst geopush -a "StormCode, FooBar" -pa StormCode -r "Testing"
```

and an expected output:

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