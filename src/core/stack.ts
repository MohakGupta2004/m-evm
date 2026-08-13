export class Stack<T> {
  private static readonly MAX_SIZE = 1024;
  private readonly items: T[] = [];

  get size(): number {
    return this.items.length;
  }

  push(value: T): void {
    if (this.items.length >= Stack.MAX_SIZE) {
      throw new Error('Stack overflow');
    }

    this.items.push(value);
  }

  pop(): T {
    if (this.items.length === 0) {
      throw new Error('Stack underflow');
    }

    return this.items.pop() as T;
  }

  peek(): T {
    if (this.items.length === 0) {
      throw new Error('Stack underflow');
    }

    return this.items[this.items.length - 1] as T;
  }
}
