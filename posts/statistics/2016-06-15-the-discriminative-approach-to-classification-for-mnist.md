---
title: the discriminative approach to classification for mnist
date: 2016-06-15
---

# The Discriminative Approach to Classification for MNIST

In the [last post](2016-06-08-naive-bayes-classification-and-mnist-database.html) we 
described the simplest possible generative approach to classifying digits in the MNIST 
database. In this post, we are going to explore the discriminative approach to 
classification. 

### The Model

Let $\mathcal{D} = \left\{ y^n \in S,x^n \in \mathbb{R}^f \right\}_{n=1,\dots,N}$ be a 
data set. For notational convenience, we embed $S$ into Euclidean space:
$$S = \{ s_1,\dots,s_c \} \hookrightarrow \mathbb{R}^c \quad s_i \mapsto e_i.$$
Given a parameter space $\Theta$ and functions $f_1,\dots,f_c : \Theta \times 
\mathbb{R}^f \to (0,1)$, we define the following probability distribution:
$$p(y | \theta,x) = \prod_i f_i(\theta,x)^{y_i}$$
Given a prior distribution $p(\theta)$ over $\Theta$, Bayes rule implies that
$$\log p(\theta | \mathcal{D}) = \log p(\theta) + \sum_{n,i} y^n_i \log 
f_i(\theta,x^n).$$
We can choose parameters given data using maximum likelihood estimation. More 
precisely, we want to minimize the following expression:
$$-\sum_{n,i} y^n_i \log f_i(\theta,x^n)$$
Intuitively, we are choosing parameters which minimize the [cross 
entropy](https://en.wikipedia.org/wiki/Cross_entropy) between the 
predicted distribution on $y$ and the observed distribution on $y$. Minimizing the 
cross entropy is only half the story. We also need to choose the parameter space 
$\Theta$ and functions $f_1,\dots,f_c$. To keep things simple, we shall take
$$(f_1,\dots,f_c)(W,b,x) = {\rm softmax}(Wx + b)$$
where $W$ is a $c \times f$ matrix, $b \in \mathbb{R}^c$ and 
[softmax](https://en.wikipedia.org/wiki/Softmax_function) transforms the output into a 
probability distribution.

### The implementation

Unlike for naive Bayes classification, implementing the above model from scratch is 
not trivial. This is because we need to minimize a smooth function defined on a 
$c(f+1)$ dimensional manifold. This type of problem shows up a lot in machine learning, and 
there are many libraries to choose from for solving this problem. One such library is 
[TensorFlow](https://www.tensorflow.org/). Indeed, the [first 
example](https://www.tensorflow.org/versions/r0.9/tutorials/mnist/beginners/index.html) 
in the TensorFlow tutorial is implementing the model we described above! It is able to 
classify digits from the test set with about 90% accuracy. This is a 5% improvement 
over naive Bayes classification, but we need to use more sophisticated numerical 
techniques to compute the maximum likelihood estimate.
