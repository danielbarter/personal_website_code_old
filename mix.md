---
title: mix
---

# MIX 1010



This is a simulator for Knuth\'s MIX machine from the book [Art of Computer Programming](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming). We use the identifier 1010 because this machine is slightly different from MIX 1009. We encode masks using binary and there is no division or multiplication instructions. A detailed readme can be found on [github](https://github.com/danielbarter/elm-mix).

<div id="mix1"></div>
<script>
    var node = document.getElementById('mix1');
    var app = Elm.Main.embed(node);
</script>

Statements in the assembler language look like **(:label) (/mask) (instruction) (relative address) (+index)**. Instuctions in memory look like **address(:label) (/mask) (instruction) (address) (+index)**. Here is an example multiplication routine:

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

Here is a variant of this routine which is self modifying:
```{.algorithm}
# modify the instruction located at end
LDA end
INCA 7
STA end

#multiplication routine
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

Here is an example where we loop through a zero terminated array and increment each entry by 1:
```{.algorithm}
#routine

:start LDA x +1
JAZ end
INCA 1
STA x +1
INC1 1
JMP start

:end HLT


#data
:x 7
-1
2
4
1
0
```

Here is an example where we add up all the numbers on a stack:
```{.algorithm}
# adding up all the numbers on the stack.

# we maintain the stack pointer in I6
INC6 stack_top 
JMP add
JMP add
JMP add
JMP add
JMP add
JMP add
LDA 0 +6
HLT

# addition routine
:add STJ add_return_adr
JSJ add_start
:add_return_adr
:add_start LDA 0 +6
ADD -1 +6
DEC6 1
STA 0 +6
LD1 add_return_adr
JMP 0 +1

# stack bottom
2
10
8
5
8
4
:stack_top 5
```

We can expand this example out into a programmable stack calculator with addition and multiplication operations:

```{.algorithm}
# programmable stack calculator.

# we maintain the stack pointer in I6
INC6 stack_top 

###################################
########## start code #############
###################################

JMP push
4
JMP push
5
JMP mult
JMP push
2
JMP mult
JMP push
2
JMP add


###################################
########### end code ##############
###################################



LDA 0 +6
HLT

# push routine
:push STJ push_return_adr
JSJ push_start
:push_return_adr
:push_start INC6 1
LD1 push_return_adr
LDA 0 +1
STA 0 +6
JMP 1 +1

# addition routine
:add STJ add_return_adr
JSJ add_start
:add_return_adr
:add_start LDA 0 +6
ADD -1 +6
DEC6 1
STA 0 +6
LD1 add_return_adr
JMP 0 +1


# multiplication routine
:mult STJ mult_return_adr
STZ s
JSJ mult_start
:mult_return_adr
:s 
:mult_start LDA 0 +6
CMPA -1 +6
JGE loop
LDX -1 +6
STA -1 +6
STX 0 +6
:loop LDA -1 +6
JAZ mult_end
DECA 1
STA -1 +6
LDA 0 +6
ADD s
STA s
JMP loop
:mult_end DEC6 1
LDA s
STA 0 +6
LD1 mult_return_adr
JMP 0 +1

#stack bottom
:stack_top 
```
