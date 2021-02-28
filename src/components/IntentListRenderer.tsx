import React, { useState, useEffect, useRef } from 'react';
import { ListGroup } from 'react-bootstrap';
import IntentListItem from './IntentListItem';
import {
  IntentProps,
  IntentListItemProps,
  IntentListRendererProps
} from '../interfaces/types';

export const checkBoxState = Object.freeze({
  CHECKED: 'checked',
  UNCHECKED: 'unchecked',
  MIXED: 'mixed'
});

const IntentListRenderer: React.FC<IntentListRendererProps> = (
  props: IntentListRendererProps
) => {
  const [checkState, setCheckState] = useState('unchecked');
  const checkRef: any = useRef();

  useEffect(() => {
    if (
      checkState === checkBoxState.MIXED &&
      Object.entries(props.selectedIntents).length === props.intents.length
    ) {
      setCheckState(checkBoxState.CHECKED);
    } else if (
      checkState === checkBoxState.MIXED &&
      Object.entries(props.selectedIntents).length === 0
    ) {
      setCheckState(checkBoxState.UNCHECKED);
    } else {
      checkRef.current.indeterminate = checkState === checkBoxState.MIXED;
    }
  }, [checkState, setCheckState, props.selectedIntents]);

  const handleChange = () => {
    if (checkState === checkBoxState.CHECKED) {
      props.unselectAllIntent();
      setCheckState(checkBoxState.UNCHECKED);
    } else {
      props.selectAllIntent();
      setCheckState(checkBoxState.CHECKED);
    }
  };

  return (
    <div style={{ minWidth: '14rem' }}>
      <ListGroup>
        <ListGroup.Item style={{ backgroundColor: '#DCDCDC' }}>
          <div>
            <strong>Message Types</strong>
            <input
              type="checkbox"
              ref={checkRef}
              style={{
                float: 'right',
                marginTop: '.3rem',
                marginRight: '.4rem'
              }}
              checked={checkState === checkBoxState.CHECKED}
              onChange={handleChange}
            />
          </div>
        </ListGroup.Item>
        <div className="listItem">
          {props.intents.map((intent: IntentProps) => {
            const intentListItemProps: IntentListItemProps = {
              selectIntent: props.selectIntent,
              unselectIntent: props.unselectIntent,
              intent,
              checkState,
              setCheckState
            };
            return <IntentListItem {...intentListItemProps} key={intent.id} />;
          })}
        </div>
      </ListGroup>
    </div>
  );
};

export default IntentListRenderer;
