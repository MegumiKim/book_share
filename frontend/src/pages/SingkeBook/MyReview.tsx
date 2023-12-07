import { useEffect, useState } from "react";
import RatingStars from "../../components/RatingStars";
import { useFetch } from "../../hooks/useFetch";

const MyReview = ({ id, reviewUpdated }) => {
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const URL = `http://localhost:5000/books/${id}`;
      const result = await fetch(URL);
      const jsonData = await result.json();
      setData(jsonData);
    };

    fetchData();
  }, [id, reviewUpdated]);

  if (!data) {
    return <></>;
  }
  return (
    <>
      {data?.review && (
        <section className="my-5 outline rounded-sm p-4">
          <h1>My Review</h1>
          {data.review && (
            <div>
              <RatingStars rating={data.review?.rating} />
              {/* <div>Name: {rev.name}</div>
                <div>Subject: {rev.subject}</div> */}
              {<div>{data.review.text}</div>}
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default MyReview;
