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
$$T_t : \Delta \to \Delta$$
Moreover, we want the system to be invariant under time translation which implies that
$$T_{t+s} = T_t \circ T_s.$$
From the laws of probability theory, we have
$${\bf P}(T_t X = s') = \sum_s {\bf P}(T_t X = s' | X = s) p_s$$
which implies that
$$T_t p = \sum_s p_s t_t \delta_s.$$
where $\delta_s$ is the probability distribution concentrated at $s$. It follows that $T_t$ is linear. Any linear map which preserves $\Delta$ must have all positive real entries and columns summing to one. From Lie theory, we know that
$$T_t = \exp(tH)$$
where $H$ is a matrix whose off diagonal entries are positive with columns summing to zero. We call $H$ the Hamiltonian generator for the statistical mechanical system. One of the fundamental concepts in statistical mechanics is entropy:
$$\Theta= \sum_s p_s \log p_s$$
We would like to understand how $\Theta$ behaves under time evolution. We have
$$T_t p = p + tHp + O(t^2)$$
which implies that the directional derivative is
$$d\Theta(Hp).$$
The exterior derivative is
$$d\Theta = \sum_s (\log p_s + 1)dp_s$$
which implies that
$$d\Theta(Hp) = (\log p^T) H p.$$
Regardless of $H$, this directional derivative is $0$ when $p$ is uniform. The uniform distribution is the maximum entropy distribution on a finite set, therefore we have proved that if the statistical mechanical system ever reaches maximum entropy, it remains there for the rest of time.

### Energy constrained systems

In the previous section, we discussed unconstrained statistical mechanical systems. In practice, we only want to study energy constrained systems. This means that we have an energy observable $E : S \to \mathbb{R}$ and we only want to consider states $p$ with a fixed expected energy $e(p) = \mathbb{E}_p(E) = E_0$. Since we have 
$$de = \sum_s E_s dp_s$$
the directional derivative for $e$ along time evolution is
$$de(Hp) = E^T Hp$$
so the only statistical Hamiltonians which preserve the expected energy are those with $E^T H=0$. In words, we need the columns of $H$ to be perpendicular to $E$. It is fun to check that the maximum entropy distribution with a fixed expected energy $E_0$ is exactly the Boltzmann distribution. Also, we have
$$d \Theta\left(HZ e^{-E/k}\right) = \log \left(Z e^{-E/k}\right)^T H p = (\log Z - E/k)^T H p = 0$$
So if time evolution preserves expected energy and we are in the Boltzmann state, we stay there for ever. This is one of the standard starting points for statistical mechanics.

### Quantum Mechanics in a finite set

Somewhat surprisingly, the transition from statistical mechanical systems to quantum mechanical systems requires little effort. Now the state of the system is encoded using a wave function. When $S$ is a finite set, the wave function $\chi$ lives in
$$\{ \chi \in {\rm maps}(S,\mathbb{C}) : \langle \chi,\chi \rangle = 1\}$$
where $\langle \cdot,\cdot \rangle$ is the standard Hermitian form, and ${\rm maps}(S,\mathbb{C})$ is the vector space with basis $S$. We call $S$ the **computation basis** and denote the basis vectors by $|s\rangle$ as is traditional in quantum mechanics. If $f : S \to \mathbb{R}$ is an observable, when we measure $f$, we record the value $f(s)$ with probability $\lvert \chi_s \lvert^2$. If we actually measure $f$ and record $\lambda$, the wave function collapses according to Bayes rule. The time evolution operator $T_t$ must be unitary to preserve probability, so the infinitesimal generator $H$ is skew Hermitian. This implies that time evolution is invertible. As a result we can talk about generalized observables. Choose an orthonormal basis $\psi_i$ and let $U$ be the unitary operator which takes $\psi_i$ to a computation basis vector. Then we can perform the operation
$$U^{-1} \circ {\rm measurement} \circ U$$
The spectral theorem says that a hermitian operator can be diagonalized by a unitary matrix and has real eigenvalues. Therefore, we can identify generalized observables with hermitian operators. This is one of the fundamental principles of quantum mechanics.

