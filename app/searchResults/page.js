"use client";

import { useRouter } from "next/navigation";

const SearchResults = () => {
  const router = useRouter();
  const query = router.query;

  console.log(query);

  return (
    <div>
      <h1>User searched for: {query}.</h1>
    </div>
  );
};

export default SearchResults;
