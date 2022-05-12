import {
  Table,
  Avatar,
  Typography,
} from "antd";
import { Link } from "react-router-dom";

import logo1 from '../../assets/images/mit_logo.jpg'

function EChart() {
  const { Title, Paragraph } = Typography;

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      width: "32%",
    },
    {
      title: "COUNTRY",
      dataIndex: "country",
      key: "country",
    },

    {
      title: "RANKING",
      key: "ranking",
      dataIndex: "ranking",
    },
  ];

  const data = [
    {
      key: "1",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={30}
              src={logo1}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>MIT</Title>
              <Link to={{
                pathname: 'https://www.mit.edu/'
              }}>mit.edu</Link>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      country: (
        <>
          <div className="author-info">
            <Title level={5}>United States</Title>
          </div>
        </>
      ),

      ranking: (
        <>
          <Title level={5}>
            #1
          </Title>
        </>
      ),
    },
    {
      key: "2",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={30}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Harvard</Title>
              <Link to={{
                pathname: 'https://www.mit.edu/'
              }}>harvard.edu</Link>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      country: (
        <>
          <div className="author-info">
            <Title level={5}>United States</Title>
          </div>
        </>
      ),

      ranking: (
        <>
          <Title level={5}>
            #3
          </Title>
        </>
      ),
    },
    {
      key: "3",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={30}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Yale</Title>
              <Link to={{
                pathname: 'https://www.mit.edu/'
              }}>yale.edu</Link>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      country: (
        <>
          <div className="author-info">
            <Title level={5}>United States</Title>
          </div>
        </>
      ),

      ranking: (
        <>
          <Title level={5}>
            #5
          </Title>
        </>
      ),
    },
    {
      key: "4",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={30}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>University of Edinburgh</Title>
              <Link to={{
                pathname: 'https://www.mit.edu/'
              }}>ed.ac.uk/</Link>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      country: (
        <>
          <div className="author-info">
            <Title level={5}>United Kingdom</Title>
          </div>
        </>
      ),

      ranking: (
        <>
          <Title level={5}>
            #14
          </Title>
        </>
      ),
    },
  ];

  return (
    <>
      <div>
        <Title level={5} style={{ fontWeight: '700' }}>My universities</Title>
        <div className="table-responsive" style={{ marginTop: '2rem' }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="ant-border-space"
          />
        </div>
      </div>
    </>
  );
}

export default EChart;
