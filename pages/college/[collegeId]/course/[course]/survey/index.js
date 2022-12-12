import React, { useState } from "react";
import Survey from "../../../../../../components/Survey";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
export default function survey() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [comment, setComment] = useState();
  const handleComment = (event) => {
    setComment(event.target.value);
  };
  const handleSubmit = async () => {
    console.log("post", comment, session.user);
    const data = await fetch(
      `http://localhost:3000/api/college/${router.query.collegeId}/courses/${router.query.course}`,
      // /api/college/620dfbb23d2d0a1b624131a8/courses/620dfbb23d2d0a1b624131b6
      {
        method: "POST",
        body: JSON.stringify({ comment, session }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };
  return (
    <div>
      {/* <Survey /> */}
      {session && (
        <div>
          <label>add A comment</label>
          <input onChange={handleComment} type='text' />
          <button onClick={handleSubmit}>submit</button>
        </div>
      )}
    </div>
  );
}
