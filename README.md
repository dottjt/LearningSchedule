

# LearningSchedule

This is the repository for my online SaaS application, Learning Schedule. It is a fully featured application that includes user authentication, n' all that jazz. **I imagine it won't be fully production ready until the end of 2017.** It's absolutely massive.

God knows how many versions/revisions I've created. I believe it's currently on it's 3rd major revision, which added unit testing and TypeScript.

This project goes from being broken to fully functional as I implement new features, so I apologise if you happen to come across it when it's broken.

**08-06-17** - Website/Application now in early alpha https://learningschedule.com 


# Learning Schedule aims to serve a number of purposes:
- Provide a platform to easily track your learning.
- Provide an online profile for you to flaunt your learning. 
- Provide a platform for employers to see what you are capable of.

# Updates 

**28-06-17** - So, I haven't been working on my app because I've been preparing for (and possibly attending) coding interviews. Super excited, because I've gotten to the last round which I think means I've got the job! My first development job! Yaaaaayyyyyyy!!!!

**26-06-17** - Refactored more css. So, so, so, so, so close to making it responsive. Working with textarea elements is a nightmare, not to mention that the CMS is built into the presentation, so I have to figure out how to make it perfectly functional, as well as look nice for four different views. Nearly done though! You're mine, Wilkins. 

**25-06-17** - Redux-Form is being a bit of a nightmare. Implementing input counters is proving difficult, because there's three level of abstraction I need to deal with, and having to continually update via the reducer is proving quite slow, even though it's uni-directional. Though I think the app needs a huge update to performance in general, given I haven't really paid much attention to it. 

**24-06-17** - NA. More Angular and C#. Spent a heap of time learning about Observables, C# Razor templates and Entity Framework. Also, a heap of C# features. My gosh, talk about a progressive, static language. 

**23-06-17** - NA. Decided to learning Angular and C# instead. Angular, while philosophically broken, clunky and largely devoid of actual Javascript - is a tooling wet dream. I think maybe that makes it worth it? C# and asp.net core is also incredibly nice. 

**22-06-17** - Good news everyone! The app is 80% of the way there in terms of being mobile responsive! Turns out input elements don't collapse, so I replaced them all with textarea elements. The hard part will be getting the app samples onto the homepage. Other than that, I also implemented a feature that shows you how many letters you've written for each thing. At least a lot of it. I also learnt a heap of Typescript, Angular and C# today (razor templates n' all that). Super straight forward. 

**21-06-17** - Refactored more css. I now realise why it's taking so long - It's like I'm trying to create one standard set of css styles to work for a billion different views - 1 for index, 1 for individual view, then whether you're logged in or logged out, and homepage (as the app also features there). So while it feels like it's taking forever, once it's done, it's done for good. I also learnt a heap of Angular and Java today. Super keen to build something with it. 

**20-06-17** - Refactored more of the homepage, and started implementing word counters for the various fields. To be quite honest, I spent most of today learning Java/Spring Boot. I don't know why, I just really wanted to know more. 

**19-06-17** - Refactor. Refactor. Refactor. I spent all of today refactoring my css, because my css was not DRY at all - which I don't blame myself for, given I didn't even know what it should have looked like. Still, inching my way towards mobile responsiveness. It's still not where I want it to be, but I'm close. Oh, and I also added a navbar on the homepage. 

Now that this project is vaguely coming to a close, I'm super interested in perhaps doing something with clojure/reagent. Some kind of lisp imo. 

**18-06-17** - Today I fixed up all the fonts on the website and made it look really good. Super happy with the direction of the brand for Learning Schedule. I also fixed up more mobile responsiveness issues. I also need to figure out how to combine the two sets of css styling for the individual and the index view, because there's too much overlap. 

