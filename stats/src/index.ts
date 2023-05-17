import { MatchReader } from './concepts/composition/MatchReader';

import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv');
// const matcherReader = new MatchReader(csvFileReader);
const matcherReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Fulham');

matcherReader.load();
summary.buildAndPrintReport(matcherReader.matches);
