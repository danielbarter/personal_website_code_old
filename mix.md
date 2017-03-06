---
title: mix
---

# MIX 1010


<div id="mix1"></div>
<script>
    var node = document.getElementById('mix1');
    var app = Elm.Main.embed(node);
</script>

This is a simulator for Knuth\'s MIX machine from the book [Art of Computer Programming](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming). We use the identifier 1010 because this machine is slightly different from MIX 1009. We encode masks using binary and there is no division or multiplication instructions.

Statements in the assembler language look like **(:label) (/mask) (instruction) (relative address) (+index)**. Here is an example multiplication routine:

```{.algorithm}
# multiplication routine
:start LDA y
JAZ end
DECA 1
STA y
LDA x
ADD s
STA s
JMP start
:end LDA s
HLT

# data
:s 0
:x 5
:y 6
```

This is alpha software and there are probably bugs. I plan to polish it over the next few months. The source code can be inspected on [github](https://github.com/danielbarter/elm-mix).