![alt tag](https://github.com/dottjt/LearningSchedule/blob/master/docs/font-change.png)

**17-06-17** - 2day I furter mayde mai appleekachion mowbeyeal wespeonsiph. It's looking pretty good on the application front, however the homepage is a mess. I also implemented SSL on the production server, as well as a sitemap for the website. HTTPS baby! 

**16-06-17** - I spent all of today making my application responsive. I'm probably 50% there. Thank god for flexbox, because it's absolutely incredible. I'm also glad I didn't build mobile first, because they application is really quite complex in desktop view and generally, mobile view is much more simple in terms of layout. Making vgood progress. 

**15-06-17** - Was working on a few of my V2 features today. For example, a save indicator which shows whether everything saved properly. Aside from that, also sorting out how to setup SSL for the server. Running into a few difficulties, but to be expected. Fixed a few bugs as well, such as updates not being deleted when schedules were. 

**14-06-17** - Super exciting news everyone! My app is neeeaaaaaarly complete! Literally, all I have to fix is user registrations and I'm done. In other words, sort out an email provider! So excited! Spent today sorting user authentication, and fixing a heap of responsive issues on the website. I also have a huge list of things I want to achieve once I reach beta:

- Show character limit, and when it hits - show them. 
- Ability to change social media icon links. 
- Ability to utilise images in updates.
- Ability to send your update as a social media 
- implement a seperate update tags store. 
- Move Logout from next to the logo, to next to add schedule 
- Admin access. 
- Ability to sign in via social media. 
- Click button when writing title so that it automatically changes the url. 
- When it’s juliusreade/schedule make it redirect to julius reade. 
- Flash that says - change username in HERE. whenever you login for the first time.
- Show ’No updates’ and no schedule overview for SITitle, SIUpdate. 
- Social authentication. 
- Application fades from visibility on start up. 
- If title names conflict, then slightly change the URL. i.e. keep the name, but add a -1 to the end. 
https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router better use of react router for some links. 
- When you add a tag, it deletes everything from the SIUpdate // I think update_tags need to be their own table/server thing. WAIT. Instead, I think maybe that SIUpdateSingle should be it’s value. Therefore, it saves when you onChange FOREVER - HOWEVER when you click add update it adds it to the other values :) Super smart. 
- Update dynamically gets bigger. 
- Profile menu animation within application. 
- Different brand colours for the menu. 
- Forgot password feature ugh. 
- 404 pages for other features. 
- Blog/News with hexo static site generator
- Input column and row restrictions for input elements. 
- Make the website mobile responsive. 
- Remove emoji. It’s too expensive and costing on the website. 
- Figure out server cache and how to 
- create a static version for non-logged in ppl. main page and individual page
- A new model for the application: We have the updates and we have a task list of things you want/will achieve. You then list off the tasks each time you complete them. 
- Goals, Resources tab in individual view. 


**13-06-17** - I've been taking it easy over the past few days. However, today I have very exciting news. I've managed to get file uploads working! I've been struggling with it over the past few days, however it turns out I was using the wrong library, in that axios cannot send file data. What this essentially means is that all I need to do is finalise authentication and essentially my application will be ready to enter beta! Super exciting news! 

**10-06-17** - Decided to take it easy today, given it's Saturday and I've been burning myself out on the weekends with high expectations of what I'm going to achieve. So today I worked on other authentication features and a bulk of it is done. Like reset token, forgot password page, registration verification etc. Still haven't quite got it emails to work, and the mailgun api is god-awful. Absolutely. Awful. 

**09-06-17** - Learnt a lot more linux. I'm starting to get back to developing my application. Been fixing a heap of bugs and creating new pages for authentication. I'm over learning dev ops things. Instead, I've been planning all the steps I need to get my app into beta. The list is quite small now: 

Register new user:

- Get emais to work and test their outcomes, like user confirmation etc. 

Application: 

- Have schedules/updates/tags appear in a consistent order.
- Ability to upload an avatar. File uploads in general. 
- General validation for certain input elements. 

**08-06-17** - Today we reached a wonderful milestone. My application is now live on the internet at learningschedule.com! Admittedly it has a lot of bugs and most basic functions like signing up doesn't work, but that's okay CAUSE OMG IT'S LIVE AND THAT'S PRETTY COOL TOO. I also fixed a heap of bugs and the application is on track. 

**07-06-17** - I spent most of today debugging my applicaiton from a dev ops point of view, and finally I made the website live at learningschedule.com! I learnt so much about postgres and unix in the process. Am most likely going to learn more systemd over the coming days, but I feel like I've really nail psql in the command line, as well as understanding user permissions and that kind of jazz. Oh, and I feel like docker I understand what docker ACTUALLY wasn't working - largely to do with postgres user permissions, but now I know :) 

