---
title: fisher metric
date: 2016-04-30
---

# The Fisher Metric

The [Cramer-Rao Bound](https://en.wikipedia.org/wiki/Cram%C3%A9r%E2%80%93Rao_bound) is 
a fundamental result in parametric inference. In this post, we are going to begin our 
journey towards a proof which uses tools from differential geometry.

Let $X$ be a random variable and $f(x,\theta)$ a family of possible distrubutions for 
$X$, parameterized by $\theta \in \Theta$, where $\Theta$ is a manifold. If 
$\alpha,\beta \in T_{\theta} \Theta$, then we define
