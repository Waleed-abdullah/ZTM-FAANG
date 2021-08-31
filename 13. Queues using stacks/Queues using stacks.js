class MyQueue {
  constructor() {
    this.in = [];
    this.out = [];
  }

  peek() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }

  //enqueue
  push(value) {
    if (!value) {
      return 'invalid input';
    }
    this.in.push(value);
  }

  pop() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }

  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}
