// JavaScript Arrays


//const language2 = new Array ('HTML', 'CSS',
//  'JavaScript', 'PHP', true, 50);

const language = ['HTML', 'CSS', 'JavaScript', 
    'PHP', true, 50];
    
    language[4] = 'Tailwind CSS';
    language[5] = ' react.js';
    language[6] = 'vue.js';
    language[7] = 'laravel';
    language[10] = 'Bootstrap';
    // First item access
    console.log(language[0]);
    //last item
    console.log(language[language.length-1]);
    // Delete or Remove last item
    language.pop();
    //ADD last item
    language.push('Angular.js');
    // ADD first item
    language.unshift('Basic computing');
    // Delete first item
    language.shift();
    


console.log(language);
//console.log(language[5]);
// new system
// console.log(language.at(5));
//  console.log(language.toString());
//  console.log(language.join(' + ' ));
// console.log(language.length);
   // console.log(language[2]);


   const person = [];
   person['firstName'] = 'Nargis';
   person['lastName'] = 'diya';
   person[2]= 35;
//    console.log(person.length);
//    console.log(person);
//    console.log(person[2]);


   //const num = [20];
   const num = new Array (20);

   console.log(num);


   const x = [1, 2, 3,4];
   const y = [5, 6, 7,8];
   const p = [9, 10, 11, 12]
   const z = x.concat(y, p);
   //console.log(z);

   const a = 
   [
    [1,2,3,[3, 5,8] ],
    [4,5,6],
    [2, 4, 6],
];
// console.log(a);
// console.log(a.flat);

// add some item in the middle

language.splice(2,0, 'info', 'info2');
//delete number 
language.splice(0,2);
console.log(language);
