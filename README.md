# Kodilla-Bootcamp

Module 1
HTML Structure with CSS styling
HTML
Theory: How does Websites work? What is HTML?
Practice: First 'website'

CSS
Theory: Selectors, connecting CSS to HTML, Frequently Used Styles, colors, Box Model
Practice: Lifting 'website' from 1.1 exercise

Basic Website
Theory: HTML5 semantic and structure in practice, designing, cascade CSS
Practice: Create website basing on photography

Module 2
CSS practice
Advanced properties
Theory: CSS3, comments, formatting, elements naming (BEM, SMACSS, SUITCSS), block/inline elements, float, align, clear, position (static, realtive, absolute, fixed), many elementns selectors (nesting, grouping, siblings), pseudoclasses, n-th child

Fixed two-level menu
Theory/Practice: Creating horizontal menu with able to expand and view on second level

Gallery based on float with jumbotron
Theory/Practice: Basing on instructions, create gallery with button on it center

Buttons with gradient and animation
Theory/Practice: Basing on instructions, using transition and some background properties, create 3 buttons which are responsing on hover

Star with filling, appearing after hovering
Theory/Practice: Using transform propertie, pseudoclasses, font-awesome icons, create animation as said in the a topic of the subsection

Social media panel
Theory/Practice: Using transform propertie, pseudoclasses, font-awesome icons, create panel as said in a topic of the subsection

Module 3
PSD to HTML layout
How does PSD cutting process looks like?
Theory: Choosing program to cut projects, prototype driven development (style guide insted of finished graphic project) with Boostrap/Foundation, most important graphic parts (logo, welcome section photo, icons), graphical extensions, term support for chosen browsers(tools like Can I Use, BrowserStack), pixel perfect, 'fillers' (lorem ipsum, stocksnap), CMS (aspect of connecting front-end to server), UAT (User Acceptance Testing)

