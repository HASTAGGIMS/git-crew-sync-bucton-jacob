1. What did the rejected push error message tell you, and why did it happen?

The rejection said something like ! [rejected] feature/overtime-pay -> feature/overtime-pay (fetch first) 
with a hint that updates were rejected because the remote contained work I didn't have locally. It happened because 
both clones started from the same commit, but Clone A pushed a change first, so by the time Clone B tried to push its own commit, 
the remote had moved ahead of what Clone B's local branch knew about. Git won't let you push a branch that would overwrite history it hasn't seen yet.


2. What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?

In Task 3, git merge combined two diverging histories by creating a new merge commit, both the original commits
(mine and the teammate's) stayed in the log side by side, joined together at that merge point. In Task 4, git rebase
didn't create a merge commit at all, instead it took my local commit off the branch, replayed it on top of the updated remote history,
and effectively rewrote it as a new commit with a new hash. The end result in Task 4 is a linear history that looks like
I made my change after the remote's, even though that's not really the order it happened in.

3. What one habit would have avoided both rejected pushes in this lab?

Running git fetch (or git pull) before starting new work on a shared branch. 
Both rejections happened because I made local commits without first checking whether the remote had moved,
a quick fetch/pull at the start of a work session would have surfaced the teammate's changes before I built on top of stale history.

4. Which approach — merge or rebase — would you default to on a shared team branch, and why?

I'd default to merge on a shared branch. Rebase rewrites commit history, which is fine when you're the only one working on a branch,
but risky once multiple people are pulling from the same branch — if someone else already has the old commits and you rebase and push,
you can create a mess (or be tempted to force-push, which can wipe out others' work). Merge preserves the true, honest history of what
happened and when, which matters more for a team than having a clean-looking linear log.