**06-06-17** - Finally. I think I know why docker won't connect! Ultimately, I think it's the knex SQL query builder I'm utilising. For some reason, I don't think it's possible to populate the database via knex via a different container. I think it has to be via the postgres container. Ultimately, what I"ve realised is that it's not a good idea to tack docker onto a project. You either build with it from the beginning, or don't. So I'm thinking I might just leave it out for this project on the server.

**05-06-17** - I am stuck on this docker bug that won't allow me to register a connection between my database container and my application container. There are a billion different possible reasons why, not to mention the ever-changing docker api that has me questioning everything.


**04-0-17**: docker bug dayz.

**03-0-17**: Today has been draining. Compiled all my ssh scripts, however now I need to transfer them over to an ansible configuration. Also fully created my docker-compose file n' all that. It's not fully there yet, because of a few bugs. I honestly question whether docker is production ready, at least on mac. TBH it's a bit of a cluster-f at the moment, and my app woud be up and running by now if I'd just done it normally. Of course, learning is the goal and I'm learning a lot. 

**02-0-17**: More docker and some email configuration. Working on my ansible scripts. Also really been getting into web design tools like Sketch and figuring out web design best practices. Webflow looks like an amazing tool to design and prototype websites. I just love every aspect of web creation! 

**01-0-17**: Pinch. Punch. First day of the month. Docker Docker Docker. I think the aim of this week has been to learn as much as I can about dev ops, so I can implement all this stuff on the weekend. Just need to properly figure out ansible. Docker volume edge cases are also perplexing me a bit.  

**31-05-17**: Learnt a lot more about servers, setting up ssh, ansible and general docker image creation. I'm really beginning to develop a knack for this dev ops stuff, and then once this is done - I'll be super full-stack genius! Also beginning to start learning asp.net mvc. I suppose, for jobs n' stuff. Should be easy cakes. 

**30-05-17**: Kubernetes, Jenkins and moar dockr. I feel like I'm becoming somewhat of a UNIX master. Won't lie though, for the first time in the while, I've started wanting to fall asleep on the train whilst reading this material. It can be incredibly dry, though it's necessary.  I also learnt a heap of the grid css API. 

**29-05-17**: Nginx, docker compose, Jenkins and Ansible. These tools are absolutely amazing! I'm thinking that in order to run my application, I just need to spin up a docker-machine instance on my linode server and pull everything into it.

**28-05-17**: I wouldn't say I'm a docker expert, however I can now comfortably create images (as well as know how to optimise them) and more-or-less use the damn thing. I've also been learning a lot more css/layout techniques - my gosh, flexbox is incredible! 

**27-05-17**: I went in. I created my first linode server :))))))) Configuring it, my app is nearly ready for production (I don't think it actually is, but it feels like it is. The main reason I created it was that I needed a proper IP to create a sub-domain for sending email verifications to users. 

I think I'll be taking some time off developing my app to learn more dev ops related concepts, like docker. The app is nearly done. It just needs a suitable deployment, and I'd rather spend the time to learn future concepts so I can have them for the rest of my life. 

This is what I managed to get done over the past week or so. 

- Create three user summaries when new user is created. 21-05-17
- Pre-use a particular avatar. Picture of a plant. Five pictures. 21-05-17
- Application Profile Menu: 23-05-17 
    - Profile Settings
    - Published Schedules
    - Logout
- Schedule URL issue: Popup where you have to provide a title first. (need validation for this as well.) 23-05-17 (need validation for at least one alpha numeric character, as well as check to see if it’s been done before.)


- Create a profile menu page. aka learningschedule.com/juliusreade/profile 
    - It should allow you to:
        - Change your username. 24-05-17 WORKS! 
        - Change your email. 24-05-17 WORKS!
        - Change your password 25-05-17 WORKS!
        - Delete your account. 25-05-17 WORKS!
- Application doesn’t appear until everything loads. 25-05-17

- Login Page 26-05-17
- Sign up Page 26-05-17
- Use marko templates. 26-05-17
- Character limits on EVERYTHING. 26-05-17
- 404 Page 27-05-17
- Forgot password Page 27-05-17


- Hamburger menu with 26-05-17
    - Login Link 26-05-17
    - SignUp Link 26-05-17
    - About Link  26-05-17
    - Contact Link  26-05-17

**26-05-17**: Created a heap of webpages for the front-end, added a hamburger menu to the front-page, fixed a heap of bugs on my app aaaaaand I'm being lean by seperating features I want for the beta, and ideal never-to-happen-in-a-million-years features for the serious release for the app. 

**25-05-17**: Profile page all complete! One thing to tick off my list. I can now successfully change the password and delete a user, as well as rest of the shebang. Also transferred all my static html files to the marko templating engine, so I can have things like req.flash for user authentication. Time to work on validation logic and sprucing up redux-form :) 

