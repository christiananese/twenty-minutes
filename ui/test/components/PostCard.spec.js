import { render } from '@testing-library/react';
import PostCard from '../../components/PostCard';

describe('PostCard', () => {
  let expectedProperties;

  beforeEach(() => {
    expectedProperties = {
      title: 'Post Title',
      excerpt: "I'm a short excerpt",
      featureImage: 'https://source.unsplash.com/random'
    };
  });

  test('the component should render the posts title', () => {
    const { getByText } = render(<PostCard {...expectedProperties} />);
    const title = getByText(expectedProperties.title);
    const excerpt = getByText(expectedProperties.excerpt);

    expect(title).toBeVisible;
    expect(excerpt).toBeVisible;
  });
});
