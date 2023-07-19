// queue with node

class Node {
  constructor() {
    this.prev = null;
    this.next = null;
  }

  // dequeue할 때 다음 노드를 보내주는 역할
  // 다음 노드가 front 가 되기 때문에 next.prev 삭제
  getNext() {
    this.next.prev = null;
    return this.next;
  }

  // enqueue시 다음 노드 추가
  setNext(node) {
    // 현재 노드의 다음 노드는 추가되는 노드
    this.next = node;
    // 추가되는 노드의 prev는 현재 노드
    node.prev = this;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.front = null;
    this.rear = null;
  }

  // 현재 테스트 시에는 노드에 넣어줄 값이 없지만
  // 값이 필요할 경우 매개변수로 받아서 Node에 전달할 것
  enqueue() {
    const node = new Node();
    if (this.size <= 0) {
      // 현재 queue가 비어있을 경우 노드가 들어오면
      // queue에는 노드가 한 개이므로 front와 rear 모두 현재 노드가 됨
      this.front = node;
      this.rear = node;
    } else {
      // 아닐시 추가되는 노드는 마지막 노드의 next
      // 마지막 노드는 추가되는 노드의 prev
      this.rear.setNext(node);
      // queue의 rear는 추가되는 노드가 됨
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.size <= 0) {
      return -1;
    }
    const node = this.front;
    if (this.size === 1) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = node.getNext();
    }
    this.size--;
    return node;
  }

}

const queue = new Queue();
for(let i=1; i<=5; i++){
  queue.enqueue();
  queue.rear.idx = i;
  console.log(queue.rear.idx);
}

while(queue.size){
  console.log(queue.dequeue().idx);
}