import React, { useState, useEffect } from 'react';
import { ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { checkBoxState } from './IntentListRenderer';
import { IntentListItemProps } from '../interfaces/types';

const IntentListItem: React.FC<IntentListItemProps> = (
  props: IntentListItemProps
) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!checked && props.checkState === checkBoxState.CHECKED) {
      setChecked(true);
    } else if (checked && props.checkState === checkBoxState.UNCHECKED) {
      setChecked(false);
    }
  }, [props.checkState]);

  const handleChange = () => {
    if (!checked && props.checkState === checkBoxState.CHECKED) {
      props.setCheckState(checkBoxState.MIXED);
    } else if (!checked && props.checkState === checkBoxState.MIXED) {
      props.selectIntent(props.intent);
    } else if (checked && props.checkState === checkBoxState.MIXED) {
      props.unselectIntent(props.intent);
    } else if (checked && props.checkState === checkBoxState.CHECKED) {
      props.setCheckState(checkBoxState.MIXED);
      props.unselectIntent(props.intent);
    } else if (!checked && props.checkState === checkBoxState.UNCHECKED) {
      props.setCheckState(checkBoxState.MIXED);
      props.selectIntent(props.intent);
    }
    setChecked(!checked);
  };

  return (
    <OverlayTrigger
      placement="right"
      overlay={
        <Tooltip id={`tooltip-top`}>
          <div style={{ textAlign: 'left' }}>
            <div
              style={{ paddingBottom: '10px' }}
            >{`Description: ${props.intent.description}`}</div>
            <div>{`Example: ${props.intent.trainingData.expressions[0]?.text}`}</div>
          </div>
        </Tooltip>
      }
    >
      <ListGroup.Item>
        <span>{props.intent.name}</span>
        <input
          type="checkbox"
          style={{
            float: 'right',
            marginTop: '.3rem',
            marginRight: '.4rem'
          }}
          checked={checked}
          onChange={handleChange}
        />
      </ListGroup.Item>
    </OverlayTrigger>
  );
};

export default IntentListItem;
