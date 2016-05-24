---
title: the metropolis algorithm
date: 2016-05-27
---

# The Metropolis Algorithm

Suppose that $S$ is a set, $\{ p(s \lvert \theta) : \theta \in \Theta\}$ is a family 
of distributions on $S$ and $p(\theta)$ is a prior distribution on $\Theta$. If we 
observe $s \in S$, then the posterior distribution for $\theta$ is given by
$$p(\theta \lvert s) \propto p(s \lvert \theta) p(\theta).$$
The posterior distribution captures the information we learn about $\theta$ from 
observing $s$. Therefore, computing $p(\theta \lvert s)$ is of central importance. If 
$p(s \lvert \theta)$ is simple and $p(\theta)$ is a [conjugate 
prior](https://en.wikipedia.org/wiki/Conjugate_prior), then computing the posterior 
distribution is easy. In practice, the statistical model $\{ p(s \lvert \theta) : 
\theta \in \Theta \}$ can be very complex.  In this post, we shall describe the 
[Metropolis 
algorithm](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm) for 
sampling from the posterior distribution $p(\theta \lvert s)$. Refined versions of 
this algorithm drive many Bayesian software libraries like 
[pyMC](https://pymc-devs.github.io/pymc/) and 
[winBUGS](https://en.wikipedia.org/wiki/WinBUGS). To make the mathematics easier, we 
shall assume that $S$ and $\Theta$ are finite sets. In practice, $\Theta$ is usually a 
high dimensional manifold.

### Markov Chains

A [Markov chain](https://en.wikipedia.org/wiki/Markov_chain) on $\Theta$ is defined by 
a matrix $K(\alpha,\beta)$ with 
$K(\alpha,\beta) \geq 0$ and $\sum_{\beta} K(\alpha,\beta) =1$. The matrix $K$ 
specifies a random walk on $\Theta$: If you are at $\alpha$, step to $\beta$ with 
probability $K(\alpha,\beta)$. If you are at $\alpha$, then the probability that you 
arrive at $\beta$ after $n$ steps is $K^n(\alpha,\beta)$. We call $\pi(\alpha)$ a 
*stationary distribution* for the Markov chain if
$$\sum_{\alpha} \pi(\alpha) K(\alpha,\beta) = \pi(\beta).$$
If for some $N$, every entry of $K^N$ is positive (the Markov chain is *connected*), 
then the Markov chain has a unique stationary distribution $\pi$ and 
$$K^n(\alpha,\beta) \to \pi(\beta).$$

### The Metropolis Algorithm

Let $J$ be a Markov matrix on $\Theta$ and $\pi$ a probability distribution on 
$\Theta$. Set $A(\alpha,\beta) = \pi(\beta) J(\beta,\alpha) / \pi(\alpha) 
J(\alpha,\beta)$. Then we can define a new Markov matrix by
$$
K(\alpha,\beta) = \begin{cases}
J(\alpha,\beta) & \alpha \not= \beta, A(\alpha,\beta) \geq 1 \\
J(\alpha,\beta) A(\alpha,\beta) & \alpha\not= \beta, A(\alpha,\beta) < 1 \\
J(\alpha,\beta) + \sum_{\gamma:A(\alpha,\gamma) < 1} J(\alpha,\gamma) (1 - 
A(\alpha,\gamma)) & \alpha=\beta
\end{cases}
$$
This formula looks complicated, but you can check that $\pi(\alpha) K(\alpha,\beta) = 
\pi(\beta) K(\beta,\alpha)$ which implies that $\pi$ is a stationary distribution for 
$K$. If we take $\pi(\alpha) = p(\alpha \lvert s)$, the posterior distribution, then
$$A(\alpha,\beta) = \frac{p(\beta|s) J(\beta,\alpha)}{p(\alpha|s) J(\alpha,\beta)} = 
\frac{p(s|\beta) p(\beta) J(\beta,\alpha)}{p(s|\alpha) p(\alpha) J(\alpha,\beta)}$$
Therefore, the Markov matrix $K$ is determined by the prior distribution and the 
statistical model. Its stationary distribution is the posterior distribution. 
