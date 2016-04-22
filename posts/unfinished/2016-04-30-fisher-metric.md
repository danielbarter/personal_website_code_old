---
title: fisher metric
date: 2016-04-30
---

# The Fisher Metric

The [Cramer-Rao Bound](https://en.wikipedia.org/wiki/Cram%C3%A9r%E2%80%93Rao_bound) is 
a fundamental result in parametric inference. In this post, we are going to begin our 
journey towards a proof which uses tools from differential geometry.

Let $X$ be a random variable and $f(x,\theta)$ a family of possible distrubutions for 
$X$, parameterized by $\theta \in \Theta$, where $\Theta$ is a manifold. The Fisher 
information metric is defined to be
$$g = {\bf E}[(d_{\theta} \log f(X,\theta))^2].$$
The map $\theta \mapsto \log f(X,\theta)$ is a random function on $\Theta$ and 
$d_{\theta} \log f(X,\theta)$ is a random 1-form on $\Theta$. The square $(d_{\theta} 
\log f(X,\theta))^2$ is a random symmetric 2-cotensor on $\Theta$. Formally, 
$(d_{\theta} \log f(X,\theta))^2$ has rank 1, but recall that expectation satisfies 
${\bf E}(XY) = {\rm Cov}(X,Y) + {\bf E}(X) {\bf E}(Y)$. This implies that the 
expectation of a tensor product of two non indipendent 1-tensors has rank greater 
than $1$. In most cases of interest, $g$ is non degenerate. Clearly, $g$ is positive 
definite, therefore $g$ is a Riemannian metric on the parameter manifold $\Theta$. 
