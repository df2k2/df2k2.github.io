---
youtube_id: 4q43-auwAbU
duration: "4:20"
group: "Fundamentals of Adobe Commerce Development"
title: "How to Add a JavaScript Module"
thumbnail: "fundamentals/thumbs/add-js-module.png"
menu_order: 1
github_link:
---

Adobe Commerce uses requireJS as a tool to define the module structure.
However, in addition to requireJS, Adobe Commerce also has its own unique way to execute JavaScript code.
You’ll see this in the example we’re using.

We will develop a very simple JavaScript module that only provides the greeting “HELLO WORLD!”.
It will illustrate how Adobe Commerce works with JavaScript files, executing the code and passing parameters inside a script.
The steps we’ll need to take are:

1. Create a new module.
2. Create a requirejs-config.js and a JavaScript module file.
3. Create a layout update to add a template that will enable the JavaScript module.
4. Create a template file.
5. Add the module and test it.

Let’s go through each step.

