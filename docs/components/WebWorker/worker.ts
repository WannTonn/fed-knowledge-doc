class PromiseWorker {
  private worker: Worker;
  // eslint-disable-next-line @typescript-eslint/ban-types
  private handleMap: Map<number, Function> = new Map();
  constructor(worker: Worker) {
    this.worker = worker;
    this.worker.onmessage = (event: MessageEvent) => {
      const {type, data} = event.data;
      const resolve = this.handleMap.get(type);

      if (!resolve) {
        return;
      }
      resolve(data);
      this.handleMap.delete(type);
    }
  }

  postMessage(message) {
    const {type} = message;
    return new Promise((resolve) => {
      this.worker.postMessage(message);
      this.handleMap.set(type, resolve);
    })
  }
}

export default PromiseWorker;