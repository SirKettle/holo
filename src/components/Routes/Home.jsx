import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Content from '../Content/Content';
import * as site from '../../constants/site';

const markdown = `
# ${site.name}

## ${site.strap}
`;

function Home() {
  return (
    <Layout>
      <Content markdown={markdown} />
    </Layout>
  );
}

export default connect(() => routeNodeSelector(''))(Home);
