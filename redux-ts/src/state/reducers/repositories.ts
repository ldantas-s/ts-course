import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://registry.npmjs.org/-/v1/search';

type PackageResponse = {
  objects: {
    package: {
      name: string;
      scope: string;
      version: string;
      description: string;
      keywords: string[];
      date: string;
      links: {
        npm: string;
        homepage: string;
        repository: string;
        bugs: string;
      };
      publisher: {
        username: string;
        email: string;
      };
      maintainers: {
        username: string;
        email: string;
      }[];
    };
  }[];
};

export type Repo = {
  name: string;
  version: string;
  description: string;
  homePageLink: string;
};

export const repositories = createApi({
  reducerPath: 'repositories',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getRepoByTerm: builder.query<Repo[], string>({
      query: (term?: string) => `?text=${term}`,
      transformResponse: (packages: PackageResponse) => {
        return packages.objects.map((repo) => ({
          name: repo.package.name,
          description: repo.package.description,
          homePageLink: repo.package.links.homepage,
          version: repo.package.version,
        }));
      },
    }),
  }),
});

// pesquisar mais sobre como usar o hook sem ele fazer a primeira chamar automática
export const { useGetRepoByTermQuery, useLazyGetRepoByTermQuery } =
  repositories;
