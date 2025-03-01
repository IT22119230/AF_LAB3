function myFunction(){
    return "Hello from my module!";
}

const _myFunction = myFunction;
export { _myFunction as myFunction };