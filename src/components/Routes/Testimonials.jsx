import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as site from '../../constants/site';
import heroImage from '../../assets/images/black_dog_ears.jpg';

const columnsCopy = [`
## Testimonials 
### What my clients have said about **${site.name}**
`, `
>Claire is literally the dog's b*&%$@ks at looiking after errr... dogs

_Will Thirkettle_
`, `
>Claire takes my beagles for wonderful walks innit

_The Queen of England_
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
