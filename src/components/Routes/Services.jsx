import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Sections from '../Sections/Sections';
import * as site from '../../constants/site';
// import * as site from '../../constants/site';
import imageClaireMountain from '../../assets/images/slides/claire_mountain.jpg';
import imageRabbit from '../../assets/images/services/rabbit-hutch.jpg';
// import imageBlackDog from '../../assets/images/services/dogdaycare.jpg';
// import imageFletcherWalk from '../../assets/images/services/outdoorssunshinewalk.jpg';
import imageDogTreats from '../../assets/images/services/dog_treats.jpg';
import imageDogFaces from '../../assets/images/services/dogfaces.jpg';
// import imageFletcherWalk from '../../assets/images/services/walk_fletcher.jpg';
// import imageWalkBeagles from '../../assets/images/services/walk_beagles.jpg';
import imageRunning from '../../assets/images/services/running.jpg';
// import imageGardenBreak from '../../assets/images/services/garden_break.jpg';
import imagePuppy from '../../assets/images/services/puppy2.jpg';
import imagePetTaxi from '../../assets/images/services/pettaxi.jpg';
import imageCats from '../../assets/images/services/cats.jpg';

const copy = `
# Services

## ${site.name} primarily focuses on providing dog walks.

### However, I also provide secondary services alongside this including garden breaks, pet taxi, cat sitting, small pet care and puppy socialisation time.
`;

const eveningBankHolidaysWalkSpiel = 'Evening (after 5pm) weekend and bank holiday walks are charged a rate of time & a half.';
const eveningBankHolidaysSpiel = 'Evening (after 5pm) weekend and bank holidays are charged a rate of time & a half.';

const sections = [{
  image: imageRunning,
  title: '30 minute walk',
  details: '30 minutes’ walk either by themselves or as a group. Rural locations and local parks. Towel dried on return',
  label: `30 minutes £8, £4 per additional dog, 1-2-1 dog walking £12. ${eveningBankHolidaysWalkSpiel}`

}, {
  image: imageDogTreats,
  title: '60 minutes walk',
  details: '60 minutes’ walk either by themselves or as a group. Rural locations and local parks. Towel dried on return',
  label: `60 minutes £11, £5 per additional dog, 1-2-1 dog walking £15. ${eveningBankHolidaysWalkSpiel}`
}, {
  image: imageDogFaces,
  title: 'Garden break',
  details: 'For dogs who for some reason don’t need walking but just need a garden break and a little company ',
  label: `30 minutes £8. ${eveningBankHolidaysSpiel}`
}, {
  image: imagePetTaxi,
  title: 'Pet taxi',
  details: 'I’ll transport your pet to the vet or to any other destination for you and save you the anxieties ',
  label: `Duration varies £8 per 30 minutes. ${eveningBankHolidaysSpiel}`
}, {
  image: imagePuppy,
  title: 'Puppy socialisation time',
  details: 'Having studied canine behaviour, I understand the importance of socialisation from a young age and the impact the lack of it can have on a dogs future behaviour. If you’re too busy, I can introduce them to everyday stimuli. Traffic, dog groups, children etc and work on basic training',
  label: `£8 per 30 minutes. ${eveningBankHolidaysSpiel}`
}, {
  image: imageCats,
  title: 'Cat sitting ',
  details: 'I will visit your cat whilst you’re at work or away on holiday, avoiding the need for a cattery.  I provide lots of love and cuddles, feed, water and clean litter trays',
  label: '15 minutes £6, £10 for two daily visits'
}, {
  image: imageRabbit,
  title: 'Small pet care',
  details: 'I will feed and water your animal, play and clean cages/bedding. All animals catered for, big or small',
  label: '15 minutes £6, £10 for two daily visits'
}];

function Services() {
  return (
    <Layout
      hero={imageClaireMountain}
      heroCopy={copy}
    >
      <Sections sections={sections} />
    </Layout>
  );
}

export default connect(() => routeNodeSelector(''))(Services);
