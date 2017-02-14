---
title: ch3
---

# CLRS Chapter 3

**3.1-1.** This is true because $\max(a,b) \leq a + b \leq 2 \max(a,b)$.

**3.1-2.** For large $n$ we have $n^b \leq (n+a)^b \leq (2n)^b = 2^b n^b$.

**3.1-3.** When we write $f = O(g)$, we mean that $f \leq Cg$ in some neighbourhood of infinity. It doesn\'t make sense to say $T(n)$ is bounded below by $O(g)$ because $O(g)$ is not a function. It only appears in an equation to describe order of growth.

**3.1-4.** Since $2^{n+1} = 2 2^n$ we have $2^n = O(2^n)$. If $2^{2n} = O(2^n)$, then we would have $2^{2n} \leq C 2^n$ for some constant $C$ and large $n$. This implies that $2^n \leq C$ for large $n$ which is absurd.

**3.1-5.** The statement $f = \Theta(g)$ is equivalent to 
$$0 < \liminf_{n \to \infty} f(n)/g(n), \limsup_{n \to \infty} f(n) / g(n) < \infty.$$
The statement $f = O(g)$ is equivalent to
$$\limsup_{n \to \infty} f(n) / g(n) < \infty.$$
The statement $f = \Omega(g)$ is equivalent to
$$0 < \liminf_{n \to \infty} f(n)/g(n)$$

**3.1-6.** This is true because running time is bounded above by worst case running time and bounded below by best case running time.

**3.1-7.** The statement $f = o(g)$ means that
$$\lim_{n \to \infty} f(n)/g(n) = 0$$
and the statement $f = \omega(g)$ means that
$$\lim_{n \to \infty} f(n)/g(n) = \infty.$$
Obviously, we cannot have both.

**3.1-8.** One way to interpret $f = O(g)$ is by saying that $f \leq C g$ in a neighbourhood of infinity. This still makes sense when $f,g$ take multiple arguments.

**3.2-3.** We have 
$$\log(n!) = \sum_i \log i = \Theta\left(\int \log n dn\right) = \Theta(n \log n).$$
We get $n! = \omega(2^n)$ from
$$\log \frac{n!}{2^n} = \log n! - cn \geq dn \log n - cn \to \infty.$$
The equation $n! = o(n^n)$ is more interesting. The above argument doesn't give us what we need:
$$\log \frac{n!}{n^n} = \log n! - n \log n \leq c n \log n$$
but the right hand side doesn\'t converge to $-\infty$. Instead we some lower order terms. Stirling\'s formula says
$$\log n! = n \log n - n + O(\log n)$$
which implies that
$$\log \frac{n!}{n^n} \leq -n + c \log n \to - \infty$$

**3.2-4.** Firstly, suppose that $f = O(n^d)$ for some $d$. Then $f(n) \leq C n^d$ for large $n$ which implies that $\log f(n) \leq \log C + d \log n$ for large $n$. Therefore $\log f = O(\log n)$. On the otherhand, if $\log f = O(\log n)$, then $\log f \leq d \log n = \log n^d$ for large $n$. This implies that $f \leq n^d$ for large $n$, so $f = O(n^d)$ for some $d$. Therefore, $f$ being polynomially bounded is equivalent to $\log f = O(\log n)$. 

We know that 
$$\log(\lceil \log n \rceil!) = \Theta(\log n \cdot \log (\log n)) = \omega(\log n)$$
Therefore $\lceil \log n \rceil!$ is not polynomially bounded. On the otherhand, we have
$$\log(\lceil \log \log n \rceil!) = \Theta(\log (\log n) \cdot \log (\log (\log n))) = o(\log n)$$
so $\lceil \log \log n \rceil!$ is polynomially bounded.
