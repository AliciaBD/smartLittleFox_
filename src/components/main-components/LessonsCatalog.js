import React, { useState, useEffect } from "react";
import CatalogCard from "./lessons-catalog/CatalogCard";
import Loading from "../loading/Loading";

export const useGetLessons = (url) => {
  const [lessons, setLessons] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLessons(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { loading, lessons };
};

const LessonsCatalog = () => {
  let url = "https://smartlittlefox-api.herokuapp.com/lessons";

  const { loading, lessons } = useGetLessons(url);

  if (loading) return <Loading />;

  return (
    <section className="lessons">
      <div className="lessons-catalog">
        {lessons.map((lesson) => {
          const { lesson_id, lesson_title, thumbnail } = lesson;

          const titleUrl = lesson_title.replaceAll(" ", "-").toLowerCase();

          const link = `/${titleUrl}/${lesson_id}`;

          const image_thumbnail = <img src={thumbnail} alt="thumbnail" />;

          return (
            <CatalogCard
              key={lesson_id}
              lesson={link}
              image={image_thumbnail}
              title={lesson_title}
            ></CatalogCard>
          );
        })}
      </div>
    </section>
  );
};

export default LessonsCatalog;
