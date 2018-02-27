import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as site from '../../constants/site';
import heroImage from '../../assets/images/black_dog_ears.jpg';

const columnsCopy = [`
## What my clients have said about **${site.name}**
---
`, `
>I would highly recommend Claire. She is highly experienced and qualified with animals of all types but especially doggies. She is very professional, fun, caring and loving towards the animals she cares for. Your pet will be in excellent hands.

_Sara Rutherford-Spencer_

---

>Claire is such a lovely lady who deeply cares about the animals she looks after. Hattie, our cocker spaniel gets so excited whenever we arrive at her house

_Will Thirkettle_
`, `
>Thank you for looking after our rabbit Claire! Your service was a real “home from home”, you accommodated all his quirks with the utmost professionalism & your dedicated care during our holiday means he has come back much calmer & friendly! I would have no hesitation in recommending this service at all, we’ll definitely be using you again! Thank you!

_Katherine Crossley_
`];

function Testimonials() {
  return (
    <Layout
      hero={heroImage}
    >
      <Content markdown={columnsCopy[0]} />
      <Columns>
        <Content markdown={columnsCopy[1]} justifyText="justify" />
        <Content markdown={columnsCopy[2]} justifyText="justify" />
      </Columns>
    </Layout>
  );
}

export default connect(() => routeNodeSelector(''))(Testimonials);
