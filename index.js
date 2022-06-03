class Stack{
    constructor(n,c,a){
        this.stack=[],
        this.name=n,
        this.city=c,
        this.age=a,
        this.length=0;


    }
    push(el){
        this.stack[this.length]=el;
        this.length++;
        

    }
    pop(){
        this.stack.pop();
        this.length--;
        
    }
    size(){
        
        return this.length
        
    }
    peek(){
        return this.stack[this.length-1]
    }
    reverse(){
        var bag="";
        for (var i=this.length-1;i>=0;i--){
            bag+= this.stack[i]+" ";
        }
        console.log("Reverse is -", bag);
    }
    print(){
        let bag="";
        for (let j=0;j<this.length;j++)
        {
            bag+=this.stack[j]+" ";
        }
        console.log("Print elements -", bag)
    }

        
}
let s1 = new Stack("Rocky", "K.G.F","24");

s1.push(24);
s1.push(11);
s1.push(16);
s1.push(35)
console.log(s1)



s1.pop()
console.log(s1)
console.log( "size is",s1.size())
console.log("peek No. is -",s1.peek());

s1.reverse()

s1.print()