Layout building
Theory: Layout patterns with RWD, good practises (KISS, choose known patterns, set the hierarchy, do not make users think, making text readable, WebAIM, Grid (creating own one using box-sizing), clearfix, reusable styles, css-tricks/codepen as examples of open community work exchange
Practice: Create layout with grid which contains offsets

Cutting commercial project
Theory: *Getting to know the client's requirements (layout, interactions, date of realisation), finding problems that may occur during implementation, page layout and element distribution analysis, draw a page grid and convert it to html/css structure. Finding global styles, ... *
Practice: Based on instructions and PSD, create working site

Additional project
Practice: Based on PSD, create working site

Module 4
Responsive layout
How does it work?
Theory: AWD (separate projects), RWD (Graceful degradation, Progressive enhancement), Web/Mobile

How to do it?
Theory: Media queries, breakpoints, logic operators, viewport, grid, units, graphic

Creating website based on RWD
Theory: Planing HTML structure of Desktop-First project (float & clearfix version), testing efficinecy
Practice: Building website

Upgrade existing site's code to RWD standards
Theory: Global styles, mobile-first, coding step-by-step
Practice: Upgrading website from 3.3 exercise to RWD standards

Flexbox
Theory: What is flexbox, terminology, how to use it
Practice: Basic gallery-style component

Module 5
Bootstrap (3.x)
Features
Theory: What is a software framework? When do we need this? Another frameworks (Foundation, Semantic UI). Popular libraries (Animate CSS, Reset, Normalize)

How to use Bootstrap?
Theory: Documentation, local version vs CDN, choosing version of Bootstrap

Auxilery classes Theory: Grid, typography, tabels, forms, graphics, buttons, responsive classes
Practice: Basic (Bootstrap 3.x) website

Bootstrap CSS components
Theory: (Fixed) Navbar, Jumbotron, Panels, Thumbnails, Media object, List group
Practice: Modify previous exercise through adding components learned during this chapter

Bootstrap JS components
Theory: Carousel, Modal, Tabs, Collapse, Dropdown, Tooltip
Practice: Basic site based on components from this chapter

Module 6
Sass in practice
Preprocessor CSS
Theory: What is preprocessor, how does it work, popular ones (Sass, Less, Stylus)

Properties and syntax
Theory: SCSS Syntax, variables, nesting, importing, mixins, extending rules, operators
Practice: Converting CSS file from 4.4 exercise to SCSS syntax through using features of Sass

Installing Sass
Theory: Ruby-version, Koala App

Compilation
Theory: Running Sass through command line

Module 7
Developer tools
Developer environment
Theory: Structure of working directory, code editor, terminal, version control system(Git), package manager(NPM), task runner(NPM-based self-made task-runner), alternatives

Git - basics
Theory: Installation, configuration, repository initialization, commits manipulation, commits-name good practises, tags, commits comparison
Practice: Creating repository with few commits and comparing them with diff

Remote Git repository
Theory: Github/Gitlab/Bitbucket, SSH, Github usage instruction, git remote/clone, git push/pull, workflow
Practice: Creating repository on Github

Teamwork with Git/Github
Theory: Branches, merging, teamwork scenario, conflict solving, Gitignore, Stash, Github pages

NPM
Theory: Node.js & packages installation, node_modules structure description

Building own task-runner
Theory: Scripts, basic tasks: Build/Watch/Test, Init-project, source map, packages: onChange, npm-run-all, ...
Practice: Developing task-runner from previous exercises

Simple landing-page
Practice: Creating website (PSD to HTML) with RWD standards and Sass

Module 8
JavaScript introduction, part 1 (ES5)
JavaScript - basic informations
Theory: Online editing tools, what it's for, possibilities, tools based on JS (GruntJS, SPA Frameworks, React/Angular, ...)

First steps
Theory: script.js, comments, variables, console.log/ alert
Practice: Script which runs alert on screen (Hello World)

Work environment
Theory: choosing code editor, jslint/jshint, checking errors
Practice: Installing JSlint

Beginning, another first steps
Theory: Attaching a script to the page, debugging, typical errors, comments (inline, block), fun extensions (dogescript)
Practice: Adding comment to script.js

Type of data and variables
Theory: How to declare, default value, camelCase, string/boolean/numbers/arrays/..., operations, incrementation, ...
Practice: Find value of triangle area with JavaScript

Conditional instructions
Theory: Logical operators (==, ===, ||, &&. ...), if, if-else, switch (-case, -break, -default), short if
Practice: Creating equation with JavaScript

Module 9
JavaScript introduction, part 2 (ES5)
Functions
Theory: Function syntax details, declaration, execute, parameters, good practises (SOLID), naming rules
Practice: Creating function which calculate trialngle area, through values from parameters

Arrays
Theory: Array basic methods(length, toString(), join(), push(), pop(), splice(), concat(), indexOf(), map(), filter()), elements manipulation
Practice: Connecting arrays through concat() method, simple manipulations on elements

Strings
Theory: String basic methods(length, charAt(), indexOf(), slice(), substr(), replace(), toUpperCase(), toLowerCase(), split()
Practice: Manipulation on string object by known methods

Loops
Theory: For/while/do-while/for-in(loop through object atributes) loop syntax details, break/continue
Practice: Building tree through loop-based algoithm

DOM
Theory: DOM as API and its most important properties: window w/ -methods-> setTimeout, clearTimeout, clearInterval, setInterval, onload, location; document w/-methods-> (getElementById, .getElementsByClassName, .getElementsByTagName, .nextElementSibling, .createElement), methods of document' elements -> (innerHTML, appendCHild, className, style)
Practice: Construct program that iterate through DOM elements

Events
Theory: addEventListener -> document.(element)' method (EventTarget), example types of events (click, keypress, mouseenter, resize, load, ...) -> Event attribute: target, listener
Practice: Creating list of document elements using addEventListener

Rock–paper–scissors - designing and coding first application
Theory/Practice: Conceptualization process of designing game: assumptions for logic and interface, step-by-step implementation of described parts (html structure, game title and initialization, player interaction with interface, score table, logic, changing values during the game, draw computer action, attaching scores), using basic State concpet, looking for potential problems

Another simple landing-page
Practice: Creating website (PSD to HTML) with RWD standards and Sass

Module 10
jQuery
DOM manipulating
Theory: Mechanism of DOM -> (nodes, DOM in DevTools, handler action as reaction for DOM change), events -> (callbacks), first view at jQuery syntax, bubbling(default)/capturing, jQuery history

jQuery introduction
Theory: Attaching jQuery CDN in HTML, boilerplate, onload/IIFE jQuery version, distniction between DOM and jQuery Wrapper, .eq() method, creating new elements with $, iterating (method .each()), styling (.css() method), chaining methods, movement through elements (.find(), .last(), .first() ), manipulations
Practice: Basic operation on DOM through jQuery wrapper using known methods

jQuery events
Theory: Alternative for addEventListener through jQuery methods, preventDefault(), event delegation (simplifying listening for whole groups of elements by indicating a parent element), effects (slideToggle, fadeIn, fadeOut), plugins (fullPage.js, Particles.js, jQueryUI - collection of widgets)
Practice: Creating own carousel plugin using asynchronous methods, .animate(), css(), find(), after()

Module 11
Object-Oriented Programming - basic concepts
Popular paradigms of programming
Theory: Approximating meaning of procedural, structural(e.g. sequence, choice option, looping), imperative(how should be done), declarative(descraibing the way of operation), functional(math descriptions) and object-oriented paradigms; JS as multiparadigmatic language, joining imperative, functional and object-oriented features

Pros of OOP
Theory: Our observation world through objects as primary advantage of learning this paradigm

Introduction to class concept
Theory: Class as blue-print, object as creation based on class

OOP in practice - implementation concepts in code
Theory: Primitives as values and way of managing it in memory (string, number, boolean, null, undefined), literals as a way of declaring variable which contain primitive - it is some kinf of representation and initilizer, presented as list with its own syntax/special charts; another way of declaration: constructors (with key-word "new" for creating new instance and 'this' as context) - special functions; prototypes (as a way to avoid excessive amount of methods when creating much instances)
Practice: Creating 'class' Phone and few instances of it

Context - this
Theory: *What is context, giving context, loosing binding (and way to solve: self), identyfing problems, *
Practice: Using jQuery and objects with prototypes, simulate loss of context and repairing it through 'self'

Kanban App
Theory/Practice: Create application based on conception, which include: basic mockup, an example to follow (Trello), characterizing the application as a set of objects and their methods (table, columns, sticks), basic assumptions of implementation (using jQuery, every stick as object with unique ID, ...), description of 'classes'(constructors)/objects/methods/events

Module 12
AJAX and API
HTTP Protocol
Theory: Scratching concepts of: Internet, IP, Request/Response, HTTP Protocol (headers, methods - get, post, put, delete, head), code of responses

AJAX - Asynchronous Javascript And XML
Theory: AJAX as a technology, basing on XMLHttpRequest. Benefits of using AJAX: possibility to create apps, which are reloading only these parts that we want to, instead of reloading full site

Distinction between synchronous and asynchronous in JavaScript
Theory: Synchronous: the program is executed linearly, functions are performed after performing the previous ones, as they appear in code; asynchronous: using event loop, what results possibility to moving execution of functions over time

Description of XMLHttpRequest
Theory: Stages of using the XMLHttpRequest object: creating instances, implementing methods (sending queries, listening and receiving answers from the server, etc.), JSON(stringify, perse)
Practice: Using XMLHttpRequest, send querie to server to get back joke about Chuck Norris

AJAX with jQuery
Theory: Setup AJAX request with jQuery.ajax()
Practice: Create random quote machine with jQuery. Basing on project assumptions, creating code structure, which uses jQuery AJAX. The program consists of: URL adresses, quotes downloading mechanism

API - Application Programming Interface
Theory: API as a way to communicate between components of application, which allows to use methods created by programmers, without knowning about way of implementation these methods by user. jQuery is an example of API. To communicate with API we use endpoints (URLs), that return data after implementation. Documentation as an instruction for using API. RESTful API - Representational State Transfer (standardized version of implementation API, which helps in creating and using interfaces), containing the following rules: 1)A trailing forward slash (/) should not be included in URIs (Uniform Resource Identifier); 2)Forward slash separator (/) must be used to indicate a hierarchical relationship; 3)Hyphens (-) should be used to improve the readability of URIs; 4)Underscores (_) should not be used in URIs; 5)Lowercase letters should be preferred in URI paths; 6)File extensions should not be included in URIs. Description of resource (an object with a type, associated data, relationships to other resources, and a set of methods that operate on it. It is similar to an object instance in an object-oriented programming language, with the important difference that only a few standard methods are defined for the resource (corresponding to the standard HTTP GET, POST, PUT and DELETE methods), while an object instance typically has many methods) and collections. Authentication (HTTPS, cookies, OAuth)
Practice: Create country search engine with use of jQuery AJAX. Use the API 'rest countries', extend by some resources available on API documentation