### The Path Integral
Above, the dynamics of our statistical and quantum systems were generated by a Hamiltonian. We can use a path integral to get physical interpretations for the entries in the Hamiltonian. Consider a quantum particle in $\{ 1,2,\dots,n\}$ with time evolution generated by $H$. Then the time evolution operator is given by $U(t) = e^{tH}$. The amplitude of transitioning from state $a$ to state $b$ in time $T$ is given by
$$U(T)_{b,a} = [U(T/N)]^N_{b,a}$$
If we expand out the matrix multiplication, then the amplitude becomes
$$\sum_{a,k_1,k_2,\dots,k_{N-1},b} U(T/N)_{a,k_{1}} U(T/N)_{k_1,k_2} \cdots U(T/N)_{k_{N-1},b}.$$
Define $X(a,b)$ to be the space of functions $f : [0,T] \to \{ 1,2,\dots,n\}$ with $f(0) = a$, $f(T)=b$ and a finite number of discontinuities. Fix a sequence
$$k_{\bullet} = a,k_1,k_2,\dots,k_{N-1},b \in \{1,2,\dots,n\}$$
and define
$$C(k_{\bullet}) = \{ f \in X(a,b) : f(iT/N)=k_i \text{ for each $i$}\}.$$
Notice that $X(a,b) = \cup_{k_{\bullet}} C(k_{\bullet})$. We can write
$$k_{\bullet} = \underbrace{s_1,s_1,\dots,s_1}_{p_1 + 1},\underbrace{s_2,s_2,\dots,s_2}_{p_2 + 1},\dots,\underbrace{s_J,s_J,\dots,s_J}_{p_J + 1}$$
where $s_i \not= s_{i+1}$. Define
$$D(k_{\bullet}) = \{ f \in C(k_{\bullet}): \text{$f$ has $J-1$ discontinuities}\}.$$
Then
$${\rm vol}(D(k_{\bullet})) = (T/N)^{J-1}$$
and
$${\rm vol}(C(k_{\bullet})) ={\rm vol}(D(k_{\bullet}))+O(1/N^J)$$
with respect to the euclidean measure on $X(a,b)$. If $N$ is large, most of the volume for $C(k_{\bullet})$ is concentrated in $D(k_{\bullet})$. Define $A : X(a,b) \to \mathbb{C}$ by the equation
$$f = [ \underbrace{\quad s_1 \quad}_{t_1} | \underbrace{\quad s_2 \quad}_{t_2} | \cdots | \underbrace{\quad s_J \quad}_{t_J}] \mapsto e^{t_1 H_{s_1 s_1}} H_{s_1 s_2} e^{t_2 H_{s_2 s_2}} \cdots H_{s_{J-1} s_J}e^{t_J H_{s_J s_J}}.$$
when $N$ is large, $U(T/N) = I + TH/N$. Therefore, with the $k_{\bullet}$ from above, we have
$$U(T/N)_{a,k_{1}} U(T/N)_{k_1,k_2} \cdots U(T/N)_{k_{N-1},b} \approx \left(1 + \frac{T H_{s_1 s_1}}{N}\right)^{p_1}\frac{T}{N}H_{s_1 s_2} \left(1 + \frac{T H_{s_2 s_2}}{N}\right)^{p_2}\frac{T}{N}H_{s_2 s_3} \cdots  \frac{T}{N}H_{s_{J-1} s_{J}}\left(1 + \frac{T H_{s_J s_J}}{N}\right)^{p_J}$$
$$\approx (T/N)^{J-1}e^{p_1 T H_{s_1 s_1} / N} H_{s_1 s_2}e^{p_2 T H_{s_2 s_2} / N} H_{s_2 s_3} \cdots H_{s_{J-1} s_J}e^{p_J T H_{s_J s_J} / N} = A(f) {\rm vol}(D(k_{\bullet}))$$
where $f$ is an element of $D(k_{\bullet})$. Therefore
$$U(T)_{b,a} \approx \sum_{k_{\bullet}} A(f) {\rm vol}(D(k_{\bullet})).$$
If we let $N \to \infty$, then we have
$$U(T)_{b,a} = \int_{X(a,b)} A(f) df.$$
In words, the transition amplitude is a sum over all possible paths weighted by $A(f)df$. 

### The perturbative approach

The integral over histories expression for $U(T)_{b,a}$ is conceptually nice, but it is awful from a computational perspective. If we want to compute the amplitude, it is much better to just expand $U(T)_{b,a}$ as a power series in $T$. This gives us
$$U(T)_{b,a} = \delta_{b,a} + TH_{b,a} + \frac{T^2}{2!} \sum_{k_1} H_{b,k_1} H_{k_1,a} + \frac{T^3}{3!} \sum_{k_1,k_2}H_{b,k_1}H_{k_1,k_2}H_{k_2,a} + \dots$$
This is a single particle version of the Feynman diagram method for computing amplitudes. Quite simple really!
