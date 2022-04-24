import ReactApexChart from "react-apexcharts";
import { Typography, Card } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";

function LineChart() {
  const { Title, Paragraph } = Typography;

  const components = [
    {
      title: 'Personal Description',
      done: '66%'
    },
    {
      title: 'Achievements',
      done: '50%'
    },
    {
      title: 'Essays',
      done: '0%'
    }
  ]

  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>Portfolio</Title>
          <Paragraph className="lastweek" style={{ marginTop: '0.5rem' }}>
            Status: <span className="bnb2">In progress...</span>
          </Paragraph>
        </div>
      </div>

      {
        components.map(comp => (
          <Card key={comp.title} style={{marginTop: '0.5rem'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <p style={{fontWeight: '600'}}>{comp.title}</p>
              <p style={{color: '#5999ff', fontWeight: '600'}}>{comp.done}</p>
            </div>
            <div>
              <p>2 out of 3 components completed</p>
            </div>
          </Card>
        ))
      }

    </>
  );
}

export default LineChart;
