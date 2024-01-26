import { Button } from 'antd';
import { getRoles } from './service'

const RoleModlue = () => {

  const click = () => {
    getRoles().then(res => {
      console.log(res);
    })
  }

  return (
    <>
      <Button onClick={click}>查看</Button>
    </>
  );
};

export default RoleModlue;