**24-05-17**: So. Much. Done. Started working more on changing passwords and user, as well as logic for sending emails on the backend. I'm finding it boring to do all this somewhat-typical buisness logic, but it's necessary and I'm learning a lot. 

**23-05-17**: I wrote so much code today and implemented so many features. Git says I made 1800 insertions, which is double what I usually do each day. Didn't really fall into any pitfalls or traps, just coded and everything worked. Created a heap of actions for things like changing passwords, deleting user, fixed up add Schedule so it's working well - as well as small things, that make a big difference, like the edit button turning into save and back again. The profile page looks lovely. Tomorrow I need to focus on functionality and ensuring that these things work, particularly on the server. 

**22-05-17**: I focused mainly on getting the new addSchedule pop up working today, as well as the best way to do it from a UX perspective. I also started implementing the profile drop down, as well as the profile/settings page. Foxy stuff. 

**21-05-17**: So I thought I'd be a responsibile adult and begin planning things for when I believe the application will be production ready. And quite frankly, the list of things I need to do absolutely terrifies me, however I also need to focus on how far I've actually come with this thing, and remind myself that a late-2017 release is what I should be aimming for, and is totally realistic. Here is what I've come up with: 


Register new user:

- Create three user summaries when new user is created. 
- Email//password validation. 
- Captcha for sign up. 
- Figure out express dynamic static routes. 
- Pre-use a particular avatar. Picture of a plant. Five pictures. 
- Send email to confirm user. (also need to utilise express flash to make it show on the signup page. 


Application: 

- Application doesn’t appear until everything loads. 
- Schedule URL issue: Popup where you have to provide a title first. (need validation for this as well.  
- Have schedules/updates/tags appear in a consistent order.
- Ability to upload an avatar. File uploads in general. 
- General validation for certain input elements. 
- Character limits on EVERYTHING. Except perhaps links (or make it very big).
- Input column and row restrictions for input elements. 

- Create a profile menu page. aka learningschedule.com/juliusreade/profile 
    - It should allow you to:
        - Change your username.
        - Change your email.
        - Delete your account. 

- Application Profile Menu:
    - Profile Settings
    - Published Schedules
    - Logout


Website: 

- Hamburger menu with
    - Login Link
    - SignUp Link
    - FAQ

- Login Page
- Sign up Page
- 404 Page
- Blog/News
// Should I just use a static site generator? Probably, except I need to use express templates ugh. Hexo perhaps.


Application extra (aka v2.0):

- Ability to change social media icon links. 
- Ability to utilise images in updates.
- Ability to send your update as a social media 
- implement a seperate update tags store. 
- Move Logout from next to the logo, to next to add schedule 
- Admin access. 
- Ability to sign in via social media. 


Plz kill me. 


**20-05-17**: Perfect. Perfect. Perfect. Alterated a lot of the styling and it looks mint. The homepage is absolutely GORGEOUS. Like seriously, incredible. I want to eat off it. I think the styling is 90% there. Now I need to work on some user authentication things, in particular making the app work with no data, as well as improving the registering process. Grind it, baby. 

![alt tag](https://github.com/dottjt/LearningSchedule/blob/master/docs/header%20v7.png)


**19-05-17**: I was a bit disappointed today. I mean, I got a heap done on my app and it looks really nice in a lot of different ways - however I was under the impression that production wouldn't be far away, but I think I stil have quite a while to go. I showed it to my friends and the number of bugs and incomplete features was rediculous. I think I need to reset expectations to the end of this year. Certainly. 

**18-05-17**: HUGE milestone everyone! All core functionality officially works for the very first time, which means the aplication is ready for some kind of crappy beta! I need to start working some more on the homepage so I can get this bad boy up and running on a server :))))) Also, currently trying to implement emojis on this thing, and it's proving to be a challenge - but the kind of thing that makes me happy. 

