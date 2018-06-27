---
layout: note
title: "Sieve Of Eratosthenes"

---

# Introduction 

As the name suggests the greek Mathematician Eratosthenes developed an algorithm to find a list of prime numbers lesser than a number.

> A Prime number is one which has just itself and 1 as factors.
> Smallest Prime number is 2

# How it works

There are a small concepts involved. 
- The Algorithm: Once a number is found to be a prime, which is lesser then the chosen number, we can cancel out multiples of the number itself , coz they all will be consonants. Once you go through the loop, you eliminate those cancelled numbers and what you have left is a list of prime numbers.

- An Optimisation: Every non prime number (consonant) has factors which always appear in a set of atleast 2. And atleast one of them has a value less than square root of the number. Hence while checking for prime, we dont need to check for factors right till the number itself, just till its square root.

The Pseudocode is given below:

<script src="https://gist.github.com/abhishekbalam/2654f396341bc349610672dfff759b1a.js"></script>

# Code

## Java

<script src="https://gist.github.com/abhishekbalam/8f078694f797bc46c49b9ab43a7a69f3.js"></script>

## Python

<script src="https://gist.github.com/abhishekbalam/88574208b0d336273c4035a592558899.js"></script>