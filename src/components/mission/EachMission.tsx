interface IProps {
  mission: string;
}
const EachMission = ({ mission }: IProps) => {
  const { text }: any = mission;
  return (
    <>
      <div>{text}</div>
    </>
  );
};
export default EachMission;