Kanban App - extended version
Theory/Practice: Refactor code of App to the form which use XMLHttpRequest methods and use API from Kodilla website. Enter authentication

PSD to HTML - extended landing page
Practice: Create website, which contain animations and RWD, reproducing the PSD project as accurately as possible

Module 13
Node.js - first attempt
NodeJS description
Theory: Node.js as "JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient". The syntax and semantics of the language describe the so-called standards. JavaScript as an implmentation of standards (Standard->Language->Enginge->Environment)

NodeJS instalation
Theory: LTS as long term support version

NodeJS indtroduction
Theory: Global objects in Node.js: global (object with global access, similiar to 'window' in browsers), process (global access, method of global. Similar to 'document' in browser environment)
Practice: Creating app, which are able to receive and return user data (with stdin/stdout), has own-defined command, are throwing errors in console

Module design pattern - introduction
Theory: Each module has its own purpose, functionality and interface. Three most popular implementations of modules in JS: CommonJS (which uses 'require' method), AMD and NativeJS (ES6). All modules (implemented in Node) should have documentation
Practice: Using the 'os' module in a simple program that has to show info about the computer of user. Creating own module, based on 'os' module. Creating module, which are formatting tinme in proper way

NPM introduction
Theory: Reminder about NPM functionality
Practice: Including package downloaded from NPM to project as a module and use based on documentation

