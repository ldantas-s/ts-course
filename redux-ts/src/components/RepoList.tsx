import { memo } from 'react';
import { Repo } from '../state';

type RepoListProps = {
  data?: Repo[];
  isSuccess: boolean;
  isLoading: boolean;
};

const simpleStyle = {
  border: '1px solid grey',
  padding: '8px 16px',
  margin: '8px 0',
};

const RepoList = memo(({ data = [], isLoading, isSuccess }: RepoListProps) => {
  if (isLoading) return 'loading...';
  if (isSuccess && !Object.keys(data).length) return 'no content yet!';
  console.log('babe');

  return (
    <div>
      <h3>PackageList</h3>
      <ul>
        {data.map((repo) => (
          <li key={repo.name} style={simpleStyle}>
            <h4>
              <a
                href={repo.homePageLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                {repo.name}
                <small>{repo.version}</small>
              </a>
            </h4>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default RepoList;
