# Path

This flag specifies where Amethyst should look and operate in. By default, this is the Current Working Directory (or in other words, where your IDE or Terminal, Shell, or equivalent is navigated to in cd)

All functions take this. However, no matter what you put, Amethyst will resolve the directory and figure out where the amethystversioncontrol folder is in.

# To use

Run any command, and in this case, geoupd, with the -p flag as such:

```
amethyst geoupd -a StormCode -r "This is a demo of path resolution" -p "C:\Users\micro\path\toyour\repository"
```

This will override amethyst looking where you are navigated in by default. This could be particularly useful if Amethyst is bugging out and needs exact specification, or if you want to override nesting of Amethyst instances (see more in other sections)