// @flow

export type Props = {
  seconds: number,
  minutes: number,
  hours: number,
  limit?: string,
  autoStart?: boolean,
  withLoop?: boolean,
  onChange?: () => void,
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
