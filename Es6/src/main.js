'use strict'
class User{
  constructor(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
  }
  register(){
    console.log(this.username +' is now registered');
  }
   
}

let foush=new User("foush","foush@foush.com","123");

foush.register();
