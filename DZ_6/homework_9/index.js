let coursesAndDurationArray = [
{title: "JavaScript Complex", monthDuration: 5},

{title: "Java Complex", monthDuration: 6},

{title: "Python Complex", monthDuration: 6},

{title: "QA Complex", monthDuration: 4},

{title: "FullStack", monthDuration: 7},

{title: "Frontend", monthDuration: 4}
]

function courses() {
  const sorted = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

  const filtered = sorted.filter(course => course.monthDuration > 5);

  const transformed = filtered.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
  }));

  return transformed;
}

console.log(courses());
