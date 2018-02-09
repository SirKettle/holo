import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import imageDogKiss from '../../assets/images/claire_square_dog_kiss.jpg';

const columnsCopy = [`
## Who is holo holo?

### Claire Buckels:
- Partner and Mum of 2.
- Trustee and Fundraising Officer for The Beagle Welfare Charity since 2014
- The Beagle Welfare Charity, AO for Nottingham for 10 years
- Passionate pet owner
- Experienced dog walker
- Canine behaviourist BCCSDip.AdvCanBhv
`, `
![A dog kiss](${imageDogKiss})
_Claire with one of her pet dogs, Alfie._
`];

function About() {
  return (
    <Layout>
      <Columns>
        <Content markdown={columnsCopy[0]} />
        <Content markdown={columnsCopy[1]} />
      </Columns>
    </Layout>
  );
}

export default connect(() => routeNodeSelector(''))(About);
