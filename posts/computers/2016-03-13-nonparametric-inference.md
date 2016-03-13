---
title: non parametric inference
date: 2016-03-13
---

# Non Parametric Inference

Suppose that we have a data set $(x_i) \in \mathbb{R}^n$ produced from $n$ independent 
repetitions of an experiment. The mathematical model for this situation is $n$ 
independent identically distributed random variables $X_1,\dots,X_n \sim F$ for some 
[cumulative distribution 
function](https://en.wikipedia.org/wiki/Cumulative_distribution_function) $F$. What 
can we learn about $F$? We shall approach this problem from a frequentest perspective, 
so $F$ is some fixed unknown cumulative distribution function. Everything we are 
going to say can be found in the wonderful book [All of Non Parametric 
Statistics](http://www.stat.cmu.edu/~larry/all-of-nonpar/) by Wasserman.

### The Empirical Distribution Function

The most important random object in this setting is the **empirical distribution 
function**:
$$\widehat{F}_n(x) = \frac{1}{n} \sum_{i=1}^n \; {\bf 1}_{X_i \leq x}$$
It is the step function which jumps up $1/n$ whenever $x$ crosses one of the $x_i$ in 
our data set. The importance of the empirical distribution function stems from the 
[Glivenko-Cantelli 
theorem](https://en.wikipedia.org/wiki/Glivenko%E2%80%93Cantelli_theorem), which says 
that
$$\sup_{x} \lvert \widehat{F}_n(x) - F(x) \lvert \; \xrightarrow{P} \; 0$$
The $P$ stands for convergence in probability. Intuitively, this says that if the 
sample size $n$ is large, the probability that 
$\widehat{F}_n$ and $F$ are \"far apart\" is small. This intuition can be quantified 
as follows: Define
$$ L(x) = \widehat{F}_n(x) - \epsilon_n \qquad U(x) = \widehat{F}_n(x) + \epsilon_n 
\qquad 
\epsilon_n = 
\sqrt{\frac{1}{2n}\log \left( \frac{2}{\alpha} \right) }.$$
Then the [Dvoretzky-Kiefer-Wolfowitz inequality](https://en.wikipedia.org/wiki/Dvoretzky%E2%80%93Kiefer%E2%80%93Wolfowitz_inequality) 
implies that
$$ {\bf P}(L(x) \leq F(x) \leq U(x) \text{ for all $x$}) \geq 1 - \alpha. $$
The theory is nice, but the best thing is to see it work:
```{.python}
import numpy
import scipy.stats
import matplotlib.pyplot as pyplot
%matplotlib inline

mu, sig = 163, 7.3
distrubution = scipy.stats.norm(mu, sig)

sample_size = 1000
bin_size = 10
num_bins = sample_size // bin_size
sample = distrubution.rvs(sample_size)

pyplot.hist(sample, bins = num_bins, normed = True, cumulative = True)
None
```
This python code should be run inside a [Jupyter notebook](http://jupyter.org/). It 
takes 1000 independent samples from a normal distribution with mean 163 and standard 
deviation 7.3. It then plots the 
empirical distribution function as a histogram. The resulting graph looks very 
similar to the the cumulative distribution function for ${\rm N}(163,7.3)$.

### Plug In Estimators

Suppose that $\theta = \int_{\mathbb{R}} a(x) d F(x)$ is some statistic we are 
interested in. The corresponding **plug in estimator** is defined to be
$$\widehat{\theta}_n = \int_{\mathbb{R}} a(x) d \widehat{F}_n(x) = \frac{1}{n} 
\sum_{i=1}^n a(X_i)$$
The [weak law of large numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers) 
tells us that $\widehat{\theta}_n$ converges in 
probability to $\theta$. We say that $\widehat{\theta}_n$ is a **consistent 
estimator** This says that if $n$ 
is large, the probability of 
$\widehat{\theta}_n$ and $\theta$ being far apart is small. We can produce a 
confidence interval using the [central limit 
theorem](https://en.wikipedia.org/wiki/Central_limit_theorem). The central
limit theorem says that
$$\frac{\widehat{\theta}_n - \theta}{\sqrt{{\bf V}_F(\widehat{\theta}_n)}}
\xrightarrow{D} N(0,1)$$
The $D$ stands for convergence in distribution. As long as $n$ is large, then
$${\bf P} \left(- \epsilon \leq \frac{\widehat{\theta}_n - \theta}{\sqrt{{\bf
V}_F(\widehat{\theta}_n)}} \leq \epsilon \right) \thickapprox {\bf P}(-\epsilon \leq
Z \leq \epsilon) \qquad Z \sim N(0,1)$$
There is a problem: The value ${\bf V}_F(\widehat{\theta}_n)$ depends on the 
distribution $F$, which is unknown to us.

### The Bootstrap

The Bootstrap is a sneaky way to estimate the value ${\bf V}_F(\widehat{\theta}_n)$. 
Suppose that we have our sample $(x_i) \in \mathbb{R}^n$. The empirical distribution 
$\widehat{F}_n$ puts mass $1/n$ at each data point $x_i$. The trick is to estimate 
${\bf V}_{F}(\widehat{\theta}_n)$ with ${\bf V}_{\widehat{F}_n}(\widehat{\theta}_n)$ 
which is computed as follows:

1. Produce a $h \times n$ array sampled uniformly at random from $(x_i)$. 
2. Apply $a$ to every entry, sum up the rows and divide them by $n$.
3. Compute the variance of the resulting vector in $\mathbb{R}^h$.

If we make $h$ very large, the weak law of large numbers tells us that the result is 
going to be very close to ${\bf V}_{\widehat{F}_n}(\widehat{\theta}_n)$.


