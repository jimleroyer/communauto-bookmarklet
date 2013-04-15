Communauto Bookmarklet
======================

This was a mini-project to introduce myself to bookmarklets, jquery and node. It has this
practical use to show the car numbers on the Communauto listing. 

One Goal
--------

The Communauto bookmarklet only does one thing: show the car numbers in the 
'Availability Report' or 'Reservervation Grid' pages. These were recently removed and 
while it is still possible to know the numbers for the cars that were unreserved (by 
hovering the mouse over the link and analyzing the URI), this bookmarklet simplifies 
the task. It changes the 'Select' labels of all the available cars to include its 
corresponding number.

Hence there is no more guessing the car numbers. We can pick our favorite car just as
before.

How to install
--------------

Go to [this link](http://jimleroyer.github.io/communauto-bookmarklet/) and follow the 
instructions. It's dead simple. You just need to drag and drop a link to your bookmark 
browser bar. This will create the bookmarklet.

How to use
----------

Once you have the bookmarklet loaded in your bookmark bar, login to the Communauto page,
do your operations as usual. But once you get in either the 'Availability Report' or
'Reservation Grid' pages, hit the 'Communauto Bookmarklet' button (or menu). This will
execute Javascript code that will display the car numbers next to the 'Select' links.
This only applies for cars that were not reserved yet, as the car number is not available
on the client-side (i.e. in the browser) for already reserved cars.

Supported
---------

Only Chrome has been tested with so far. Bookmarlets should work across all modern browsers 
though. If you have a bug or want to request support for your favorite browser, open an issue.

Suggestions
-----------

I think there many improvement the Communauto website could use. If you have think so, and have
an idea, open an issue and we could have it done. 
