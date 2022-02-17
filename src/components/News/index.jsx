import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody } from "reactstrap";
import { PATH_API_WITH_SLESH } from "../../constants";
import newsImg from "../../assets/images/topic_statistics.jpg";
import { Link } from "react-router-dom";
import Loader from "../../additionals/loader";
import { Pagination } from "antd";

const News = () => {
  const [data, setData] = useState([]);
  const [isLoad, setisLoad] = useState(true);
  const [meta, setmeta] = useState({});
  const [current, setcurrent] = useState(1);
  useEffect(() => {
    setisLoad(true);
    axios({
      url: `${PATH_API_WITH_SLESH}/public/v1/posts?limit=5`,
      method: "GET",
    }).then((res) => {
      setData(res?.data?.data);
      setmeta(res?.data?.meta)
      setisLoad(false);
    });
  }, [current]);

  return (
    <div className="container mt-4">
      {isLoad ? (
        <Loader />
      ) : (
        <div className="row">
          {data &&
            data.map((item, index) => (
              <div
                key={index}
                className="col-md-4 col-xl-3 col-sm-6"
                style={{ marginBottom: "30px" }}
              >
                <Link to={`${item.id}`}>
                  <Card className="news-card">
                    <CardBody>
                      <img src={newsImg} alt="" className="content-news" />
                      <p className="news-title">{item?.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                          <p className="news-title">User ID</p>
                          <p className="news-title">{item?.user_id}</p>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              </div>
            ))}
          <div className="col-12 text-right" style={{ marginBottom: "30px" }}>
            <Pagination
              defaultCurrent={current}
              onChange={(e) => setcurrent(e)}
              total={meta?.pagination?.total}
              showSizeChanger={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default News;
