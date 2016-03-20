---
title: categorial semantics of type theory
date: 2016-03-20
---

# The Categorial Semantics of Type Theory

In mathematical logic, A **deductive system** consists of

- A collection of judgments denoted $J_1,J_2,\dots$
- Rules of inference denoted by $$\frac{J_1 \quad J_2 \quad \dots \quad J_p}{J}$$

A type theory is a deductive system with two kinds of judgments:

- Typing judgments denoted by $$x_1 : A_1, \dots, x_p : A_p \vdash t(x_1,\dots,x_p) : A$$
- Equality judgments denoted by $$x_1 : A_1, \dots, x_p : A_p \vdash t(x_1,\dots,x_p) 
\equiv s(x_1,\dots,x_p) : A$$

We read $x : A$ as $x$ has type $A$. The rules of inference vary greatly from type 
theory to type theory. Examples include:

$$\frac{}{x : A \vdash x : A} \qquad 
\frac{x : A \vdash f(x) : B \quad y : B \vdash g(y) : C}{x : A \vdash g(f(x)) : C} $$

I am interested in type theories because they can be used to design functional 
programming languages and they often have transparent categorial semantic models. A 
[category](https://en.wikipedia.org/wiki/Category_%28mathematics%29) has objects and 
morphism sets. 

- The types of a type theory are interpreted as objects. 
- The judgment $x_1 : A_1, \dots, x_p : A_p \vdash t(x_1,\dots,x_p) : A$ is 
interpreted as a morphism $t : A_1 \times \dots \times A_p \to A$
- The judgment $x_1 : A_1, \dots, x_p : A_p \vdash t(x_1,\dots,x_p)
\equiv s(x_1,\dots,x_p) : A$ is interpreted as the morphisms $s$ and $t$ are equal in 
the morphism set.
- The rule of inference $$\frac{}{x : A \vdash x : A}$$ says that every object has an 
identity morphism.
- The rule of inference $$\frac{x : A \vdash f(x) : B \quad y : B \vdash g(y) : C}{x : 
A \vdash g(f(x)) : C}$$ says that we can compose morphisms.

A good introduction to these ideas is the [homotopy type theory book](http://homotopytypetheory.org/book/)
