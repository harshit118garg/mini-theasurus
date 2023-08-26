import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Words {
  word: string;
  score: number;
}

type ApiResponse = Words[];

const BASEURL = `https://api.datamuse.com`;

export const wordsSlice = createApi({
  reducerPath: "getWords",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  tagTypes: ["Words"],
  endpoints: (builder) => ({
    getSynonyms: builder.query<ApiResponse, string>({
      query: (word: string) => `/words?rel_syn=${word}`,
      providesTags: ["Words"],
    }),
    getAntonymn: builder.query<ApiResponse, string>({
      query: (word: string) => `/words?rel_ant=${word}`,
      providesTags: ["Words"],
    }),
  }),
});

export const { useGetSynonymsQuery, useGetAntonymnQuery } = wordsSlice;
