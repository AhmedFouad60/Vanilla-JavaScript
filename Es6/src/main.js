'use strict'
// class User{
//   constructor(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password;
//   }
//   static countUsers(){
//     console.log("you can call me without initation of the class");
//   }


//   register(){
//     console.log(this.username +' is now registered');
//   }
   
// }

// /** we can inherit from another class */

// class Member extends User{
//   constructor(username,email,password,memberPackage){
//     super(username,email,password);
//     this.memberPackage=memberPackage;
//   }
//   getPackage(){
//     console.log(this.username+' is subscriped to '+this.memberPackage+" package")
//   }
// }





// /** Main */

// let foush=new User("foush","foush@foush.com","123");

// foush.register();

// /** for static methods in the class it can be called without initation */
// User.countUsers();


// /** extending from another class */
// let m1=new Member("foush","foush@foush.com","123","Standard");

// m1.getPackage();

let name="foush"

function makeUpperCase(word){
  return word.toUpperCase();
}
let template=`<h1>${makeUpperCase('hello')} ,${name}</h1>
<p>this is a simple template</p>`;

document.querySelector('#template').innerHTML = template;
























