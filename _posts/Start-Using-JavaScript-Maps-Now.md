---
title: "Start Using JavaScript Maps Now"
description: "Maps in JavaScript are more performant, easier to use, and better equipped than JavaScript objects."
thumbnail_bg: "#39c7c6"
date: "December 07, 2020"
tags: "Javascript"
---

How many times have you seen or written code that looks like this.

```javascript
const CURRENCY_MAP = {
  'United States': 'USD',
  'India': 'Rupee' 
}

const currency = CURRENCY_MAP['India']
```


There is nothing inherently wrong with this code, but when it comes to creating maps between two different values, objects and arrays are generally not the best option. This is where JavaScript Maps come in.

# Differences Between Objects And Maps

A Map in JavaScript is a class that allows you to store a value at a specific key, just like objects, but there are a few major differences that make Maps excel when being used as a map or dictionary.

# 1. Key Types

With objects you can pretty much only use strings as your keys, but a Map can have any value as a key. This means you can use an object, string, boolean, function, etc. as a key within a Map.

In order to create a map you need to pass it an array of arrays instead of an object. Also, the console.log for the map technically won’t print out this exact result since it returns an iterator instead of an array, but you can convert it to an array to get this result [...map.keys()].

# 2. Ordering
The order of the keys in an object is not reliable. It was not standardized until ES6 and the various ways to iterate over an object order the keys differently. Because of this you cannot accurately rely on key ordering in objects. Maps on the other hand have all their keys ordered based on when they were added to the Map similar to an array. This is can be useful when looping over Maps.

# 3. Iterating
Speaking of iterating, Maps are way easier to work with than objects. Objects do not have any built in iteration so in order to loop over the key/value pairs of an object you must use the following code Object.entries(obj). Maps on the other hand are iterable which means you can directly use methods like forEach on the map.

# 4. Length
Getting the length of an object is not easy. You need to manually calculate this value which is a pain. Maps on the other hand have a simple size property similar to arrays which tells you exactly how many key/value pairs are in the map.

# 5. Performance
Since Maps are designed specifically with the functionality of being a dictionary/lookup table they are optimized for frequent addition/removal of key/value pairs. Objects are the other hand are not optimized for frequent additions/removals of key/value pairs so a Map will be more performant if you are adding/removing a lot of key/value pairs.

# ow To Use Maps
So now that you understand the differences between Maps and objects, I want to talk about how you would go about using a Map.

# Creating A Map
You have already seen this in the previous example, but a Map is just a class which can be instantiated. If you don’t pass it any parameters then it will be an empty Map which is similar to an empty object. If you want to populate the Map with default values you will need to pass it any iterable value such as an array of arrays where the first value of the inner array is the key and the second value is the value for the key/value pair.
