import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type SearchTermProps = {
  term: string;
  setTerm: Dispatch<SetStateAction<string>>;
  setSkip: Dispatch<SetStateAction<boolean>>;
  disableButton: boolean;
};

const SearchTerm = ({
  setSkip,
  setTerm,
  term,
  disableButton,
}: SearchTermProps) => {
  const onClick = (): void => {
    if (!term) return;

    setSkip(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.target.value);
    setSkip(true);
  };

  return (
    <div>
      <input type="text" value={term} onChange={onChange} />
      <button onClick={onClick} disabled={disableButton}>
        Search
      </button>
    </div>
  );
};

export default SearchTerm;
