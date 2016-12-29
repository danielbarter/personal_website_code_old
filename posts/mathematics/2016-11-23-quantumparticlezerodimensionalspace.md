---
title: quantum particles in a zero dimensional space
date: 2016-11-23
---

# Quantum Particles in a Zero Dimensional Space

Most introductory textbooks on quantum mechanics start by studying a quantum particle in the real line. In this blog post, we are going to think about quantum particles in a finite set.

### Classical Mechanics in a finite set

In classical mechanics, particles are modeled as elements of the ambient space which move continuously as a function of time. When the ambient space is a finite set $S$, the particle $x_t \in S$ is fixed in its initial state $x_0$ for all time. This is because the only continuous maps from the interval to a finite set are constant. If $f : S \to \mathbb{R}$ is an observable, every time we measure $f$, we record the value $f(x_0)$. As you can see classical mechanics in a finite set is pretty boring. 


### Statistical Mechanics in a finite set

In statistical mechanics, particles are modeled as random variables $X$ taking values in the ambient space $S$. When $S$ is a finite set, a random variable $X \in S$ is specified by its distribution function $$p \in \Delta = \{ p_s  \in {\rm maps}(S,\mathbb{R}) : \sum_s p_s = 1, \; p_s \geq 0 \}.$$
If $f : S \to \mathbb{R}$ is an observable, when we measure $f$ we record the value $f(s)$ with probability $p_s$. Now suppose that we actually measure $f$ and record the value $\lambda$. Then according to Bayes rule, the state $X$ is updated:
$${\bf P}(X = s | f(X) = \lambda) \propto {\bf P}(f(X) = \lambda | X = s) p_s =
\begin{cases}
p_s & f(s) = \lambda \\
0 & {\rm otherwise}
\end{cases}$$
In words, when we record $\lambda$ we truncate the probability of any incompatible state to zero and then scale the resulting vector so it becomes a probability distribution. As you can see, measurement is much more interesting in statistical mechanics. Now lets talk about dynamics. In physics, we want the time evolution of our system to be deterministic. Therefore we can model the passage of time as a function
$$E_t : \Delta \to \Delta$$
Moreover, we want the system to be invariant under time translation which implies that
$$E_{t+s} = E_t \circ E_s.$$
From the laws of probability theory, we have
$${\bf P}(E_t X = s') = \sum_s {\bf P}(E_t X = s' | X = s) p_s$$
which implies that
$$E_t p = \sum_s p_s E_t \delta_s.$$
where $\delta_s$ is the probability distribution concentrated at $s$. It follows that $E_t$ is linear. Any linear map which preserves $\Delta$ must have all positive real entries and columns summing to one. From Lie theory, we know that
$$E_t = \exp(tH)$$
where $H$ is a matrix whose off diagonal entries are positive with columns summing to zero. We call $H$ the Hamiltonian generator for the statistical mechanical system. One of the fundamental concepts in statistical mechanics is entropy:
$$\Theta= \sum_s p_s \log p_s$$
We would like to understand how $\Theta$ behaves under time evolution. We have
$$E_t p = p + tHp + O(t^2)$$
which implies that the directional derivative is
$$d\Theta(Hp).$$
The exterior derivative is
$$d\Theta = \sum_s (\log p_s + 1)dp_s$$
which implies that
$$d\Theta(Hp) = (\log p^T) H p.$$
Regardless of $H$, this directional derivative is $0$ when $p$ is uniform. The uniform distribution is the maximum entropy distribution on a finite set, therefore we have proved that if the statistical mechanical system ever reaches maximum entropy, it remains there for the rest of time.

### Quantum Mechanics in a finite set

Somewhat surprisingly, the transition from classical mechanical systems to quantum mechanical systems requires little effort. Now the state of the system is encoded using a wave function. When $S$ is a finite set, the wave function $\chi$ lives in
$$\{ \chi \in {\rm maps}(S,\mathbb{C}) : \langle \chi,\chi \rangle = 1\}$$
where $\langle \cdot,\cdot \rangle$ is the standard Hermitian form, and ${\rm maps}(S,\mathbb{C})$ is the vector space with basis $S$. We call $S$ the **computation basis** and denote the basis vectors by $|s\rangle$ as is traditional in quantum mechanics. If $f : S \to \mathbb{R}$ is an observable, when we measure $f$, we record the value $f(s)$ with probability $\lvert \chi_s \lvert^2$. If we actually measure $f$ and record $\lambda$, the wave function collapses according to Bayes rule. The time evolution operator $E_t$ must be unitary to preserve probability, so the infinitesimal generator $H$ is skew Hermitian. This implies that time evolution is invertible. As a result we can talk about generalized observables. Choose an orthonormal basis $\psi_i$ and let $U$ be the unitary operator which takes $\psi_i$ to a computation basis vector. Then we can perform the operation
$$U^{-1} \circ {\rm measurement} \circ U$$
The spectral theorem says that a hermitian operator can be diagonalized by a unitary matrix and has real eigenvalues. Therefore, we can identify generalized observables with hermitian operators. This is one of the fundamental principles of quantum mechanics.
