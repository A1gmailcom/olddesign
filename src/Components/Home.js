import React from 'react';
import Home1 from '../Components/Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from './Home5';
import Home6 from './Home6';
import Home7 from './Home7';
import Home8 from './Home8';
import Home9 from './Home9';
import Home10 from './Home10';


const Home = React.memo(() => {

  return (
    <div>
      <Home1 />
      <Home2/>
      <Home3/>
      <Home4/>
      <Home5/>
      <Home6/>
      <Home7/>
      <Home8/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1.3))' }}>
  <Home9 />
  <Home10 />
</div>

    </div>
  );
});

export default Home;
