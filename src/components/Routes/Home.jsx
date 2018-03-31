import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as site from '../../constants/site';
import styles from './styles.css';
import imageClaireField1 from '../../assets/images/claire_field_1.jpg';
import imageClaireField2 from '../../assets/images/claire_field_2.jpg';
import imageClaireField3 from '../../assets/images/claire_field_3.jpg';
import imageHattie from '../../assets/images/hattiefield.jpg';
import imageBlackDog from '../../assets/images/black_dog_ears.jpg';
import imageClaireMountain from '../../assets/images/claire_mountain.jpg';
import imageBeagleWalk from '../../assets/images/beagles-walking.jpg';

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
      slideShowImages={[
        imageClaireField3, imageClaireField2, imageClaireField1,
        imageHattie, imageBlackDog, imageClaireMountain,
        imageBeagleWalk
      ]}
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
