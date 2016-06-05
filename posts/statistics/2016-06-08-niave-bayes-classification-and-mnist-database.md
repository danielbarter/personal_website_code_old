---
title: niave bayes classification and the mnist database
date: 2016-06-08
---

# Niave Bayes and the MNIST Database

The [MNIST database](http://yann.lecun.com/exdb/mnist/) consists of handwritten 
digits stored as $28 \times 28$ bit maps. In this post, we are going to use the 
database to train a niave Bayesian classifier to classify handwritten digits.

### The Model

Our model has the following random variables:

- $c \in \{ 0,1,2,\dots,9\}$: the digit label. Each bitmap in the dataset is labeled 
by the digit it is trying to represent.
- $x \in \{0,1\}^{28 \times 28}$: the bit map. Although the database consists of grey 
scale bit maps, we have transformed them into black and white. This reduces the number 
of parameters in our model.
- $\theta \in [0,1]^{28 \times 28 \times 10}$: the activation probability. The random 
variable $\theta_{ic}$ represents the probability that bit $i$ is turned on in a 
bitmap which is labeled $c$.
- $\pi \in [0,1]^{10}$: the label probability. The random variable $\pi_c$ represents 
the probability that a given bitmap has label $c$.

We are using a niave Bayesian model. Therefore

- $x_i \perp x_j | c,\theta,\pi$: This is what we mean by niave Bayesian. If the label 
is fixed, then different pixels are indipendent.

The joint distrubution is given by

$$p(c,x,\theta,\pi) = p(c,x | \theta,\pi) p(\theta,\pi) = p(x | c,\theta,\pi) p(c | 
\theta,\pi) p(\theta,\pi) = p(\theta,\pi) \pi_c \prod_{i} p(x_i \lvert c,\theta)$$

The MNIST database is $\mathcal{D} = \left\{ c^{(n)},x^{(n)} \right\}_{n=1,\dots,N}$ 
and we are interested in computing the distrubution $p(c | x, \mathcal{D})$. The 
joint posterior distrubution is
$$p(c,x,\theta,\pi | \mathcal{D}) = p(c,x|\theta,\pi,\mathcal{D}) 
p(\theta,\pi|\mathcal{D}) = p(c,x | \theta,\pi) p(\theta,\pi|\mathcal{D})$$
We use the prior distrubution
$$p(\theta,\pi) = {\rm Dirichlet}(\pi,1) \prod_{i,c} {\rm Beta}(\theta_{i,c},1,1).$$ 
Then the posterior distrubution is
$$p(\theta,\pi \lvert \mathcal{D}) = {\rm Dirichlet}(\pi,N_c+1) \prod_{i,c} 
{\rm Beta}(\theta_{i,c},N_{ic} + 1,N_c - N_{ic} + 1)$$
where

- $N_c$: classifier frequency. The number of bitmaps labeled $c$ in $\mathcal{D}$
- $N_{ic}$: pixel frequency. The number of times the $i$th bit is turned on when the label is $c$.

Since $\mathcal{D}$ is a large data set $(N=60,000)$, we can approximate the posterior 
$p(\theta,\pi \lvert \mathcal{D})$ as a dirac measure supported at its mean:
$$p(\theta,\pi \lvert \mathcal{D}) = \delta_{(\widehat{\theta},\widehat{\pi})} \quad 
 \widehat{\theta}_{ic} = \frac{N_{ic} + 1}{N_c + 1} \quad \widehat{\pi}_{c} = 
\frac{N_c + 1}{N + 1}$$
Therefore
$$p(c,x | \mathcal{D}) = \int p(c,x | \theta,\pi) p(\theta,\pi \lvert \mathcal{D}) = 
p(c,x| \widehat{\theta},\widehat{\pi})$$
which implies that
$$p(c \lvert x, \mathcal{D}) \varpropto p(x | c,\widehat{\theta},\widehat{\pi}) 
\widehat{\pi}_c$$
