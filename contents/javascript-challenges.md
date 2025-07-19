---
title: Javascript Challenges
date: 2025-07-19T14:17:35.164Z
tags: contents
---
# Challenges

1. [x] Print numbers from 1 to 10.

2. [x] Print even numbers from 0 to 20.

3. [x] Calculate the sum of numbers from 1 to 100.

4. [x] Display a multiplication table for a user-input number.

5. [x] Reverse a string entered by the user.

6. [x] Count the vowels in a string.

7. Find the maximum number in an array [3, 7, 2, 9, 4].

8. Create a simple calculator (supports +, -, \*, /).

9. Check if a number is prime.

10. Guess the number game (computer picks a number from 1–10, user keeps guessing until correct).

-﻿-- 
﻿

1. Print numbers from 1 to 10.

_My Solution:_

```js
  for(i = 0; i <= 10; i++){
    console.log(i);
  }
```

**Time Complexity**
\
According to [Big O Calc](https://www.bigocalc.com/)

_The given code is a simple for loop that iterates from 0 to 10 inclusive, printing each value of i.
\
\
Time Complexity:
The loop runs exactly 11 times (from 0 to 10). Therefore, the time complexity is O(n), where n is the number of iterations. In this specific case, n is a constant (11), so the overall time complexity can be considered O(1) (constant time). However, generally, for loops that depend on a variable n, the complexity is O(n).
\
\
Space Complexity:
The space used by the program is constant, as it only stores a few variables (i). No additional data structures are used that grow with input size. Therefore, the space complexity is O(1).
\
\
In summary:
Time complexity: O(n) (or O(1) for this specific fixed range)
Space complexity: O(1)_

\
2. Print even numbers from 0 to 20

_My Solution:_

```js
let num = 0;

while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
```

**Time Complexity**
\
According to [Big O Calc](https://www.bigocalc.com/)

_The code initializes a variable `num` to 0 and runs a while loop until `num` exceeds 20. Inside the loop, it checks if `num` is even and logs it if so, then increments `num` by 1 each iteration._

_Time complexity: The loop runs from 0 to 20 inclusive, so it executes approximately 21 times. Since the number of iterations is fixed and does not depend on input size, the time complexity is O(1), a constant time._

_Space complexity: The only additional space used is for the variable `num` and a few temporary variables within the loop. This means the space complexity is also O(1), constant space._

_Overall, both time and space complexities are constant because the loop runs a fixed number of times regardless of external input._

_Suggested Solution:_

```js
let num = 0;
while (num <= 20) {
  console.log(num);
  num += 2; // skip odd numbers
}
```

Now it runs only 11 iterations instead of 21.
Removes if check, so it’s slightly more efficient and cleaner.

\
3. Calculate the sum of numbers from 1 to 100.

_My Solution:_

```js
let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
  console.log(sum);
}
```

**Time Complexity**
\
According to [Big O Calc](https://www.bigocalc.com/)

_The code performs a simple loop from 0 to 100, summing the values of i and printing the running total at each step.
\
\
Time complexity: O(n), where n is 100 in this case. Since the loop runs 101 times (from 0 to 100 inclusive), the number of operations scales linearly with n.
\
\
Space complexity: O(1). The only additional space used is for the variables sum and i, which are constant in size regardless of n.
\
\
Overall, the code has linear time complexity and constant space complexity._
﻿