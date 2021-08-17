---
title: "CSS Floats Are Still Useful"
description: "A short explanation on how CSS floats are still useful."
thumbnail_bg: "#dfd552"
date: "November 09, 2020"
tags: "CSS"
---

When you think of CSS floats you probably immediately think of old and out of date CSS layouts. This is technically correct since many sites used floats and clearfixes in order to create layouts before flexbox and grid, but float can still be used for modern applications.

# How Floats Work
Since floats have a bad reputation for being abused in layouts many people don’t learn floats. This leads to a lot of confusion around how floats work and most developers just don’t use floats to avoid this confusion. Floats are really useful, though, when it comes to flowing content around another piece of content. The most common use case is flowing text around an image.

The above layout is incredibly easy to achieve with floats, but very difficult without. Here is a simplified version of the HTML/CSS for the above code.

This code is telling our img to float to the left side of the page. This means it leaves the normal document flow and moves to the left of all other content. Then the remaining content will flow around the img getting as close as possible on all sides.

We could also float to the right instead.

You will notice that even though the image is declared first in the HTML it still shows up after the text on the right. This is because floats break out of the normal document flow and ignore HTML ordering to force the floated element to be as far left or right as possible. It is important to note, though, that elements will only wrap around floated elements if they appear after the floated element in the HTML. If the img is defined after the p then the p will not flow around the floated img.

If we wanted to have no float we could do that by setting the float to none which is the default value for float.

# Clearing Floats
We can set a float to none in order to stop the text from floating around an element but we can also use the clear property to prevent the text from flowing around the image as well. Lets use the following example to explain.

Let’s say that we want the text to only wrap around the left side image and not the right. We could just set the text to have a clear of right.

As you can see above the text no longer flows around the right image and instead starts below it. We could do the same for the left as well.