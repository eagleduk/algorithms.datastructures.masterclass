class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  remove(value) {
    if (this.root === null) return null;

    // 삭제할 Node 검색
    var parent;
    var target = this.root;
    while (target !== null) {
      if (target.value === value) {
        break;
      } else {
        parent = target;
        target = target.value < value ? target.right : target.left;
      }
    }

    // 자식 노드가 없을 때 => 해당 노드 삭제
    if (target.right === null && target.left === null) {
      parent.value > value ? (parent.left = null) : (parent.right = null);
    } else {
      // 자식 노드가 2개 일 때 => 작은수중 제일 큰수 || 큰수중 제일 작은 수 와 값을 교체
      if (target.right !== null && target.left !== null) {
        var cParent = target;
        var cTarget = target.right;
        while (cTarget.left !== null) {
          cParent = cTarget;
          cTarget = cTarget.left;
        }
        target.value = cTarget.value;
        // 교체 이후에 자식 노드가 있을 때 교체된 노드의 부모 노드와 연결
        if (cTarget.right) {
          cParent.value < cTarget.right.value
            ? (cParent.right = cTarget.right)
            : (cParent.left = cTarget.right);
        }
      }

      // 자식 노드가 1개 일 때 => 부모와 자식 노드를 연결
      else {
        if (target.right !== null) {
          parent.value < value
            ? (parent.right = target.right)
            : (parent.left = target.right);
        } else {
          parent.value < value
            ? (parent.right = target.left)
            : (parent.left = target.left);
        }
      }
    }
  }
}
