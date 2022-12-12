---
title: Tips for learning a large new codebase quickly
meta:
  - name: How to learn a new large codebase quickly
    content: Learning a new codebase can be intimidating, esspecially as a new developer. But these tips will help you tackle your new project assignment and contribute quickly
---

<img src="../images/files.jpg" style="object-fit: cover; object-position: 0% 0%; height: 350px; width: 100%" alt="file cabinets" />

## Tips for learning a large new codebase quickly

5/21/2022

I remember my first day as a working developer and the shock that came with the scale of a real project. After completing the initial setup, I spent the first days looking around. What I found was an endless tree of nested files, backend, frontend, config files,  and utilities. This project was the result of a team of 200 developers working daily for years. How the heck would I be able to jump and contribute to this?

The tips below allowed me to adjust and adapt quickly:

### Take it all in

Spend a good amount of time bouncing all over the codebase. Zoom in to specific bits of code, then zoom out and consider the architecture. Try to get a good sense of the structure as much as possible. Look for any documentation that the team may have written out. Anything you can absorb is worthwhile and will give you a bearing on the setup that will help you in the next steps. If it all still seems confusing at this point, don't worry, you will adjust soon enough.

### Look at the most recent commits or pull requests

Reading recent commits can help you locate the current high-priority areas of the app. In the previous skimming step you may have looked over files that the team hasn't touched in years. Now you can narrow down to the hot spots in the app. Use these pull requests or commits to see how the current problems are being solved. Some great information you can find here includes:
- Comments from code reviews
- Code style used by developers
- Refactoring in the diff's
- Testing or business comments on the work

### Ask for an overview from a vet on the team

One of my favorites, ask a manager or a lead developer on the team for a zoomed-out overview of the code.  This will go a long way in helping you understand nuances of the code you might not pick up on from reading alone. Of course, be mindful of their time and priorities when considering this approach. Before meeting with someone, start by writing down any questions you have so far about the code to ask. Don't worry about sounding dumb at this stage, if you have the question, odds are someone else has had it before too. You can also ask for tips on what to focus on as you continue to get used to your new project. This can help you start a working relationship with someone who can get you out of snags. 

Warning: always be mindful of the time of others, you never know how much they have on their plates. If you get a chunk of someone's time, come prepared, take notes, and thank them. Be sure to only ask questions to these people when you have exhausted every option to get the answer on your own.

### Use the git-blame plugin

Git-blame is a plugin that a lot of code editors will have some flavor of, I will be assuming you are using VSCode. This plugin allows you to click on a line of code and see who wrote it, when they wrote it, and the associated ticket or PR. This is super handy if you need more context to an area of the code base. Tracing a line back to the full PR or ticket goes a long way in helping you understand the context. Another use for git-blame is being able to contact the developer if they are still working at the company. You can ask questions about the code. But only do this if you have exhausted all options and still need more information.

### When you start working: Copy + Paste + Tweak

This was the catchphrase from my first boss and mentor in development. The best thing about a large codebase is it is full of solutions to most problems you might have! In VSCode one of my most used shortcuts is cmd + shift + f, or in windows ctrl + shift + f. These allow you to search the entire directory for keywords. Often you can find an existing example of the exact code you need to solve a problem you have. It comes with the hours of consideration already factored into it. You can 'Copy + Paste + Tweak' to your specific needs which will allow you to get tasks done fast. The bonus here is you will also match the style your new team already uses. 

Word of caution: do not blindly copy-paste and tweak. You will need to fully test and make sure the code you use is the best code for the job. Sometimes the tweak step will completely change the code to something new which is okay! Even if this step was just the catalyst for your solution it is worthwhile!

### Give it time

The final step is to give it some time and don't be hard on yourself. Everyone experiences growing pains when starting out on something new. But rest assured that in a month or two you will feel much more proficient if you take the steps above and apply them.

These are my personal favorite tips for starting out in a new large codebase and getting up to speed. Hopefully, they help you jump in and contribute to your new codebase, happy coding!
