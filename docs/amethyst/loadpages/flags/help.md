# Help

Simply outputs positional arguments (cmds) and all the flags.

# To use

Run:

```
amethyst -h
```

The expected output:

```
usage: amethyst.py [-h] [-p PATH] [-a AUTHOR] [-r REASON] [-pa PUSHINGAUTHOR] [-f] [{init,validate,debug,uninstall,geoupd,geopush,reinit}]

Amethyst Version Control CLI

positional arguments:
  {init,validate,debug,uninstall,geoupd,geopush,reinit}
                        Command to run

options:
  -h, --help            show this help message and exit
  -p PATH, --path PATH  Path to the project directory (defaults to current working directory)
  -a AUTHOR, --author AUTHOR
                        Author(s) name for geoupd command. Multiple authors can be specified as a comma-separated list (e.g., 'Author1,Author2').
  -r REASON, --reason REASON
                        Reason for the geoupd command
  -pa PUSHINGAUTHOR, --pushingauthor PUSHINGAUTHOR
                        Author name for geopush command
  -f, --force           Forces a command to run, even if safety checks fail. Use with caution.
```