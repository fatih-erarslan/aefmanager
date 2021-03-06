const { Radar, RadarChart, PolarGrid, Legend,PolarAngleAxis, PolarRadiusAxis } = Recharts;

const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 150, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },

];

const DemoRadar = React.createClass ({

  render () {
    return (
      <div>
        <RadarChart outerRadius={90} width={730} height={350} data={data} cx={450} startAngle={377} endAngle={17}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <PolarGrid />
          <Legend />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={90} domain={[0, 150]} />
        </RadarChart>
      </div>
    )
  }
});
ReactDOM.render(
  <DemoRadar />,
  document.getElementById('app')
);
