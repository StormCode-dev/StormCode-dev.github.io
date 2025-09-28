# Definitions

Inside the Amethyst Difference Engine contains three types of diffs you can read: ADD, RM, and SUB.

1. "ADD" is when a new line is added
2. "RM" is when a line is removed
3. "SUB" is when a line is swapped for another.

ADD and RM are relatively straighforward, but SUB is where the magic happens

# So, what are they?

They normally look like this:

```
--CHANGEDTO-->
```

These are used to reference what the original line was, and what it got changed to. However, your code can also contain these exact same lines, which is why:

```
--CHANGEDTO[a tiny hash of your project is in brackets here]-->
```

to deliminate and remove errors.

In my opinion, this was the best solution to maintain readability at a glance while also being simple to parse.