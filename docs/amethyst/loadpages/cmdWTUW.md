# Commands

Amethysts' commands are designed to be understandable at a glance. Of course, coming from one VCS to another requires relearning some commands. 

## geoupd


Arguably one of the most important commands. Geoupd, when ran, functions much like Git's and Mercurial's "commit" command. Use this when you are ready to put your changes into motion and to prepare to push and upload.

## push

Collects your changes, typically after doing geoupd, and puts them into a geopush file, afterwards flagging involved geodes with a pushmarker. Run when you wish to compile changes from one push to your changes, in dated order.

## pull

Pull retrieves changes from a .geopush file of your choosing, and applies them to your codebase on all relevant files. Use when your receiving geopush files from another developer

## package

Another goodie. This takes your entire codebase, and wraps it into one .geopkg file (AS SOURCE CODE) between other developers. This gets uploaded (optionally off by default) and, if present, downloaded to figure out changes that need to be done. Use this if you need to pass around your codebase quickly.

## unpack

Unpacks a .geopkg file as an entire repo on your machine, at your destination of choice. Use when you need to unpack a .geopkg

## commit

Commits your changes. Unlike Git's "commit", this puts your entire changes into the repository of your choice as an upload. This cannot be easily undone when executed. 

## rollback

It's not intended to rely on rollback to undo a mistaken commit. Past 5 commits since, you will lose the ability to rewind by Amethyst itself. If you mess up, use this to reverse a mistake commit.

## undo

This undoes your local changes on your machine as your last action, either as an action count, or to a certain point in time to the best of it's ability. If it cannot safely reverse changes, say your reversing your changes to the very beginning of the file version (why?), it'll prompt you if you wish to go through. Use this if you make a mistake.

## redo

Undoes an undo to the best of it's ability. This is a full rewind of an undo. Unlike the undo, it keeps an entire change map to operate off of. This is not a full reverse map, but rather a list of changes as timestamps and reversal actions to double-undo. It will not double your repo size by making a undo. It's also **HIGHLY RECOMMENDED NOT TO UNDO A REDO REPEATEDLY**. Use this if you find out that the undo didnt fix what you wanted it to.

## upload

Upload will put a file, or multiple into your repo as a relative directory for its input. Use to put a single file in your repo.

## download

Downloads a file, or multiple, from your repo. Use to download directly from a repo.

## More on Commands

This is a superficial overview. Check more of the commands' official pages to see more.

