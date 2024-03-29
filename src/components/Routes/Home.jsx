import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import * as site from '../../constants/site';
import styles from './styles.css';
import imageBrownDog from '../../assets/images/slides/browndog.jpeg';
import imageLick from '../../assets/images/slides/lick.jpeg';
import imageClaireField1 from '../../assets/images/slides/claire_field_1.jpg';
import imageClaireField2 from '../../assets/images/slides/claire_field_2.jpg';
// import imageClaireField3 from '../../assets/images/slides/claire_field_3.jpg';
import imageHattie from '../../assets/images/slides/hattiefield.jpg';
import imagePussy from '../../assets/images/slides/pussy.jpg';
import imageRunning from '../../assets/images/slides/running.jpg';
import imageTummyRub from '../../assets/images/slides/tummy_rub.jpg';
import imageBench from '../../assets/images/slides/bench.jpg';
// import imageSummer from '../../assets/images/slides/summer.jpg';
import imageClaireMountain from '../../assets/images/slides/claire_mountain.jpg';
// import imageBeagleWalk from '../../assets/images/slides/beagles-walking.jpg';
// import imageGrassJump from '../../assets/images/slides/grass_jump.jpg';
import imageGang from '../../assets/images/slides/gang.jpg';
import imageDaneKiss from '../../assets/images/slides/dane_kiss.jpg';
// import imageBigTongue from '../../assets/images/slides/big_tongue.jpg';

const columnsCopy = [`
# ${site.strap}
## ${site.description}
`, `
For most people who own a dog or small pet, having someone look after them while away proves to be a major problem. This includes work, holidays or other commitments. 

>Simply, who can take care of their dog, cat or small pet while the owner is away? 
`, `
**${site.name}** primarily focuses on providing dog walks. However, we also provide secondary services alongside this including garden breaks, pet taxi, cat sitting, small pet care and puppy socialisation time.
`];

function Home() {
  return (
    <Layout
      className={styles.layout}
      slideShowImages={[
        imageLick, imageBench,
        imageBrownDog, imageTummyRub,
        imageRunning, imageClaireField1,
        imageDaneKiss, imageGang,
        imagePussy, imageHattie, imageClaireField2,
        imageClaireMountain
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
