# projectID

```
#you may sometimes deal with finicky edge cases. amethyst provides this option pre-configured so you dont run into these cases
#ADE references this to ensure cases like recursive dection wont happen. you can change this, but it's not reccomended
#by default, this will be a shortened hash of the location of your initialized project
projectID=73d39
```

As the comment explains, you may sometimes deal with finicky edge cases. This is essentially a way to reduce the risk of edge cases in your tracked files. 

Your projectID is a shortened hash of your repository. Being totally honest? I forgot my logic on how i hash the repository, but i do know it takes into account everything.

You can change this to whatever you please, but **I DO NOT RECCOMEND IT!** As of right now, this will break tracking if changed.