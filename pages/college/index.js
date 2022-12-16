import React from "react";
import Link from "next/link";

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/college");
  const data = await response.json();

  return {
    props: {
      colleges: data.colleges.map((college) => {
        return { name: college.name, id: college._id };
      }),
    },
  };
}

export default function Index(props) {
  const { colleges } = props;
  const college = colleges.map((c) => (
    <Link key={c.id} href={`college/${c.id}`}>
      <h1 key={c.id}>{c.name}</h1>
    </Link>
  ));
  console.log(colleges);
  return (
    <div>
      all colleges
      {college}
    </div>
  );
}
