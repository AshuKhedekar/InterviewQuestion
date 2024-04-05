function Person(name="kisan"){
    this.name=name;
   
   this.greeting = function(){
     console.log("name",this.name);
   }
   }
   const p1 = new Person("James");
   console.log(p1);
   const p2 = new Person();
   console.log(p2);