**17-05-17**: Absolutely smashing it! Implemented so many features today, as well as stylistic goodies on the SI view. I have high hopes I'll have this down within a few months! 

**16-05-17**: Phenominal progress today. Funny how much more you can get down when you slow down, plan things out and actually think about how best to achieve something. Implemented a heap of logic to disable the input fields if a user is not logged in. Also implemented most the different update type fields and did so much amazing front-end stuff. The app is actually looking complete, as if it's something I'd use. Of course, only a fraction of it actually works - but it's just a time game at this point. 

**15-05-17**: Fixed bugs. Fixed user authentication things. Still trying to figure out how best to approach multiple update types - the details are all very vague. I'm also worried that I'll have to implement another schema for update tags, but it's probably best. Just time consuming, that's all. 

**14-05-17**: Created more backend user authentication logic. Fixed a bunch of front-end bugs. In the initial stages of implementing update tags and adding tags. Bit by bit. Implemented redis for sessions. I think this baby may be ready for production in a couple of months time. Patience, my friend. 

**13-05-17**: Relaxed for the first time in months. Well, I spent an hour messing around but thought, nah. I need the perspective. 

**12-05-17**: User authentication logic. More. More. More. 

**11-05-17**: I decided to give it one last, final crack. Thankfully it paid off. User authentication is working, the app is largely working. Thank god. Turns out my unit tests a) weren't working and b) were incorrect + a million other factors. I must have gone through hundreds of stackoverflow/github answers and countless debugging tests and breaking things down before I got there. I think the problem is the fast moving nature of node.js, it's almost impossible to maintain/reproduce a project without breaking something. 

**10-05-17**: Breaking point. I am so done with node.js like you cannot imagine. Nothing is working, and it's driving me insane. 

**09-05-17**: I decided to recompile the application from scratch. Basically, I was moving between laptops and the dependencies were making no sense and breaking my app, so I figured it would make sense to recompile everything from the beginning - which should prepare me for when it goes into production. It's been a battle and I still have a few days to go, but I know it's the right thing to do. Especially this damn redux-saga typescript error that's driving me insane, but that's a story for another time. 

**08-05-17**: I experienced the absolute worst coding day of my life. There's this bug that I cannot fix, and I've had this "determination" headache all bloody day. I've tried everything and it's driving me absolutely insane. Let me tell you this now: Unit tests work great when you 100% know what your application will be. But when you're constantly switching being different architectures, they are absoultely useless. 

**07-05-17**: Making good progress. Implementing different types of updates and so updates can have tags of their own. Worked a lot of on the interface, and my gosh, it is absolutely gorgeous. The homepage is also super rad. I fixed the excessive white space with underlines and it's made a world of different. :))))))))

