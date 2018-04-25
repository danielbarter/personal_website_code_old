#include <stddef.h>
#include <stdlib.h>


typedef enum {less_than, equal, greater_than} comparison_token;


typedef struct node {


  // NULL pointer means that child or parent is missing
  // Only the root of the tree has parent == NULL
  struct node *left;
  struct node *right;
  struct node *parent;


  void *vp;

} node;

// find the root of the tree
node *find_root (node *np) {
  while (np->parent != NULL)
    np = np->parent;

  return np;
}

// rp is a pointer to the root of the tree
// vp is a pointer to the value we are inserting
// compare points to a procedure for comparing values
// the procedure returns the root of the tree
// is rp == NULL, then we create a new tree.
node *tree_insert(node *rp,
                 void *vp,
                 comparison_token (*compare) (void *vp1, void *vp2)) {

  node *y = NULL;
  node *x = rp;
  while (x != NULL) {
    y = x;
    if ( (*compare)(vp,x->vp) == less_than )
      x = x->left;
    else
      x = x->right;
  }
  node *new = malloc(sizeof(node));
  new->left = NULL;
  new->right = NULL;
  new->parent = y;
  new->vp = vp;

  if (y == NULL)
    rp = new;
  else if ((*compare)(new->vp, y->vp) == less_than)
    y->left = new;
  else
    y->right = new;

  return rp;
}


void free_binary_search_tree(node *rp) {
  if (rp->left != NULL)
    free_binary_search_tree(rp->left);
  if (rp->right != NULL)
    free_binary_search_tree(rp->right);

  free(rp);
}
