import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import imageDogKiss from '../../assets/images/claire_square_dog_kiss.jpg';
import heroImage from '../../assets/images/beagles-walking.jpg';
import * as site from '../../constants/site';

const columnsCopy = [`
# About ${site.name}...
`, `
### Who is ${site.name}?

#### Claire Buckels:
- Partner and Mum of 2.
- Trustee and Fundraising Officer for The Beagle Welfare Charity since 2014
- The Beagle Welfare Charity, AO for Nottingham for 10 years
- Passionate pet owner
- Experienced dog walker
- Canine behaviourist BCCSDip.AdvCanBhv

### What is ${site.name}?
- Regular or occasional dog walking
- Small pet care
- Dog day care
- Garden breaks
- Pet taxi
- Puppy socialisation

### Why choose ${site.name}?
- DBS checked
- Canine first aid trained
- Fully insured
- I hold a level 4 accredited advanced diploma in canine behaviour
`, `
![A dog kiss](${imageDogKiss})
_Claire with one of her pet dogs, Alfie._

### The brand holo-holo
- Hawaiian word, literally translating to ‘going for a walk/to go out for pleasure’
- When someone is going holo-holo, they’re adventuring for fun. It’s kind of like a journey without a destination
- My favourite thing to do, namesake and inspiration
- Memories of Hawaii incorporated with my love and passion for animal welfare

`];

function About() {
  return (
    <Layout
      hero={heroImage}
      heroCopy={columnsCopy[0]}
    >
      <Columns>
        <Content markdown={columnsCopy[1]} />
        <Content markdown={columnsCopy[2]} />
      </Columns>
    </Layout>
  );
}

export default connect(() => routeNodeSelector(''))(About);
