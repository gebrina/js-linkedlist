function LNode (element:any){
  this.element=element;
  this.next=null;
}

function LLNode (){
  this.head = new LNode('head');
}

LLNode.prototype.find =function( item ){
   let currNode = this.head;
   while(currNode.element!==item){
     currNode = currNode?.next;
   }
   return currNode;
}

LLNode.prototype.insert = function(element,after){
  const newNode = new LNode(element);
  const prevNode = this.find(after);
  newNode.next = prevNode.next;
  prevNode.next = newNode;
}

LLNode.prototype.display = function(){
  let currNode  = this.head;
  while(currNode.next!==null){
    currNode=currNode?.next;
    console.log(currNode?.element)
  }
}

LLNode.prototype.findPrev = function(item){
  let currNode = this.head;
  while(currNode.next.element!==item){
     currNode = currNode.next;  
  }
   return currNode;
}

LLNode.prototype.remove = function(elemet){
  const prevNode = this.findPrev(elemet);
  prevNode.next = prevNode.next.next;
}



const lnode = new LLNode();
  lnode.insert('gebre','head');
   lnode.insert('nayom','gebre')
   lnode.insert('testfa','nayom');
  // lnode.display();
   lnode.remove('gebre');
   lnode.display();
  //  const prevG = lnode.findPrev('testfa');
  //  console.log(prevG)