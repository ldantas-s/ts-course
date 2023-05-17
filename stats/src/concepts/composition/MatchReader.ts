import { dateStringToDate } from '../../utils';
import { MatchResults } from '../../MatchResults';
import { CsvFileReader } from './CsvFileReader';

type MatchData = [Date, string, string, number, number, MatchResults, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResults,
        row[6],
      ]
    );
  }
}
