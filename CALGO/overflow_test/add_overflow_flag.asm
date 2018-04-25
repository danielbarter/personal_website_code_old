add_overflow_flag:
  mov rax, rsi
  add rax, rdx
  setb [rdi]
  ret

