import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
  Input,
} from "antd";

import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import logo from "../assets/images/mit_logo.jpg"

const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


const project = [
  {
    title: "RANKING",
    dataIndex: "ranking",
  },
  {
    title: "NAME",
    dataIndex: "name",
  },
  {
    title: "COUNTRY",
    dataIndex: "country",
  },
  {
    title: "WEBSITE",
    dataIndex: 'website'
  },
  {
    title: "APPLIED",
    dataIndex: "applied",
  },
];
const dataproject = [
  {
    key: "1",

    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={logo} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Massachusets Institute of Technology</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    ranking: (
      <>
        <div className="semibold">#1</div>
      </>
    ),
    applied: (
      <>
        <div className="text-sm">No</div>
      </>
    ),
    country: (
      <>
        <Title level={5}>United States</Title>
      </>
    ),
    website: (
      <>
        <Link to={"https://www.mit.edu/"}>mit.edu</Link>
      </>
    )
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={logo} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Massachusets Institute of Technology</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    ranking: (
      <>
        <div className="semibold">#1</div>
      </>
    ),
    applied: (
      <>
        <div className="text-sm">No</div>
      </>
    ),
    country: (
      <>
        <Title level={5}>United States</Title>
      </>
    ),
    website: (
      <>
        <Link to={"https://www.mit.edu/"}>mit.edu</Link>
      </>
    )
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={logo} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Massachusets Institute of Technology</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    ranking: (
      <>
        <div className="semibold">#1</div>
      </>
    ),
    applied: (
      <>
        <div className="text-sm">No</div>
      </>
    ),
    country: (
      <>
        <Title level={5}>United States</Title>
      </>
    ),
    website: (
      <>
        <Link to={"https://www.mit.edu/"}>mit.edu</Link>
      </>
    )
  },

  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={logo} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Massachusets Institute of Technology</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    ranking: (
      <>
        <div className="semibold">#1</div>
      </>
    ),
    applied: (
      <>
        <div className="text-sm">No</div>
      </>
    ),
    country: (
      <>
        <Title level={5}>United States</Title>
      </>
    ),
    website: (
      <>
        <Link to={"https://www.mit.edu/"}>mit.edu</Link>
      </>
    )
  },

  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={logo} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Massachusets Institute of Technology</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    ranking: (
      <>
        <div className="semibold">#1</div>
      </>
    ),
    applied: (
      <>
        <div className="text-sm">No</div>
      </>
    ),
    country: (
      <>
        <Title level={5}>United States</Title>
      </>
    ),
    website: (
      <>
        <Link to={"https://www.mit.edu/"}>mit.edu</Link>
      </>
    )
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={"/mit_logo.jpg"} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Massachusets Institute of Technology</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    ranking: (
      <>
        <div className="semibold">#1</div>
      </>
    ),
    applied: (
      <>
        <div className="text-sm">No</div>
      </>
    ),
    country: (
      <>
        <Title level={5}>United States</Title>
      </>
    ),
    website: (
      <>
        <Link to={"https://www.mit.edu/"}>mit.edu</Link>
      </>
    )
  },
];

function Universities() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <div style={{ marginTop: '1.5rem', marginBottom: '3rem' }}>
              <Title style={{ marginBottom: '1rem' }} level={4}>Search the university</Title>
              <Input placeholder="Enter university name" />
            </div>

            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Selected universities"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="all">
                    <Radio.Button value="all">All</Radio.Button>
                    <Radio.Button value="online">ONLINE</Radio.Button>
                    <Radio.Button value="store">STORES</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={project}
                  dataSource={dataproject}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
              <div className="uploadfile pb-15 shadow-none">
                <Upload {...formProps}>
                  <Button
                    type="dashed"
                    className="ant-full-box"
                    icon={<ToTopOutlined />}
                  >
                    Click to Upload
                  </Button>
                </Upload>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Universities;
