//import buildClient from '../api/build-client';

/* const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
}; */

/* LandingPage.getInitialProps = async context => {
  console.log('LANDING PAGE!');
  const client = buildClient(context);
 // const { data } = await client.get('/api/users/currentuser');
  const data = 1;
  return data;
}; */

const LandingPage = () => {
    return <h1>Landing Page!!</h1>
}

export default LandingPage;