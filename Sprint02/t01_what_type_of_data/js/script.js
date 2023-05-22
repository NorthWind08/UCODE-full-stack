const num = 10;
const bigInt = 10n;
const str = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
const bool = false;
const null_var = null;
const undef = undefined;
const obj = {
    a: 1, 
    b: 'text'
};
const symb = Symbol('id');
function func() {}

alert (
    'num is ' + typeof(num) +
    '\nbigInt is ' + typeof(bigInt) +
    '\nstr is ' + typeof(str) +
    '\nbool is ' + typeof(bool) +
    '\nnull_var is ' + typeof(null_var) + 
    '\nundef is ' + typeof(undef) +
    '\nobj is ' + typeof(obj) +
    '\nsymb is ' + typeof(symb) +
    '\nfunc is ' + typeof(func)
);