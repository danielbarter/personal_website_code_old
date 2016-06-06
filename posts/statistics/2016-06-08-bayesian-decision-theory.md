---
title: bayesian decision theory
date: 2016-06-09
---

# Bayesian Decision Theory

In the Bayesian approach to statistical inference, we study the joint distrubution 
over all the unknowns and the data. Inference is based on conditional distrubutions 
which are defined in terms of the joint distrubution. The unknowns can simply be real 
numbers parameterizing probability distrubutions or they can be something more complex 
like [graphical models](https://en.wikipedia.org/wiki/Graphical_model) which specify 
indipendence conditions. This means that subtle issues like model selection are built 
into the Bayesian framework, because the models themselves are parameters.

Since the output of pure Bayesian inference is always a probability distrubution, we 
need something more if we want to make a decision based on our data. Not suprisingly, 
the field which explores this problem is called Bayesian decision theory. In this 
post, we are going to explore the foundations of Bayesian decision theory.

### Loss functions

Let $X \in S$ be a random variable, $p(x|\theta)$ a statistical model parameterized by 
$\theta \in \Theta$ and $p(\theta)$ a prior distrubution. A loss function is a real 
valued function $\Theta \times \Theta \to \mathbb{R}$ and the corresponding decision 
function is given by
$$\delta(x) = {\rm argmin}_{\alpha} {\bf E}(L(\theta,\alpha) | x)$$
Intuitively, $\alpha$ is the choice of parameter which minimizes the expected loss 
given the data $x$. If the parameter space is discrete, then
$${\bf E}(L(\theta,\alpha)|x) = \sum_{\theta} L(\theta,\alpha) p(\theta | x)$$
There are many choices for the loss function. Here are some common examples:

- The error loss function:
$$L(\theta,\alpha) = \begin{cases} 1 & \theta \not= \alpha \\ 0 & \theta = \alpha \end{cases}$$
In this case, 
$${\bf E}(L(\theta,\alpha) | x) = \sum_{\theta \not= \alpha} p(\theta | x) = 1 - 
p(\alpha | x)$$
therefore $\delta(x) = {\rm argmax}_{\alpha} p(\alpha | x)$. In words, choose the 
parameter which most likely given the data.
- If $\Theta = \mathbb{R}$, we can use the least squares loss function:
$$L(\theta,\alpha) = (\theta - \alpha)^2$$
Then 
$${\bf E}(L(\theta,\alpha) | x) = \int_{\mathbb{R}} (\theta - \alpha)^2 p(\theta | x) d \theta$$
which is minimized when $\alpha = {\bf E}(\theta | x)$. Therefore, $\delta(x) = 
{\bf E}(\theta | x)$.
