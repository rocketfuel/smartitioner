ROCKET FUEL SMARTITIONER


OVERVIEW
========

## Why Smartitioner ##

Rocket Fuel Smartitioner helps to randomly split the retargeting pool for a web property between different DSPs, for easy and fair retargeting tests in Internet advertising. 

In the many bake-offs that Rocket Fuel has participated in and won over the years, we have found that a randomly split retargeting pool provides a much more level playing field for testing providers against each other than splits by DMA, by product or by other methods.

We have contributed this script to the open-source community as the best documented version ever, one that is incredibly easy to set up and that is guaranteed to always contain the latest code developments and documentation updates.

With the source code available in all openness, any competitor in a bake-off can check that the splitting of the retargeting pool is absolutely fair. At the same time, the open source license assures that all developers having worked on this script get the proper credit.

## What Smartitioner does ##

Smartitioner is a piece of JavaScript code that can easily be configured for the DSPs and advertising networks that the advertiser works with, and then plugged into the advertiser's website. 

Once a consumer lands on the site, the script we write into the pixel splits the audience out evenly (or in any given weight configuration) between two or more DSPs or advertising networks on the plan.

## How Smartitioner works ##

The script itself reads and writes a cookie in the advertiser's domain, to keep track of which partner this customer has been shared with.  By using a cookie to store this, no partner needs to see the retargeting traffic associated with the other partner, which helps ensure a fair test.

This same logic is applied on all pages throughout the site so there is no overlap of audiences. In other words, once a cookie is dropped and assigned to a partner it sticks and remains with that partner throughout the flight of the campaign--regardless of return visitation or multiple pages viewed.


INSTALLATION AND USAGE
======================

1. Open the `rocketfuel_smartitioner.js` file
2. Replace `[INSERT_FIRST_COMPETITOR_URL_HERE]` with the pixel tracking URL from the competitor without "http:" or "https:".
3. Replace `[INSERT_ROCKETFUEL_URL_HERE]` with the pixel tracking URL you have received from Rocket Fuel without "http:" or "https:".
4. Optional: add additional competitors by uncommenting (and duplicating if needed) the line in between the first competitor and Rocket Fuel.
5. Optional: Replace the numbers in `ROT.weights = ` with weights for the splitting ratio. For example:
    - A 50%-50% test would have `ROT.weights = [1, 1];`
    - A 90%-10% test (e.g. incumbent against new entrant) would have `ROT.weights = [9, 1];`.
    - A three-way 25%-50%-25% test would have `ROT.weights = [1, 2, 1];`.
    - You can use any integer value as long as there are exactly as many values as there are pixels defined in `ROT.pixels = [ ]`
6. Copy and paste the script into all pages except conversion pages.
7. IMPORTANT: ensure that each of the competitors _only_ gets data via the Smartitioner script:
    - Remove all pixels for each of the competitors from your Web site
    - If you use a tag manager, ensure that each competitor is removed from that as well.


QUESTIONS AND FEEDBACK
======================

The official repository for this code is <https://github.com/rocketfuel/smartitioner>. Of course you can also ask your Rocket Fuel account manager, if you work with us.


PRINCIPAL AUTHORS
=================

* Coding: Mark T, Nikolai R, Jason H, and soon other contributors like you?
* Documentation: Roland S, Nikolai R, Jon T, Mark T, Jason H, Randy H


ABOUT ROCKET FUEL
=================

Rocket Fuel is a digital-advertising technology company in Silicon Valley that has grown rocket-fast since its founding in 2008. The company is a leader in the emerging phenomenon of scientific advertising online. It combines a world-class engineering team with the industry's most productive sales and delivery teams. Its customers are some of the world’s most successful brands. Rocket Fuel serves them from its offices in 15 cities around the globe including New York, London, Toronto, and Hamburg.

In 2008 a group of data savants hailing from the biggest digital darlings came together with one simple mission: to make marketing easier and more effective for brands, and to give consumers a unique and relevant online experience. Four years later, we’re the fastest growing advertising technology company in Silicon Valley, and number 4 in Forbes’ Most Promising Companies in America, and one of the fastest growing listed Silicon Valley companies ever (NASDAQ:FUEL). Hard work has paid off!


LIKE AD TECH? JOIN US!
======================

We're not just hiring, we're hiring the best! Got what it takes? Join us: <http://rocketfuel.com/careers>


LICENSE
=======

COPYRIGHT (C) ROCKET FUEL INC. 2011-2014 - ALL RIGHTS RESERVED. 

THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THE ATTACHED ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT. 



 