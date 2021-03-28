import { createSelector } from 'reselect';
import * as site from '../../constants/site';

export const modelSelector = state => state.twitter;

const composeMdImage = datum => `![${site.name}](${datum.get('src')})`;

const getPostedLinkMd = (dateString, url) => {
  const postedText = `Posted ${new Date(dateString).toLocaleDateString()}`;
  if (!url) {
    return postedText;
  }
  return `[${postedText}](${url})`;
};

const composeTweetMd = (tweet) => {
  const images = tweet.get('images').map(composeMdImage).join('');
  return `
  ${images}
  
  ${getPostedLinkMd(tweet.get('createdAtIso'), tweet.get('url'))}${tweet.get('text') ? ` - ${tweet.get('text')}` : ''}
  ---
  `;
};

export const tweetsSelector = createSelector(
  modelSelector,
  (model) => {
    if (!model || !model.get('data')) {
      return null;
    }
    return model.getIn(['data', 'data']);
  }
);

export const tweetsMarkdown = createSelector(
  tweetsSelector,
  (tweets) => {
    if (!tweets) {
      return null;
    }
    return tweets.map(composeTweetMd);
  }
);
