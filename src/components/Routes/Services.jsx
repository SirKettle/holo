import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Sections from '../Sections/Sections';
import * as site from '../../constants/site';
// import * as site from '../../constants/site';
import imageClaireMountain from '../../assets/images/slides/streamcrop.jpg';
import imageRabbit from '../../assets/images/services/rabbit-hutch.jpg';
import imageSit from '../../assets/images/slides/sit.jpeg';
// import imageBlackDog from '../../assets/images/services/dogdaycare.jpg';
// import imageFletcherWalk from '../../assets/images/services/outdoorssunshinewalk.jpg';
import imageDogTreats from '../../assets/images/services/dog_treats.jpg';
import imageDogFaces from '../../assets/images/services/dogfaces.jpg';
// import imageFletcherWalk from '../../assets/images/services/walk_fletcher.jpg';
// import imageWalkBeagles from '../../assets/images/services/walk_beagles.jpg';
import imageGiant from '../../assets/images/services/giant.jpg';
// import imageGardenBreak from '../../assets/images/services/garden_break.jpg';
import imagePuppy from '../../assets/images/services/instapuppy.jpg';
import imagePetTaxi from '../../assets/images/services/pettaxi.jpg';
import imageCats from '../../assets/images/services/cats.jpg';
import imageVickyWalk from '../../assets/images/services/vic_walk.jpg';

const copy = `
# Services

## ${site.name} primarily focuses on providing dog walks.

### However, we also provide secondary services alongside this including garden breaks, pet taxi, cat sitting, small pet care and puppy socialisation time.
`;

const eveningBankHolidaysWalkSpiel = 'Evening (after 5pm) weekend and bank holiday walks are charged a rate of time & a half.';
const eveningBankHolidaysSpiel = 'Evening (after 5pm) weekend and bank holidays are charged a rate of time & a half.';

const sections = [{
  image: imageSit,
  title: '30 minute walk',
  details: '30 minutes’ walk either by themselves or as a group. Rural locations and local parks. Towel dried on return',
  label: `£9, £5 per additional dog from the same household. Solo £14. ${eveningBankHolidaysWalkSpiel}`

}, {
  image: imageVickyWalk,
  title: '60 minutes walk',
  details: '60 minutes’ walk either by themselves or as a group. Rural locations and local parks. Towel dried on return',
  label: `£12, £7 per additional dog from the same household. Solo £19. ${eveningBankHolidaysWalkSpiel}`
}, {
  image: imageGiant,
  title: 'Garden break',
  details: 'For dogs who for some reason don’t need walking but just need a garden break and a little company ',
  label: `15 mins £7 or £12 for two daily visits. ${eveningBankHolidaysSpiel}`
}, {
  image: imagePuppy,
  title: 'Puppy visits',
  details: 'Having studied canine behaviour, We understand the importance of socialisation from a young age and the impact the lack of it can have on a dogs future behaviour. If you’re too busy, we can introduce them to everyday stimuli. Traffic, dog groups, children etc and work on basic training',
  label: `15 mins £7 or £12 for two daily visits. ${eveningBankHolidaysSpiel}`
}, {
  image: imageRabbit,
  title: 'Small pet care',
  details: 'We will feed and water your animal, play and clean cages/bedding. All animals catered for, big or small',
  label: `15 minutes £7, £12 for two daily visits. ${eveningBankHolidaysSpiel}`
}, {
  image: imageCats,
  title: 'Cat sitting ',
  details: 'We will visit your cat whilst you’re at work or away on holiday, avoiding the need for a cattery.  We provide lots of love and cuddles, feed, water and clean litter trays',
  label: `15 minutes £7, £12 for two daily visits. ${eveningBankHolidaysSpiel}`
}, {
  image: imagePetTaxi,
  title: 'Pet taxi',
  details: 'We’ll transport your pet to the vet or to any other destination for you and save you the anxieties ',
  label: `£14 per 30 minutes. ${eveningBankHolidaysSpiel}`
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
