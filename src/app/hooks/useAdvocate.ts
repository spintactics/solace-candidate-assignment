import { useEffect, useState } from "react";
import { Advocate } from "../../types/advocates"

export default function useAdvocate() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching advocates:", error);
        setLoading(false);
      });
    }, []);

    return { advocates, loading };
}
