## geoupd


Arguably one of the most important commands. Geoupd, when ran, functions much like Git's and Mercurial's "commit" command. Geoupd updates both the geodes per file and the geodiffmap with new code, the pushing author (the person who is putting their changes into place) and their reasoning behind the changes. Pushingauthor is not to be confused with the "push" command, and is instead a broad term.

Geoupd takes three args, where...

1. A raw String of your complete, tomost filepath of your project (projectDir)
2. A string of the name of the person who is pushing their changes (pushingauthor)
3. A string with their reason behind their changes (reason)

It may look like this: geoupd(r"C:\Users\awesomedev\projects\thisproj", "stormcode", "made tiny fixes")



