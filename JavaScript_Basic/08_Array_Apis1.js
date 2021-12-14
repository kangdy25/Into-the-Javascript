// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join(', '));
    // join() : array to string
}

  // Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(','));
    // split(): string to array
    
}

  // Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    
    const array1 = [1, 2, 3, 4, 5];
    // function compare(a, b) {
    //     return b - a;
    // }
    // b - a < 0 => b < a => a보다 b가 앞에 있어야 한다
    // b - a = 0 => b = a => 배치를 그대로 한다
    // b - a > 0 => b > a => b보다 a가 앞에 있어야 한다
    array1.sort((a, b) => b - a);
    console.log(array1);
}

  // Q4. make new array without the first two elements
{
    const array2 = [1, 2, 3, 4, 5];
    array2.shift();
    array2.shift();
    console.log(array2);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

    // students.shift();
    // students.shift();
    // console.log(students);

  // Q5. find a student with the score 90
{
    
            // 음... 90점 찾는 거는 하겠는데... 
            // 왜 자꾸 c학생 이후로 d, e 학생도 출력되는 지 모르겠어요 ㅠㅠ
            // 애초에 for문을 쓸 필요가 없었구나...
    
    const result = students.find(function(student) {
      return student.score === 90;
    });
    console.log(result);
}

// ##############################################################################

  // Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

  // Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);
}

  // Q9. compute students' average score
{ 
  const result = students.reduce((prev, curr) => {
    console.log('===============');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score);
  console.log(result.join(', '));
}

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score);
  result.sort((a, b) => a - b);
  console.log(result.join(', '));
  console.log(result);

}