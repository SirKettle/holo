import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as site from '../../constants/site';
import styles from './styles.css';
import imageHattie from '../../assets/images/hattiefield.jpg';

const columnsCopy = [`
# ${site.strap}
## ${site.description}
`, `
For most people who own a dog or small pet, having someone look after them while away proves to be a major problem. This includes work, holidays or other long distance commitments. 

>Simply, who can take care of their dog, cat or small pet while the owner is away? 
`, `
**${site.name}** primarily focuses on providing dog walks and day care. However, I also provide secondary services alongside this including garden breaks, pet taxi, cat sitting, small pet care and puppy socialisation time.
`];

function Home() {
  return (
    <Layout
      className={styles.layout}
      hero={imageHattie}
      heroCopy={columnsCopy[0]}
    >
      <Columns>
        <Content markdown={columnsCopy[1]} justifyText="justify" />
        <Content markdown={columnsCopy[2]} justifyText="justify" />
      </Columns>
    </Layout>
  );
}

export default connect(() => routeNodeSelector(''))(Home);
