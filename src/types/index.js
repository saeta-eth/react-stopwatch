// @flow

export type Props = {
  seconds: number,
  minutes: number,
  hours: number,
  theme: 'primary' | 'secondary',
  limit?: string,
  withLoop: boolean,
  defaultStyles: any,
  custom: any,
  onCallback: () => void,
};

export type State = {
  text: string,
  stateHours: number,
  stateMinutes: number,
  stateSeconds: number,
};
