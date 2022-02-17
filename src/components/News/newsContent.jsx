import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import Loader from "../../additionals/loader";
import newsImg from "../../assets/images/topic_statistics.jpg";
import { PATH_API_WITH_SLESH } from "../../constants";

const NewsContent = () => {
  const [data, setData] = useState({});
  const [isLoad, setisLoad] = useState(false);
  const match = useMatch("/news/:id");

  useEffect(() => {
    setisLoad(true);
    axios({
      url: `${PATH_API_WITH_SLESH}/public/v1/posts/${match?.params?.id}`,
      method: "GET",
    }).then((res) => {
      setData(res?.data?.data);
      setisLoad(false);
    });
  }, []);

  return (
    <div className="container mt-5">
      {isLoad ? (
        <Loader />
      ) : (
        <div className="row">
          <div className="col-md-6">
            <img src={newsImg} alt="" className="content-news" />
          </div>
          <div className="col-md-6">
            <h4>{data?.title}</h4>
            <hr />
            <p>{data?.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default NewsContent;
