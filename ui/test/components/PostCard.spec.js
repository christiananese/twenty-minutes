import { render } from '@testing-library/react';
import PostCard from '../../components/PostCard';

describe('PostCard', () => {
  let expectedProperties;

  beforeEach(() => {
    expectedProperties = {
      title: 'Post Title',
      excerpt: "I'm a short excerpt",
      featureImage: 'https://source.unsplash.com/random',
      commentCount: 10
    };
  });

  test('the component should render the posts title and excerpt', () => {
    const { getByText, getByAltText } = render(<PostCard {...expectedProperties} />);
    const title = getByText(expectedProperties.title);
    const excerpt = getByText(expectedProperties.excerpt);
    const image = getByAltText(expectedProperties.title);

    expect(title).toBeVisible;
    expect(excerpt).toBeVisible;
    expect(image).toBeVisible;
  });

  test('the component image should have the title as alt-tag', () => {
    const { getByAltText } = render(<PostCard {...expectedProperties} />);
    const image = getByAltText(expectedProperties.title);

    expect(image).toBeVisible;
  });

  test('the component should render the number of comments associated to the post', () => {
    const { getByText } = render(<PostCard {...expectedProperties} />);
    const expectedCommentText = `${expectedProperties.commentCount} Kommentare`;
    const commentCountText = getByText(expectedCommentText);

    expect(commentCountText).toBeVisible;
  });
});