![alt tag](https://github.com/dottjt/LearningSchedule/blob/master/docs/image_3.png)

**06-05-17**: It's Saturday. I've been up since 8am trying to get a dev setup up on ye ol' 2010 mac we got lying around, hastily making all those lost changes. Thankfully, not too much was lost. Managed to get soo much done. Tags are half-done, made the homepage look really nice, started implementing the ability to add multiple types of updates - the whole works. Really good stuff. I'm absolutely exhausted, but you have a bright future Julius. 

**05-05-17**: So ummmm, I accidentally spilt water on my laptop and it's no longer turning on. That was my day in progress. 

**04-05-17**: Refactored. Implemented new features (including tags). At this point, making the application look snazzy, and fixing small things here and there. Finally my code is beautiful, semantic and a breeze to work with. Everything is named correctly. Everything is super easy to find. Structured. Annotated. Following months of civil turmoil, I have truly wound up in heaven. 

**03-05-17**: It feels like I achieved more today than I did over the past two weeks. The damn thing works now, it looks great and dare I say, is probably ready for production. Time for a DigitalOcean account! It's nice to have the architecture all sound and sorted, so I can just focus on building features - rather than debugging. 

**02-05-17**: Something very special happened today. I got my application to work. Crazy, I know? The damn thing is actually usable now, but I woud say it's still early alpha. Basically, almost all the reducers work :D

**01-05-17**: I was so, so close to calling it quits on either Typescript or Immutable.js today. With my setup I can fully utilise Immutable, however my typescript is half-assed because you can't type Immutable.js objects. In the end I managed to make it work, however only barely. Regardless, I made a lot of progress today, largely fixing my reducers and making them work. The problem is that I've been constantly updating the architecture, which means my app hasn't been working at all. I think I'm maybe 60% of the way there, and it's so nice to see it actually working. I suspect it'll be another day or two before everything is cogruent, then I can start updating the UI! Yay!

**30-04-17**: I decided to take a break from my application today, which is the first time in months since I've actually relaxed and not done anything. Okay, even that's not true. I patched up react-router, and the views are working lovely. I can finally start working on the UI/UX of my application. Oh, and I also have a really neat logo in mind for learning schedule.

**29-04-17**: My severe perseverance is paying off. That bloody eureka moment I've been waiting for. I completely redesigned the architecture of my application and now it runs like smooth-cakes. Turns out react-router wasn't so bad afterall, it's just because I tacked it on rather late onto the application, rather than build the application with it in the first place - which meant everything was broken from the start. 

I've also come to realise that my architecture 100% went against react/redux, hence all the problems. I tried to build this app/static page hybrid, in order to cheat the system so to speak. However I now realise that it can't be both, so now it's  going to be an incredibly responsive app that feels like a website. Ah, clarity. Finally, I can stop beating my numerous, illegitimate children at night to cope with the stress. 

**28-04-17**: At the point of wanting to slash my wrists. My app hasn't quite been working, especially when in terms of data retrieval from the server. I now know it's because of react-router, which caused me to adopt all sorts of horrible patterns and hacks to make my components work. So much so that it's caused me to go against react/redux and try and implement two different stores, which has just... no point pondering on the past. Main point is, huge lessons learnt. And unfortunately, I feel like I need to rewrite the app as a result. I'm currently looking at the UI-Router library, as well as a few others and they look promising. 

I also now fully understand, and have fully implemented jwt, and after much research, realise it's a joke and that it's my fault entirely for implementing sessions incorrectly, thinking sessions were flawed. Good news is that I now understand how everything works, including sessions and yeah. 

**27-04-17**: It's been one of those days. I did a lot and learnt a lot, yet accomplished little. Building this thing is an uphill battle, but I know it's because I'm lacking patience. Late-2017 is realistic, I think. Bit the bullet and started implementing JWT authentication, which is proving to be a pain - but like leaving an abusive ex (aka stateful sessions paired with an SPA), it's for the best. The basics are working and I understand how the server pieces together, however I still don't quite understand how it works on the client. Oh yeah, I also learnt a heap of Angular and AngularJS at work today. Good day. 

**26-04-17**: I decided to rewrite all my unit tests (admittedly, stopped using them once the application design itself became too unpredictable) and then I cleaned up the backend. I also managed to sort a heap of other crap through my code, a lot of which I'm too ashamed to admit (my user authentication model was flawed, so I'm rewriting it). The good news is that the server-side code was largely refactored, so it's less terrible. Still, quite proud of myself today. 

**25-04-17**: Horse #yolo. I started coding at 5:50am today, and given it's a public holiday, I did nothing but code all day and I managed to get a decent chunk of the application done. A large portion of it was spent attempting to strangle client-side routing. I honestly think I could get rid of a good 40% of my code if I'd just utilised static routes. However I want it to be fast, and at the very least it's a learning curve. I think I'm so close to a largely-functioning app. Then I can start adding more features and work on design. Yay me :) 

