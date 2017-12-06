
export default class Token {
    constructor() {
      this._cancelled = false;
    }
  
    get cancelled() {
      return this._cancelled;
    }
  
    cancel() {
      this._cancelled = true;
    }
  }