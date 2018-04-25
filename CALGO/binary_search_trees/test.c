#include <stdlib.h>
#include <time.h>
#include "binary_search_tree.c"

comparison_token compare_32bit_int (void *vp1, void *vp2) {
  int v1 = * (int *) vp1;
  int v2 = * (int *) vp2;
  if (v1 < v2)
    return less_than;
  else if (v1 == v2)
    return equal;
  else
    return greater_than;
}

node *build_binary_search_tree_32bit_int (int number_of_nodes, int max_value) {
  int values[number_of_nodes];
  int i;

  for (i=0; i<number_of_nodes; i++)
    values[i] = rand() % max_value;

  node *rp = NULL;



  for (i=0; i<number_of_nodes; i++)
    rp = tree_insert(rp, values + i,&compare_32bit_int);

  return rp;
}

int main (void) {
  srand(time(NULL));

  node *p = build_binary_search_tree_32bit_int(3,10);
  free_binary_search_tree(p);
  p = NULL;

  return 0;
}
