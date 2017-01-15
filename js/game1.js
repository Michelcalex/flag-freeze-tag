let a = new Player('Todd');
let b = new Player('Barb');
let c = new Player('Fitz');

let s = new Team('runners');
let t = new Team('chasers');

s.add(a);
s.add(b);
t.add(c);

s.won(); // false
t.won(); // false

c.tag(a);
a.frozen(); 