Events in Node.js
Theory: Event loops allow to register callbacks and setting time of their running. Description 'Events' module (similar to events in browsers, but oriented about requests/responses) and its 'class' - EventEmmiter, which helps in avoidance 'callback hell' (big similiraity to 'on' method of jQuery or classical 'addEventListener()'). 'emit' method emit event

File System - module
Theory: Methods of fs: Stats (checking availability of access to files or their existance in system and show information about), stat-mode, readFile/wirteFile/appendFile, Buffer as default format of reading/writing files. Possibility to avoid series of nesting
Practice: Create function, that read content od filder (with fs.readdir) and save it to file with fs.writeFile

HTTP - module
Theory: Remaining about HTTP protocol, headers and response codes. Implementation HTTP server with 'http' module and 'createServer' (which 'containt' eventEmitter) method. Stream and an implementation of EventEmmiter which contain methods to read, write or two-way communication
Practice: Using fs and http modules, create app which will be used for servering static files

Creating page to upload files or images
Theory/Practice: Initialize server and include Nodemon NPM package to avoid need of manual restarting after making changes. Splitting file structure on the modules. Using http module, set up requesting and responsing queries. Configuration few types of requests: '/', '/start', '/upload'. Creating basic form to upload images and naming it through the content entered by the user, operated by 'formidable' module

Module 14
ReactJS
A brief history of web development as a purpose to create frameworks
Theory: Static sites (HTML and CSS) -> dynamic sites (AJAX) -> jQuery (unification of interface) -> 'Internet Application' = new problems -> creating frameworks and libraries (as Angular and React)

React basics
Theory: Static sites (HTML and CSS) -> dynamic sites (AJAX) -> jQuery (unification of interface) -> 'Internet Application' = new problems -> creating frameworks and libraries (as Angular and React)

Module 15
ES6 & React
Module 16
Webpack & To-Do App Project
Module 17
ExpressJS & Game Project
Module 18
Chat App Project
Module 19
Redux
Module 20 
React-Router
Module 21 
MongoDB
Module 22
Mern.io
Module 23 
Kanban built with Mern.io
Module 24
Unit test Jest Enzyme
