export interface IntentProps {
  id: string;
  name: string;
  description: string;
  trainingData: {
    expressionCount: number;
    expressions: { id: string; text: string }[];
  };
  reply: {
    id: string;
    text: string;
  };
}

export interface IntentListItemProps {
  selectIntent: Function;
  unselectIntent: Function;
  setCheckState: Function;
  checkState: string;
  intent: IntentProps;
}

export interface IntentListRendererProps {
  selectedIntents: { [key: string]: IntentProps };
  intents: IntentProps[];
  selectAllIntent: Function;
  unselectAllIntent: Function;
  selectIntent: Function;
  unselectIntent: Function;
}

export interface IntentListProps {
  selectedIntents: { [key: string]: IntentProps };
  intents: IntentProps[];
  fetchIntents: Function;
  selectAllIntent: Function;
  unselectAllIntent: Function;
  selectIntent: Function;
  unselectIntent: Function;
}

export interface IntentDetailsProps {
  selectedIntents: { [key: string]: IntentProps };
}
