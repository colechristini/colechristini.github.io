---
title: Reflections on TAing CS in the ChatGPT Era
layout: post
type: sketch
---

Before we start, it's not accurate to call the last year the ChatGPT era. Perhaps the LLM era would be more accurate, though that really began in 2022.

I've TAed for CMU's core algorithms class (15-210, a.k.a. Parallel & Sequential Algorithms) for 3 semesters. In that time I've seen a shift in the capabilities and the adoption of tools like ChatGPT that has transformed how students engage with their courses. A lot of the coverage of this issue (how students use AI in their college classes) has been with regards to humanities courses, where they use LLMs to summarize their reading and write their essays.

In an English class, AI is just as disruptive but less insidious. Just like a software engineer might talk about a '[code smell](https://en.wikipedia.org/wiki/Code_smell)' that hints at poorly written (or AI written) code, an English professor may talk about an 'essay smell' characteristic of an AI-written essay.

Essays written by LLMs often rely on repetitive sentence and paragraph structures, heavily rely on certain words (like furthermore), and most damningly **use a lot of words to say nothing of substance**.{% sidenote 'inside-higher-ed' '[Inside Higher Ed](https://www.insidehighered.com/opinion/career-advice/teaching/2024/07/02/ways-distinguish-ai-composed-essays-human-composed-ones) on AI vs. Human essays.' %} CHANGE THIS SIDENOTE

However, essay writing is only part of the point of an English or History class. Reading a text and discussing it with classmates is just as important as writing the critical paper about it. An LLM cannot (yet) talk for a student in class, and until they can the purpose of a humanities class is not fully eroded. 

