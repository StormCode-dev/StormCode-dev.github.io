# init

The init command will do a couple things:

1. Make a new instance of Amethyst in a specified repository
2. Process all of your files (WITH AUTO EXCLUSIONS FOR .ENV FILES!)
3. Build the geodiffmap used to keep track of your files

To use:

```
amethyst init
```

or:

```
amethyst init -p "D:\path\torepo"
```

In either case, it will result in that directory of choice being initialized with Amethyst.

