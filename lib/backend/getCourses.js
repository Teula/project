const getCourses = async () => {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();
  return {
    courses,
  };
};

export default getCourses;
