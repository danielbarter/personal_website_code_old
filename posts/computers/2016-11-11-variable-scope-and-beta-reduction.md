---
title: variable scope and beta reduction
date: 2016-11-11
---

# Variable Scope and Beta Reduction

This post is the first in a series about the semantics of functional programs and the runtime structures required to execute them on Von Neumann machines. Rather than exploring functional programming in the abstract, we will be looking at several toy languages and the challanges which need to be overcome to execute them on conventional computing hardware. Since we want to focus on semantics and not get bogged down in syntax, we will use Lisp style symbolic expressions for all of our langauges. Special identifiers will begin with a capital letter to distinguish them from variables, which will begin with a lower case letter.

In this post, we are going to study the Lambda calculus, a very simple functional language. We will explore beta reduction, the fundamental process which makes functional programs tick. The efficient implementation of beta reduction is the key issue which needs to be addressed when implementing a functional programming language.
