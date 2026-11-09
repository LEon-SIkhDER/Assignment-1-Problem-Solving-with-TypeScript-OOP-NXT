## 4.How do Generics work in TypeScript, and how do they help when working with asynchronous Promise<T> responses?
ans:Generics in TypeScript: Understanding Reusable Types and Asynchronous Promise\

Generics type help us from  defining a specific type every time, we can use a placeholder like T. TypeScript assign the actual type when we use the function or type.
Generics in TypeScript allow us to write reuseable and flexible code without defining a specific type every time. Instead of set a particular type, we can use a placeholder <T>. Typescript automatically set the actual type when we use the function, interface, or type. this helps us to maintain type safety while working with different type of data. 

Generics help with asynchronous Promise<T> responses by telling TypeScript what type of data a Promise will return when it resolves.
Generics are also useful when working with asynchronous operations. A promise represent a value that may not be available immediately but will be returned in the future. the <T> tells Typescript what type of data the promise will return when it successfully resolves. This allows TypeScript to understand the response data and provide proper type checking. 
