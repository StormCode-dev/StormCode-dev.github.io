# isMaster

```
#amethyst reads this to automatically detect your root directory, if you dont provide one. flag carefully
isMaster = true
```

Amethyst supports nesting of itself! 

You can track different areas in a granual way. This allows a way to do that. 

This is a boolean. True will mean that this is the topmost area and amethyst should stop resolution here. False, however, makes amethyst check masterProjectDir to resolve and check there.