On a side note, my girlfriend used to work at ThoughtWorks and she got this amazing dev laptop on the cheap (she's not a dev). Anyway, we did a switcheroo given she only uses it to watch Stan, and so as of today I've been using a beefy dev laptop and it's helped tremendously.

**24-04-17**: Excellent. Excellent. Excellent. Refactored the backend so it finally makes sense, user authentication is actually working and no longer breaking things (95% of the time, I think) and I'm so, so close to fully connecting the front-end with the backend! The problem is that single view utilises two different ways of retrieving data from the server to save on bandwidth, however it's also a little convoluted - which means breaky, breaky. 

**23-04-17**: The past two days have been phenomenal with the application. Did a huge refactor of the application, designed around read-ability. Everything is annotated and I can mentally keep the code in my head and understand what's going on amongst the now-convoluted, though necessary logic. Components are seperated. Everything has a home. Of course, I realise there's a limitation to which you can keep things modular, which is why annotating things is the next logical step - which is important when I'm constantly switching between server-side, client and database code. 

**22-04-17**: Okay, I'm at breaking point, so here are the problems as I see it.

1) I'm trying to achieve something that ordinarily would require a group of people to build, and so I have to play many minds.
2) The size and the scale of the project is now beyond my ability to keep it all in my head. 
3) I'm coding on my 11 inch macbook and not only is it failing to cope, however the screen size is killing me. Just killing me. 

These are the reasons why I need to refactor so often, and is why I'm believe I'm approaching V5. This time around, I think I need to put components into their own folders and delete a heap of unused code in the database. 

The good news (if you can call it that) is that it forces you to make the most of everything. It forces you to be modular and to make everything as easy as possible to reason with. 

**21-04-17**: My brain was fried today. I didn't really focus on the application today, however I made key progress on a number of a fronts. I figured out a way for single view schedules to display their data. I just finished my workout and I'm exhausted, so I can't remember how I did it, but I think it utilised the match props in react-router to access the schedule_url data point in the database. The only issue is syncing react-router with express, because react-router urls are messing with server retrieval.

I'm really not happy with the bloat that's gathered in my app. I feel like it needs a significant refactor, and in fact, my app is indistinguishable from when it started in every single way. The problem is a) I have no idea what my app is/should be, so it's constantly changing and b) my app changes radically as I add different technologies/libraries. But that's okay, because it's my first app - sort of like writing your first novel. So I think.

**20-04-17**: Okie Dokie partner. I largely understand the inner-workings of react-router and it now displays a seperate page for when you create a new schedule, which is huge progress! Still sorting out the backend to make displaying schedules work, but I'll sort that out tomorrow once, you know, I've slept. 

**19-04-17**: Accomplished a lot today. Worked extensively on the homepage and I think I like the feel and message it promotes. What I like is that it's not generic, yet I feel like it's also effective. I also managed to get react-router to work in some areas, but not in others. Part of me is burnt out from coding, I feel like. I haven't given myself a break, but I know I have to get this thing up and running. 

**18-04-17**: The progress on my app today has been phenomenal! You can now publicly access a user's profile, to like show employers, and there are different views for when you've logged in and when you've logged out - specifically edit access. With that said, I also added react-router to my app and I'm really struggling with it massively. I can't figure out how to get it to work, let alone for new schedules - but I know I just need time to grok it :) 

**17-04-17**: Yes! Finally got the images to load. Part of it was my error, in that I was updating an element which wasn't the element I was looking at and got really frustrated. The up side is that it's teaching me so much about Javascript and how to really command react, down to the dizzy details. Here are the designs of the project.

