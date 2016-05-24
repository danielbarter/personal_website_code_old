---
title: the metropolis-hastings algorithm
date: 2016-05-27
---

# The Metropolis-Hastings Algorithm

Suppose that $S$ is a set, $\{ p(s \lvert \theta) : \theta \in \Theta\}$ is a family 
of distrubutions on $S$ and $p(\theta)$ is a prior distrubution on $\Theta$. If we 
observe $s \in S$, then the posterior distrubution for $\theta$ is given by
$$p(\theta \lvert s) \propto p(s \lvert \theta) p(\theta).$$
The posterior distrubution captures the information we learn about $\theta$ from 
observing $s$. Therefore computing $p(\theta \lvert s)$ is of central importance. If 
$p(s \lvert \theta)$ is simple and $p(\theta)$ is a [conjugate 
prior](https://en.wikipedia.org/wiki/Conjugate_prior), then computing the posterior 
distrubution is easy. In practice, the statistical model $\{ p(s \lvert \theta) : 
\theta \in \Theta \}$ can be very complex.  In this post, we shall describe a 
simplified version of the [Metropolis-Hasting 
algorithm](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm) for 
sampling from the posterior distrubution $p(\theta \lvert s)$. We shall suppose that 
$S$ and $\Theta$ are finite sets. 
