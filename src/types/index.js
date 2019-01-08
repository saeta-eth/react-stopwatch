// @flow

export type Props = {
  seconds: number,
  minutes: number,
  hours: number,
  limit?: string,
  withLoop: boolean,
  onCallback: () => void,
  render: any,
  children: any,
};

export type State = {
  text: string,
  stateHours: number,
  stateMinutes: number,
  stateSeconds: number,
};