For a programming class, however, things that have already been eroded are most of the point of the class. For some, i.e. a computer systems class, programming might be the point. While LLMs still struggle with complicated systems programming tasks, they do well at the ones seen in an undergraduate-level computer systems class.CITE In a class where algorithm design is the point, the problems that are accessible to undergraduates are also ones that have been done before, or at least are similar enough to ones done before that a LLM can design the algorithm and implement it easily.CITE For a more theory-heavy class, again, the problems and accompanying solutions that might be seen in a first or second undergraduate course (like CMU's 15-251/15-451) are now solvable by LLMs with relative ease. CITE

These abilities make LLMs a fantastic tool for learning. Equally, however, they make them a danger to students. 

# How students misuse AI
15-210 is a core class. Every undergraduate in the School of Computer Science, no matter their major (CS, AI, Robotics, etc.) and every CS minor takes the class. With that comes a number of students who have no interest in the course content, and so are much likelier to try and automate away as much of their work as possible. 

When asked, many of those students will say that they use AI to help them debug or write test cases. Others will say that they use it for conceptual understanding. All of those things are probably true. Certainly, it gets used to automate the busywork of writing test cases, as well as to identify arcane errors in hard-to-read SML code rather than having TAs help with that. No students, however, will admit that they upload the handout into ChatGPT or Claude and ask it to spit out a complete solution. Even though students are permitted to do so, there is still a degree of stigma around 'cheating' your way through your classes. This isn't the case in every class. In some, students regard AI as a 'magic bullet' for completing homework quickly and with only a modicum of effort. {% sidenote 'teaching-cs' '[How Do You Teach Computer Science in the A.I. Era?](https://www.nytimes.com/2025/06/30/technology/computer-science-education-ai.html), The New York Times.' %}


When they do use them in that way, however, they go from being tools that can help learning to 'tools' that can hurt it. I say 'tools' here not because they aren't tools, but rather because students seem to treat them as a black box, a magical oracle of answers that they can reach into. A mysterious box is not a tool, it's a gamble that what's inside the box are paper slips with answers rather than razors.

They do so because students are **students**. Inherent to being a student is a lack of understanding and knowledge, or in other words a lack of competence in the subject at hand. Students, lacking competence, are unequipped to judge both their own level of understanding and that of others.{% sidenote 'competence' 'See section 1 of [Thoughts on Competence](https://www.teamten.com/lawrence/writings/competence.html).' %}

Equally, students are unqualified to determine how to use LLMs in their classes in a way that benefits their learning. Certainly, they can choose to not use them at all. Many, however, will not choose to do that. They use LLMs to minimize their work, rather than as the tool they can be.

# AI as a tool in CS courses
How might we want our students to use AI, then? The easy answer is not at all, but I think that ignores the reality of the present day. The wave of agentic coding tools, and coding models in general, seems to be antithetical to the purpose of (some) CS classes. For an algorithms class where the programs are relatiely small and self-contained, there's no way to use a LLM to code a substantial part without that substantial part being the entire assignment. Clearly, then, coding is not how we would like our students to use these models.

Many of my students say that they use these tools to help debug and write test cases. Generating test cases is a perfectly fine use case, but debugging seems to me a slippery slope. First and foremost, using AI to debug is not that many steps away from using AI to write the code, especially if the initial implementation is very incorrect. Having a LLM rewrite your broken logic is not, in the end, all that different from having a LLM write the logic in the first place. A LLM is also not going to help debug in the way a TA might, prompting the student to reason about their code to further their own learning, In an ideal world, helping a student fix their code in office hours is a conversation between student and TA, where the TA prompts the student towards the problem rather than simply fixing their code. 

The most commonly proposed way to use AI to assist in learning is to help with conceptual understanding, acting as a 24/7 TA that can instantly respond to questions and elaborate upon concepts. If this were the main way students used AI, this would be a net-positive for student understanding. This is the way we encourage our students to use AI, and many say this is how they use it. Both personal experience and office hours attendance, however, suggests it is the ways mentioned above as well. Given that many students are using it in ways that are both potentially harmful to their learning, and also to create work that is not their own, the way classes are structured has been forced to change.

# How can we structure classes today
In the past, CS classes at CMU have focused heavily on homeworks, with the idea that we can ask far more complicated questions there than we could ever ask on an exam or quiz. It was harder for students to cheat, if only because Chegg only had answers to old homeworks, and thus new questions were temporarily safe. Of course, students could still ask each other for answers or for help, but that was mostly fine—most students would still at least attempt it on their own, and ask their friends for help when needed. Because we could trust that a student's work was mostly their own, we got a lot of signal from how they did on it, allowing us to allocate a large portion of the grade to those homework assignments.

LLMs have flipped that model on its head. When students have instant, accurate answers at their fingertips that are not identical to past answers, it becomes impossible to extract signal from ChatGPT-generated noise. This forces the portion of the grade that was allocated to homeworks and other, similar non-proctored settings to be moved to proctored settings. 

For example, CMU's 15-122 (the first major CS class) has moved from having just homeworks and exams to having weekly check-in quizzes that are proctored. Those quizzes replace midterms, and for most students make up 70% of the grade.{% marginnote 'checkins' 'Students still have homework every week. At the end of the semester, the lower-averaging of homeworks and checkings makes up that entire 70%.' %} The final exam makes up the remainder of the grade. 

This is not the only class moving in this direction. Almost every non-systems core CS class has moved to give greater weight to proctored assesments, under the assumption that AI is being used and cannot be consistently caught. 

While this may be the best option, it is in my eyes the best of bad options. It harms students with test anxiety. If every class is doing this, it adds pressure on a weekly basis. Removing weight from homeworks will likely make students less motivated to spend time on them, particularly when there are bugs in their code or a problem that they're stuck on. However, at least for classes where this can be done it seems to be inevitable. 

For some classes, this shift is not practical. Systems classes and project based classes in general cannot shift as easily to having the majority of the course be proctored, because the homeworks **are the point** rather than just being an environment to learn a way of thinking or set of discrete skills. 

# Final thoughts
It's possible to restructure our courses to teach the same skills, and get signal from students' outputs in order to fairly assign grades. There is a broader question, however: whether we **should** be teaching the same skills anyways. Many people, students in particular, say no. They argue that we should teach classes with AI, because that's the way of the future. If software is to be written mostly by agentic coding tools, in their view, why do they need to study theory? 

I'd argue that they need to study it to understand the code being written, and to push the cutting edge. AI is great at generating boilerplate and simple apps. It's not great at designing end-to-end systems, or optimizing at the tail end of performance requirements today. It likely will get very good at that. More importantly though is that future developers **must** be able to understand what their code is doing and **why**. By 'why', I mean why a certain data structure or algorithm was chosen, and what tradeoffs or failure modes that choice may have. Just like treating an LLM  as a black box is dangerous, treating the code that it writes as one is too.

These two things—teaching core skills and how to work with modern tools—can co-exist. There's no reason a core algorithms class can't require students to do their own work, while other classes teach students how and when to use tools to accelerate development. There are also novel ways to incorporate these tools into the classroom, opening up ways of teaching that simply weren't possible before. For example, students can now act as TAs to LLMs, helping debug and answer questions. {% sidenote 'ta-for-llm' '[How to Teach Programming in the AI Era? Using LLMs as a Teachable Agent for Debugging](https://arxiv.org/abs/2310.05292), Ma et al., 2024'
%} Rapid feedback can be scaled beyond what was previously possible, allowing students to submit answers to (ungraded) questions and get feedback to help study. CITE All of these are potentially fantastic ways that AI can help improve education.

However, in the structure of courses themselves, change is needed. It is increasingly hard, if not impossible to consistently catch AI. Part of the solution is increasing the amount of proctored assessments where possible. The other piece is, where required, still banning AI. We say sometimes that we should not make a policy that we can't enforce. Not because it erodes the authority of the professors, but instead because it seems unfair to students who follow the rules. 

On the other hand, students lack the knowledge to know how to best use AI to enable their own learning, and sometimes the motivation to do so as well. Setting rules is a way to (strongly) encourage them in the right direction, even if it's not perfect. I don't claim that any of this is a comprehensive solution for every class. All it is is the direction I've seen our class going, and how I've seen CS education evolve just in my 4 years at CMU and 3-going-on-4 semesters TAing.


