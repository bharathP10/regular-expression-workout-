1).
  var student={
	firstname: "P",
	lastname: "Bharath",
    getFullName:function(){
        console.log(this.firstname + this.lastname);
    }
    setFullName:function(){
    	try{
    		if((len(this.firstname)+len(this.lastname)) >= 3) throw "length greater than 3";
    		if(isNaN(firstname)) throw "a string";
    	}
        catch(err){
        	console.log(err);
        }

    }
}

student.getFullName();
student.setFullName();

2).
 const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @abc or abc@gmail.com';

console.log(ex1.match(/\b\w{3}\b/g));
console.log(ex2.replaceAll(/\d+/g, ""));
console.log(ex3.match(/(?<=\$)\d+\.\d+/g));
console.log(ex4.match(/\d{4}\s\d{3}\s\d{3}/g));
console.log(ex5.match(/\w+@\w+.com/g));