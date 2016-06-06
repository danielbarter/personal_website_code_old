---
title: naive bayes classification and the mnist database
date: 2016-06-08
---

# Naive Bayes and the MNIST Database

The [MNIST database](http://yann.lecun.com/exdb/mnist/) consists of handwritten 
digits stored as $28 \times 28$ bit maps. In this post, we are going to use the 
database to train a naive Bayesian classifier.

### The Model

Our model has the following random variables:

- $c \in \{ 0,1,2,\dots,9\}$: the digit label. Each bitmap in the data set is labeled 
by the digit it is trying to represent.
- $x \in \{0,1\}^{28 \times 28}$: the bit map. Although the database consists of Gray 
scale bit maps, we have transformed them into black and white. This reduces the number 
of parameters in our model.
- $\theta \in [0,1]^{28 \times 28 \times 10}$: the activation probability. The random 
variable $\theta_{ic}$ represents the probability that bit $i$ is turned on in a 
bitmap which is labeled $c$.
- $\pi \in [0,1]^{10}$: the label probability. The random variable $\pi_c$ represents 
the probability that a given bitmap has label $c$.

We are using a naive Bayesian model. Therefore

- $x_i \perp x_j | c,\theta,\pi$: This is what we mean by naive Bayesian. If the label 
is fixed, then different pixels are independent.

The joint distribution is given by

$$p(c,x,\theta,\pi) = p(c,x | \theta,\pi) p(\theta,\pi) = p(x | c,\theta,\pi) p(c | 
\theta,\pi) p(\theta,\pi) = p(\theta,\pi) \pi_c \prod_{i} p(x_i \lvert c,\theta)$$

The MNIST database is $\mathcal{D} = \left\{ c^{(n)},x^{(n)} \right\}_{n=1,\dots,N}$ 
and we are interested in computing the distribution $p(c | x, \mathcal{D})$. The 
joint posterior distribution is
$$p(c,x,\theta,\pi | \mathcal{D}) = p(c,x|\theta,\pi,\mathcal{D}) 
p(\theta,\pi|\mathcal{D}) = p(c,x | \theta,\pi) p(\theta,\pi|\mathcal{D})$$
We use the prior distribution
$$p(\theta,\pi) = {\rm Dirichlet}(\pi,1) \prod_{i,c} {\rm Beta}(\theta_{i,c},1,1).$$ 
Then the posterior distribution is
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

### The implementation

The MNIST bit maps are in gray scale. Firstly, we flatten them to black and white and 
translate the raw byte files into CSV files [using Haskell](https://github.com/danielbarter/personal_website_code/tree/master/blog_notebooks/Niave_Bayes_classification_MNIST/mnistclean).
We then implement the above model [in Python](https://github.com/danielbarter/personal_website_code/blob/master/blog_notebooks/Niave_Bayes_classification_MNIST/Niave_Bayes_Classification_MNIST_MLE.ipynb).
The trained NBC correctly identifies $85\%$ of the test set.
