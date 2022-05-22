import{v as t,j as o,k as a,x as n}from"./index.ffc75f35.js";var i="/assets/files.8cbd26c7.jpg";const s={class:"markdown-body"},r=n('<img src="'+i+'" style="object-fit:cover;object-position:0% 0%;height:350px;width:100%;"><h1>Tips for learning a large new codebase quickly</h1><p>5/21/2022</p><p>I vividly remember my first day as a working developer. After running through the setup routine I finally had my system up and running and was happy. That is until I looked at the contents of the project I was working on. An endless tree of nested files, backend, frontend, config files, utilties, the result of a team for 200 working daily for years. How the heck would I be able to jump and an contribute to this?</p><p>Fortunately the tips below allowed me to adjust adapt quickly:</p><h3>Take it all in</h3><p>Spend a good amount of time simply bouncing all over the codebase. Take some time trying to understand small chunks of code, but also take some time broadly skimming files. Try to get a good sense of the structure as much a possible. Look for any documentation that the team may have written out. Anything you can absorb is worthwhile and will give you a bearing on the setup that will help you in the next steps. If it all still seems confusing at this point, don\u2019t worry, you will be adjusted soon enough.</p><h3>Look at the most recent commits or pull requests</h3><p>This helps you narrow down the current priorities and areas of the app that are getting the most attention. In the previous skimming step you may have looked over files that haven\u2019t been touched in years, but now you can narrow down on the hot spots in the app. Use these pull requests or commits to see how the current problems are being solved. Look for comments from code reviews, refactoring in diff\u2019s, anything that can clue you better into the current state of the application.</p><h3>Ask for an overview from a vet on the team</h3><p>One of my favorites, ask a manager or a lead developer on the team for a zoomed out overview of the code. Of course be mindful of their time and priorities. But if you can set aside some time for this it will go a long way in helping you understand niuances of the code you might not pick up on from just reading. Before the rundown write down any questions you have so far about the code to ask, don\u2019t worry about sounding dumb at this stage, if you have the question odds are someone else has had it before too. You can also ask for tips on what to focus on as you continue to get used to your new project. This will show inititative and help you start a working relationship with someone who can get you out of snags. Warning: always be mindful of the time of others, you never know how much they have on their plates. If you get some of their time, come prepared, take notes, thank them. Only ask questions to these people when you have exhausted every option you have to figure something out on your own.</p><h3>Use the git-blame plugin</h3><p>Git-blame is a plugin that a lot of code editors have, I will be assuming you are using VSCode. This plugin allows you to click on a line of code and see who wrote it, when they wrote it, and the associated ticket or PR. This is super handy if you need more context to an area of the code base. Tracing a line back to the full change that it was involved with goes a long way in helping you understand the context. You can also use this to contact the previous developer if they are still working at the company and ask questions about the code (but only do this if you have exhausted all options and still need more information).</p><h3>Copy + Paste + Tweak</h3><p>This was the catch phrase from my first boss and mentor in development. The best thing about a large codebase is most of the problems you will need to solve have been solved somewhere in the code already! In VSCode one of my most used shortcuts is cmd + shift + f, or in windows ctrl + shift + f, which allows you to search the entirely directory for keywords. Often times you can find an existing example of the exact code you need to accomplish a task with hours of consideration already factored into it. Copy + Paste + Tweak to your specific needs and you can get tasks done quickly, and in the style that matches what your new team already uses. Word of caution: do not blindly copy paste and tweak, you will need to fully test and make sure the code you use in indeed the best code for the job. Sometimes the tweak step will completly change the code to something new which is okay! Even if it was just the catalyist for your solution it is worthwhile!</p><h3>Give it time</h3><p>Final step, give it some time and don\u2019t be hard on yourself. Everyone experiences growing pains when starting out on something new. But rest assured that in a month or two you will feel much more proficient if you take the steps above and apply them.</p><p>These are my personal favorite tips for starting out in a new large codebase and getting up to speed. Hopefully they help you jump in and contribute to your new codebase, happy coding!</p>',18),h=[r],y={setup(l,{expose:e}){return t({title:"Tips for learning a large new codebase quickly",meta:[{name:"How to learn a new large codebase quickly",content:"Learning a new codebase can be intimidating, esspecially as a new developer. But these tips will help you tackle your new project assignment and contribute quickly"},{property:"og:title",content:"Tips for learning a large new codebase quickly"}]}),e({frontmatter:{title:"Tips for learning a large new codebase quickly",meta:[{name:"How to learn a new large codebase quickly",content:"Learning a new codebase can be intimidating, esspecially as a new developer. But these tips will help you tackle your new project assignment and contribute quickly"},{property:"og:title",content:"Tips for learning a large new codebase quickly"}]}}),(d,c)=>(o(),a("div",s,h))}};export{y as _,i as a};
