# ignoreDirs

```
#from the directory of your amethystversioncontrol root folder, amethyst will ignore operating within the listed directories you put here
#for example, you can put 'C:\Users\you\Programs\project1\.git' in here, or 'C:\Users\you\Programs\project1\.git, C:\Users\you\Programs\project1\_pycache_', or even just None
#because amethyst can auto-detect your root, you can list directories and relative with something like 'ROOT:.git' or 'ROOT:\secrets'.
#you can also indicate files with the text 'FILE:file.extension', or even go broader and do 'FILE:.env'.
#in practice, something like 'C:\Users\you\Programs\project1\.git, FILE:.env, C:\Users\you\Programs\project1\_pycache_' would work
#even simpler, it could look like 'ROOT:.git, FILE:.env, FILE:LICENSE.txt, ROOT:_pycache_'.
ignoreDirs=ROOT:.git, FILE:.env, ROOT:amethystversioncontrol
```

By far, this is probably my second favorite part of Amethyst. Amethyst provides a rich way to add exclusions, that being said: **THERE ARE CASES IN WHICH I NEED TO BUILD TO FURTHER SAFEGUARD YOU, THE USER**. You should check under the same section "Important Info" for more.

By default, Amethyst excludes the following:

1. Git and its folders
2. Amethyst and its folders
3. Any .env file

There is no way to change this as of right now before running init, but this should cover most cases. I highly recommend you, for safety, keep your API tokens and keys, secrets, and whatnot outside of your repo, or inside a .env file.

# Using the exclusion engine

When using this, you are given two abstracted methods that you are able to use:

1. "ROOT:"
2. "FILE:"


# ROOT:

This is the topmost directory of your repository localized on your system, and can go down wherever in the repository. This is a specific folder exclusion you can add.

Let's say your repository is at "C:\path\toyour\repository"

If you were to type into ignoreDirs "ROOT:.git", it would resolve to: C:\path\toyour\repository\\.git

# FILE:

You have two options here:

1. A specific name of a file to exclude
2. The extension of a file you wish to exclude


In either case, Amethyst will let you perform this.

Let's say you wanted to exclude all files named "burnLinux", you could do "FILE:burnLinux". Not only would this work, it would be a perfect use of the exclusion, since you should most definitely not burn Linux.

I personally exclude all image files on the website when I use Amethyst, so this is my usage. You can exclude .png files by putting in "FILE:.png"


# Input them into Amethyst' ignoreDirs option

Each of your entires should be comma seperated. If we wanted to exclude all .png files as well as ones named "burnLinux", and we want to exclude all files inside of .git, we could put this inside:

```
ignoreDirs=FILE:.png, FILE:burnLinux, ROOT:.git
```