var tree;

function setup(){
    tree = new Tree();
    tree.addValue(5);
    console.log(tree)
    tree.addValue(3)
}



function Tree(){
    this.root = null;
}

Tree.prototype.addValue = function(val){
    n = new Node(val)
    if (this.root == null){
        this.root = n;
    }else{
        this.root.addNode(n)
    }
}

function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

Node.prototype.addNode = function(n){
    if(n.value < this.value){
        if(this.left == null){
            this.left = n;
        }else{
            this.left.addNode(n)
        }
    }else if (n.value > this.value){
        if(this.right == null){
            this.right = n;
        }else{
            this.right.addNode(n)
        }
    }
}