![alt tag](https://github.com/dottjt/LearningSchedule/blob/master/docs/V4%20Latest.png)

**16-04-17**: HUGE day. Implemented a lot of front-end and the UI/UX is looking appropiately snazzy. Also managed to get file uploads up and running. HOWEVER I have been fighting react tooth and nail to get images to work. The problem is the React lifecycle method, which does a blank iniital render. Problem is that you can only update the src attribute on an img tag once, so I'm having to write the most convoluted conditional logic to get it to work. And I still can't....  

**15-04-17**: Today has been incredible. Largely figured out user authentication and I've managed to get the production version of my app working with Learning Schedule! Development has always been tedious, considering the backend was fully developed, and all the data is from the backend, so I had to proxy my application via the server and it was a mess, especially with react-router. However now I can test/develop everything natively :) 

**14-04-17**: V4 has arrived. Today we witnessed carnage. Genocide, perhaps. I basically firebombed the application and vastly simplified all the reducer structures and removed a few tables, in addition to renaming EVERYTHING. 

Vital lesson learnt today: Always extensively plan/design your application before you create it. Of course, that was impossible to do given I didn't really know what it was/is, but good to know. 

**13-04-17**: Rebuild V4 is coming! Going to streamline and refactor a heap of stuff. Decided to better learn vscode today, along with typescript. Also spending today to rebuild the UI (using Sketch), because now that I have a better idea of what it is and ideally, how it should work for the end-user.

![alt tag](https://github.com/dottjt/LearningSchedule/blob/master/docs/V4%20Initial.png)

**12-04-17**: Changes in the application are now (largely) updating the database and my tag solution is working like a champ (though the date-picker is refusing to be consistent). I've also consolidated the initial data sync process to ensure that it's retrieving data from an authenticated user, rather than a crack addict. 

**11-04-17**: Decided to ditch react-input-tag and create my own solution based on redux-form. It didn't play nice with redux, at all. Worked more on user authentication to ensure it's more robust. 

**10-04-17**: Not sure if I should keep TypeScript or Immutable.js because they're simply incompatible. Apparently ImmutableAssign can provide the same benefit as Immutable.js and work well with TypeScript, at the cost of being a tiny bit slower. 

**09-04-17**: User authentication is a go-go. 



...

02-03-17: OMG databases make sense! I have died and become god. 

24-03-17: Wow, I honestly cannot believe how far I’ve come. The fact that I’ve managed to build a backend with crud operations and a user authentication is incredible.

16-02-17: Learning Schedule V2 begins! 

27-01-17: Begin learing a lot of ClojureScript and Haskell, in particular Reagent/Re-frame. Now this is what React should ideally be - completely immutable and persistent! Certainly, it's all making sense to me now. 

...

22-12-16: Learning Schedule V1 ends in failure. I don't know enough about functional programming, nor truly understand React/Redux to be able to progress further. Taking a break to focus on learing more foundational programming concepts. 

30-11-16: Learning Schedule V1 begins! 

# Here are the technologies I am using:

### Frontend
- React (view library) 
- Redux (state management)
- Redux-Form (form management)
- Redux-Saga + Axios (async management)
- Mocha/Chai/Sinon/Enzyme (unit testing) 
- TypeScript (type safety)
- Immutable (persistent data structures) 
- Styled-Components (css components)

### Frontend 3rd Party 
- ~~React-Input-Tag (input tag library)~~
- React-Datepicker (datepicker library) 

### Backend 
- Express (server) 
- Knex (SQL query builder)
- Postgres (database) 
- Redis (session data)
- Passport (user authentication library) 

# Application Design 

The main highlight of the project lies in the way I've managed to deal with nested state in the application, as I find that's the real pain with most complex applications with databases - in particular due to React/Redux's functional composition, which demands everything be absolutely perfect.  

Instead of having a massive state tree, that's nested deeper than the mariana trench, I've instead opted to have my state completely flat WITHOUT using normalizr. The problem with normalizr is that it still doesn't play nice with the database and it's a hassle to make changes to.

So I thought, why not organise the reducers so that they're just like the database? It makes the database and reducers incredibly easy to change, as well as easily to mentally gauge as they're essentially the same. 

With that said, I have a number of database tables and reducers:

reducer/database table

cycles / cycle_data
user / user
tabs / cycle_tab
subjects / cycle_subject
topics / cycle_topic 
notes / cycle_note

No different to a database, they're all linked via a single key (which in most cases, is a variable called cycle_id) which makes recursive mapping data incredibly simple, and also works well with React's architecture. I simply pass the key prop down to the component.

The best thing is that the architecture scales. 

All you have to do is copy code and mass-change variable names, and wa-la. The code becomes a reusable heaven!  

# What have I learnt?

- I now fully understand rest architecture and the dynamic of transfering data between client and server. 
- I now fully understand all the intricacies of React/Redux (in particular the render lifecycle, which I'm finding is the main pain in complex data applications) 
- Fully figured out the hell that is Redux-Form. 
- I now fully understand backend services such as user authentication, organising routes/controllers, file upload etc. 
- Never trust poorly documented 3rd party npm libraries. Always. 




