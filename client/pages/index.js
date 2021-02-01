import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  // console.log(currentUser);
  // axios.get('/api/users/currentuser');
  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async (contex) => {
    const { data } = await buildClient(contex).get('/api/users/currentuser');

    return data;
};

export default LandingPage;
