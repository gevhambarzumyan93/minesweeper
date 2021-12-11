import { Button } from 'antd';
import { signIn } from 'api/auth';

export default () => {
  const handleLogIn = async () => {
    console.log('MTAV');
    try {
      const user = await signIn({
        username: 'zvart+digitain@ultralabs.io',
        password: 'Admin@123',
      });
      console.log(user, '< handleLogIn USER');
    } catch (e) {
      console.log(e, '< ERROR');
    }
  };
  return (
    <>
      <Button onClick={handleLogIn}> YANIM LOGIN :D </Button>
    </>
  );
};
