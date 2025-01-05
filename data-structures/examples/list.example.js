import List from "../list.js";


// Create a new list
const list = new List(10, 20, 30);
console.log([...list]); // Output: [10, 20, 30]

// push() - Add an element to the end of the list
list.push(40);
console.log([...list]); // Output: [10, 20, 30, 40]

// pop() - Remove the last element of the list
const popped = list.pop();
console.log(popped);    // Output: 40
console.log([...list]); // Output: [10, 20, 30]

// get() - Retrieve an element by index
const element = list.get(1);
console.log(element);   // Output: 20

// update() - Update an element at a specific index
list.update(1, 25);
console.log([...list]); // Output: [10, 25, 30]

// insert() - Insert an element at a specific index
list.insert(1, 15);
console.log([...list]); // Output: [10, 15, 25, 30]

// delete() - Delete an element at a specific index
const deleted = list.delete(2);
console.log(deleted);   // Output: 25
console.log([...list]); // Output: [10, 15, 30]

// Iterate over the list using for...of loop
for (const item of list) {
  console.log(item); // Output: 10, 15, 30 (one per line)
}