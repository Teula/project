import AddCourse from "../../../components/AddCourse";
import { Container } from "@mui/material";
import getCourses from "../../../lib/backend/getCourses";

export async function getStaticProps() {
  const data = await getCourses();
  return {
    props: {
      courses: data.courses.map((course) => {
        return {
          name: course.name,
          id: course._id,
          //   code: course.code,
        };
      }),
    },
  };
}

export default function Add(props) {
  const { courses } = props;

  return (
    <div>
      <Container maxWidth='sm'>
        <AddCourse courses={courses} />
      </Container>
    </div>
  );
}
