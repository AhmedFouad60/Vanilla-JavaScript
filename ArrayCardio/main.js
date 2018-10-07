const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];



//Array filter
//return true if the condition is true and keep this element other remove the element
const fiften=inventors.filter(inventor=>inventor.year>=1500 && inventor.year <1600);
console.table(fiften);

//Array map => take array of objects and return array of strings
const fullName=inventors.map(inventor=>`${inventor.first} ${inventor.last}`);
console.table(fullName);

//Array sort
const ordered=inventors.sort((a,b)=>a.year>b.year ? 1:-1);
console.table(ordered);

//Array reduce i.e(sum thing up in array and put it in variable)
const totalYears=inventors.reduce((total,inventor)=>{
  return total + (inventor.passed - inventor.year); 
},0);
console.log(totalYears);

//sort the people alpha
const alpha=people.sort(function(lastOne,nextOne){
  const [alast,afirst]=lastOne.split(', ');
  const [blast,bfirst]=nextOne.split(', ');
  console.table([blast,bfirst]);
  return alast > blast ? 1:-1;
});
console.table(alpha);
// 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation=data.reduce(function(obj,item){
      if(!obj[item]){
        obj[item]=0;
      }
      obj[item]++;
      return obj;
    },{});

    console.log(transportation);