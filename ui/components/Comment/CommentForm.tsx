import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import CommentAPI from '../../lib/api/comment';

interface CommentFormProps {
  slug: string;
  commentCount: number;
}

interface CreateCommentInput {
  name?: string;
  text: string;
}

export const CommentForm = ({ slug, commentCount }: CommentFormProps) => {
  // Access the client
  const queryClient = useQueryClient();

  const { register, handleSubmit, errors, reset } = useForm();

  // Mutation
  const mutation = useMutation((data: object) => CommentAPI.create(slug, data), {
    onSuccess: () => {
      // reset form
      reset();
      // Invalidate cached comments and refetch
      queryClient.invalidateQueries('comments');
    }
  });

  const onSubmit = async (data: CreateCommentInput) => {
    // Send data to API
    mutation.mutate(data);
  };

  return (
    <div className="border-t-2 border-gray-600 py-8">
      <h2 className="text-2xl mb-4 text-gray-800">{commentCount} Kommentare</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-4">
          <span className="text-sm text-gray-600">Name (optional)</span>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Max Mustermann"
            ref={register({ required: true, maxLength: 80 })}
          />
        </label>
        <label className="block mb-4">
          <span className="text-sm text-gray-600">Kommentar</span>
          <textarea
            name="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows={3}
            ref={register({ required: true, maxLength: 200 })}
          ></textarea>

          {errors.text && <span className="text-sm text-red-500">Kommentar ist leer</span>}
        </label>
        <button
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-700 disabled:opacity-50"
          type="submit"
          disabled={!!errors.comment}
        >
          Absenden
        </button>
      </form>
    </div>
  );
};
