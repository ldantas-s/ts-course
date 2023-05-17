import { machine } from 'os';
import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { MatchResults } from '../MatchResults';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResults.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResults.AwayWin) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
