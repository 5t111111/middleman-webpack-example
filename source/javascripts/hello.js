class Hello {
  constructor(message) {
    this.message = message;
  }

  say() {
    alert(this.message);
  }
}

var hello = new Hello("Hello Middleman with Webpack!");
hello.say();
