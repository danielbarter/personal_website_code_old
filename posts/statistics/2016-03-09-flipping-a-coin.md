---
title: flipping a coin
date: 2016-03-09
---

# Flipping a Coin

A few weeks ago, I was exposed to my first large data set. It made me want to learn 
some statistical theory. 

Suppose that you have a coin. You flip it $n$ times and record the number of heads. 
What can you say about the coin?

### The Frequentist Approach

The coin has some fixed unknown probability $\phi$ of landing heads. Consider the 
following experiment: flip the coin $n$ times. Let $H$ be the number of heads. We want 
to estimate bounds on $\phi$. One way to do this is by finding functions $f,g$ such 
that
$${\bf P}(\phi \in [f(H),g(H)]) \geq 0.95 \qquad \text{for all $\phi$}$$
In English, this says that we are 95% sure that $\phi$ lies between $f(H)$ and $g(H)$. 
We call $[f(H),g(H)]$ a **confidence interval**. The value $0.95$ was chosen to make 
things more concrete. It follows from [Hoeffding\'s 
Inequality](https://en.wikipedia.org/wiki/Hoeffding's_inequality) that if 
$X_1,\dots,X_n \sim {\rm Bernoulli}(\phi)$ are independent, then for any $\epsilon > 
0$, 
we have
$${\bf P}\left( \left| \frac{\sum X_i}{n} - \phi  \right| > \epsilon \right) \leq 2 
e^{-2n \epsilon^2}$$
which implies that for any $\epsilon > 0$,
$${\bf P} \left( \phi \in \left[ \frac{\sum X_i}{n} - \epsilon, \frac{\sum X_i}{n} + 
\epsilon \right] \right) \geq 1 - 2 e^{-2n\epsilon^2}.$$
If we set $\epsilon = \sqrt{log(40)/2n}$, then we get
$${\bf P} \left( \phi \in \left[ \frac{\sum X_i}{n} - \sqrt{log(40)/2n}, \frac{\sum 
X_i}{n} + \sqrt{log(40)/2n} \right] \right) \geq 0.95.$$
Since $H = \sum X_i$, we are 95% sure that $\phi$ lies between $H / n - 
\sqrt{log(40)/2n}$ and $H / n + \sqrt{log(40)/2n}$. There are many other ways to 
calculate confidence intervals. We have chosen to use Hoeffding\'s Inequality because 
it does not place any restrictions on the sample size. 
 
### The Bayesian Approach

Write $\Phi$ for the probability that the coin lands heads. Since we do not know the 
value of $\Phi$, we consider it a random variable. We have no prior information about 
$\Phi$, so our initial guess is that $\Phi$ is uniformly distributed: the probability 
density function is $f_{\Phi}(\phi) = 1$. 

![](/img/2016-03-09-predist.PNG)

Suppose that we flip the coin $n$ times and observe $r$ heads. Call this event $K$. We 
now have more information, so we should update our probability density function. We 
do this using [Bayes law](https://en.wikipedia.org/wiki/Bayes'_theorem). Let $h$ be 
very small. Then

$${\bf P}(\phi \leq \Phi \leq \phi + h | K) = \frac{{\bf P}(K | \phi \leq \Phi 
\leq \phi + h) {\bf P}(\phi \leq \Phi \leq \phi + h)}{{\bf P}(K)}.$$

We can compute each term on the right hand side as follows:
$${\bf P}(K | \phi \leq \Phi \leq \phi + h) = \phi^r (1 - \phi)^{n-r}$$
$${\bf P}(\phi \leq \Phi \leq \phi + h) =f_{\Phi}(\phi)h = h$$
$${\bf P}(K) = \sum_i {\bf P}(K | \phi_i \leq \Phi \leq \phi_{i+1}) {\bf P}(\phi_i 
\leq \Phi \leq \phi_{i+1}) = \sum_i \phi_i^r (1 - \phi_i)^{n-r} \Delta \phi_i = 
\int_0^1 \phi^r(1 - \phi)^{n-r} d \phi$$
This implies that
$$f_{\Phi | K}(\phi) 
  = \lim_{h \to 0} \frac{{\bf P}(\phi \leq \Phi \leq \phi + h | K)}{h} 
  = \frac{\phi^r(1-\phi)^{n-r}}{\int_0^1 \phi^r(1 - \phi)^{n-r} d \phi}$$
which looks like

![](/img/2016-03-09-postdist.PNG)

As you can see, the new distribution is more concentrated around $r/n$.

### Discussion

As a mathematician, it is not my place to argue for either the Frequentist or Bayesian 
approach to this problem. As a human being, I favor the Bayesian approach. Less 
mental gymnastics is required to interpret pictures of density functions than is 
required to interpret statements like \"we are 95% sure that $\phi$ is between $f(H)$ 
and $g(H)$\". Another benefit of the Bayesian approach is that it suggests how to 
store unknown values in a computer: Consider them as random variables and store the 
density function. As you learn more information, the density function is updated.


