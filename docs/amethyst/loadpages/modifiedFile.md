# On Amethyst' checks and safety

You encountered a modified file error, which could look like:

```
AVCS: During the execution of your command, Amethyst detected that a critical file has been modified or corrupted. This could be your own doing, or a sign of a deeper issue.
AVCS: Execution of your command has been halted to prevent potential data loss or corruption, which could have been caused by this modification.
AVCS: The file in question is: amethystversioncontrol\diffmaps\diffmap.geodiffmap
AVCS: If you would like to still execute your command, and understand the risks, please re-run the command with the --force flag.
```

First off, I am sorry if it's the geodiffmap. If this happened randomly, I messed up in my code, and you should shoot an E-Mail or DM to me ASAP, and I can work to fix this with you.

If you did manually edit the geodiffmap, you messed it up, and Amethyst did just save you from a serious headache. Revert your changes on it to it's original state.

In the CLI Message, you can override this with the "--force" flag,. or "-f" flag to bypass this check. **Only do this if you know the file is safe and everything checks out, including header matches**