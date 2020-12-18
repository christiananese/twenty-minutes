import React from 'react';
import { useRouter } from 'next/router';
import { render, act, fireEvent, screen } from '../test-utils';
import PostDetailPage from '../../pages/posts/[slug]';

jest.mock('next/link', () => ({ children }) => children);

describe('PostDetailPage', () => {
  let expectedSubmit, expectedName, expectedText, expectedErrorMessage;

  beforeEach(() => {
    expectedSubmit = jest.fn();
    expectedSubmit.mockResolvedValue('');
    expectedName = 'John Doe';
    expectedText = 'Awesome post';
    expectedErrorMessage = 'Kommentar ist leer';
  });

  test('should not show an error if text is provided', async () => {
    render(<PostDetailPage post={{ slug: 'test1', title: 'test1', commentCount: 0 }} initialComments={[]} />);

    const name = screen.getByLabelText('Name (optional)');
    const text = screen.getByLabelText('Kommentar');
    const signInButton = screen.getByText('Absenden');

    expect(name).toBeVisible();
    expect(text).toBeVisible();
    expect(signInButton).toBeVisible();

    await act(async () => {
      fireEvent.change(name, { target: { value: expectedName } });
      fireEvent.change(text, { target: { value: expectedText } });
      fireEvent.click(signInButton);
    });

    const errorMessage = screen.queryByText(expectedErrorMessage);
    expect(errorMessage).toBeNull();
  });

  test('should show an error if text is not provided', async () => {
    render(<PostDetailPage post={{ slug: 'test1', title: 'test1', commentCount: 0 }} initialComments={[]} />);

    const name = screen.getByLabelText('Name (optional)');
    const text = screen.getByLabelText('Kommentar');
    const signInButton = screen.getByText('Absenden');

    expect(name).toBeVisible();
    expect(text).toBeVisible();
    expect(signInButton).toBeVisible();

    await act(async () => {
      fireEvent.change(name, { target: { value: expectedName } });
      fireEvent.click(signInButton);
    });

    const errorMessage = screen.queryByText(expectedErrorMessage);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should not show an error if name is not provided', async () => {
    render(<PostDetailPage post={{ slug: 'test1', title: 'test1', commentCount: 0 }} initialComments={[]} />);

    const name = screen.getByLabelText('Name (optional)');
    const text = screen.getByLabelText('Kommentar');
    const signInButton = screen.getByText('Absenden');

    expect(name).toBeVisible();
    expect(text).toBeVisible();
    expect(signInButton).toBeVisible();

    await act(async () => {
      fireEvent.change(text, { target: { value: expectedText } });
      fireEvent.click(signInButton);
    });

    const errorMessage = screen.queryByText(expectedErrorMessage);
    expect(errorMessage).toBeNull();
  });
});
