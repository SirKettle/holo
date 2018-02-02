import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Content from '../Content/Content';
import imageDogKiss from '../../assets/images/claire_square_dog_kiss.jpg';

const markdown = `
## Who is holo holo?

Claire Buckels:
- Partner and Mum of 2.
- Trustee and Fundraising Officer for The Beagle Welfare Charity since 2014
- The Beagle Welfare Charity, AO for Nottingham for 10 years
- Passionate pet owner
- Experienced dog walker
- Canine behaviourist BCCSDip.AdvCanBhv

---

![A dog kiss](${imageDogKiss})
_Claire with one of her pet dogs, Alfie._
`;

function About() {
  return (
    <Layout>
      <Content markdown={markdown} />
    </Layout>
  );
}

export default connect(() => routeNodeSelector(''))(About);
