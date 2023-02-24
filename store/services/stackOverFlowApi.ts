import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_SEARCH_KEY } from "@/consts/main";

export const stackOverFlowApi = createApi({
  reducerPath: 'stackOverFlowApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.stackexchange.com/2.3/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getQuestionsBySearch: builder.query({
      query: ({searchTerm, sortTerm, sortBy}) => `search/advanced/?key=${API_SEARCH_KEY}&site=stackoverflow&order=${sortBy}&sort=${sortTerm}&filter=default&q=${searchTerm}`,
    }),
    getQuestionById: builder.query({
      query: (questionId) => `questions/${questionId}/?key=${API_SEARCH_KEY}&site=stackoverflow`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetQuestionsBySearchQuery, useGetQuestionByIdQuery } = stackOverFlowApi