<img src="https://camo.githubusercontent.com/b8ecf54b15f51c7c992d6fce003b661c96d8acec/68747470733a2f2f63646e2e7261776769742e636f6d2f6172746966696369616c696f2f73616e652f67682d70616765732f5f696e636c756465732f73616e652d6c6f676f2e737667" width="400"/>

[![Gitter](https://badges.gitter.im/Join+Chat.svg)](https://gitter.im/artificialio/sane?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) ![Travis Build Status](https://travis-ci.org/mgenev/how-to-sane.svg?branch=master)
How to SANE
==========================
The official demo app of how to use the SANE stack https://github.com/artificialio/sane. This is also the main experiment laboratory for prototyping and spinning off sane add ons.

Please keep in mind that this project is 'canary'. For the sake of adopting new features as early as possible,  it is developed using the latest unstable versions of everything like ember canary, es6, iojs etc. This will definitely cause instability.

Currently demonstrated features:

+ CRUD - API with a SPA client
+ User authentication
+ Data relationships
+ File uploads
+ Photo gallery and viewer 
+ Server connected UI components
+ Data bound modals
+ Basic CMS functionality (being built) 
+ Many more coming

How is it made?
==========================

### Core components

+ Node - Server Side
+ Sails - Web Server Framework
+ Ember - Client Side MVC Framework
+ MongoDB - Database

### Additional Tools Available
+ Bootstrap - front end framework
+ SASS - CSS pre-processor
+ Passport - User Authentication
+ GraphicMagic - Image manipulation

Installation:
==========================
1. Follow the steps to install and run the SANE stack - https://github.com/artificialio/sane
2. Install and run MongoDB - http://docs.mongodb.org/manual/installation/
3. Install imagemagic and graphicmagic like shown: https://github.com/aheckmann/gm
4. Clone repo
5. bower install on client and npm install  on both the client and the server directories
6. 'sane up' to start both the client and the server
7. Browse app at localhost:4200

Support:
==========================
If you have questions about this project, come to the chat for the SANE stack https://gitter.im/artificialio/sane

### License 
How-to-SANE is [MIT Licensed](https://github.com/mgenev/how-to-sane/blob/master/LICENSE.md).

Copyright (c) 2014 Gemini Connect LLC

[gitter-badge-url]: https://gitter.im/artificialio/sane?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
