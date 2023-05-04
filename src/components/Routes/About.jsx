import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import Layout from '../Layout/Layout';
import Content from '../Content/Content';
import Columns from '../Columns/Columns';
import imageDogKiss from '../../assets/images/claire_square_dog_kiss.jpg';
// import heroImage from '../../assets/images/slides/claire_field_1.jpg';
import heroImage from '../../assets/images/slides/claireandvictoria.jpg';
import imageVic from '../../assets/images/slides/vicanddog.jpg';
import imageKids from '../../assets/images/kidsbench.jpeg';
// import imageDoraClaire from '../../assets/images/claire_dora.jpg';
import imageVan from '../../assets/images/slides/vans.jpg';
import logoAnimals from '../../assets/images/logo-animals_924x824.png';
import * as site from '../../constants/site';
// import Blog from '../Blog/Blog';

const columnsCopy = [`
# About ${site.name}...
`, `
### Who are ${site.name}?

![A dog kiss](${imageDogKiss})

#### Claire
Mum of two, Claire is an experienced dog walker and beagle owner. She has been Area Officer of Nottingham for The Beagle Welfare Charity since 2008, and was also Trustee and Fundraising Officer (2014-18).

![Claire Buckels family](${imageKids})

Claire (BCCSDip.AdvCanBhv) is a trained Canine Behaviourist and has an Advanced Canine Behaviour Diploma awarded by the [British College of Canine Studies](https://www.britishcollegeofcaninestudies.com/).

![Victoria with Pooch](${imageVic})

#### Victoria
They say you should never work with children or animals, we don’t agree! Victoria’s love for animals prompted a change of career from teacher to dog walker.

Dog mum to Sherlock and crazy about cockers...
`, `
### Why choose ${site.name}?
- DBS checked
- Canine first aid trained
- Fully insured
- We hold various qualifications between us, including level 4 advanced diplomas in canine behaviour and canine law
- Vans fitted with automatic temperature control extraction to the rear and bespoke, key lockable crates to provide cool, safe and secure transport

![The van](${imageVan})

### What is ${site.name}?
- Established in 2018
- Regular or occasional dog walking
- Small pet care
- Garden breaks
- Pet taxi
- Puppy socialisation

### The brand ${site.name}
Many moons ago Claire, the founder of holo-holo spent some transformational time in Hawaii. She was inspired by the way of life, the love for the outdoors and combined this with her passion for animals and their welfare. holo-holo is a Hawaiian term which means ‘going for a walk/adventure/to go out for pleasure’.

We love taking our customers dogs, on a daily holo-holo. It’s not just a walk, it’s a mindset. 🐾

![${site.name} animals](${logoAnimals})
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
