add_overflow_flag:
  mov rax, rsi                  ; move x to the return register
  add rax, rdx                  ; add y to the return register
  setb [rdi]                    ; set b to CF
  ret

