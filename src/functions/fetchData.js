import { useEffect, useState } from "react";

export const useGetLesson = (lessonId) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const url = `https://smartlittlefox-api.herokuapp.com/lessons/${lessonId}`;

  const getData = async () => {
    const response = await fetch(url);
    const datadb = await response.json();
    setData(datadb);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { loading, data };
};
