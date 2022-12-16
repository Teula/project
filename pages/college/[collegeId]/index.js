import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// export async function getStaticProps(context) {
//   const { params } = context;
//   const response = await fetch("");
//   return {
//     props: {},
//   };
// }

// export function getStaticPaths() {
//   return {
//     paths: [{ params: { collegeId: "620cecf18039a44dbae90f51" } }],
//     fallback: "blocking", //indicates the type of fallback
//   };
// }
export default function Index() {
  const router = useRouter();
  return (
    <div>
      <Link href={`/college/${router.query.collegeId}/course`}>courses</Link>
    </div>
  );
}
