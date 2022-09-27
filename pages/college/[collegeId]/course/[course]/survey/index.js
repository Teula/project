import React from "react";
import Survey from "../../../../../../components/Survey";
import { useRouter } from "next/router";
export default function survey() {
  const router = useRouter();
  return (
    <div>
      <Survey />
    </div>
  );
}
