import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { IntentProps, IntentDetailsProps } from '../interfaces/types';

const IntentDetails: React.FC<IntentDetailsProps> = (
  props: IntentDetailsProps
) => {
  return (
    <div
      style={{
        height: '83vh',
        overflowY: 'scroll',
        backgroundColor: '#F2F2F2'
      }}
    >
      {Object.values(props.selectedIntents).length ? (
        Object.values(props.selectedIntents).map((intent: IntentProps) => (
          <Container
            style={{
              marginBottom: '2rem'
            }}
            key={intent.id}
          >
            <strong style={{ color: '#515A5A', fontSize: 'larger' }}>
              {intent.name}
            </strong>
            <div>
              <strong>Description: </strong>
              {intent.description}
            </div>
            <div>
              <strong>Received Messages: </strong>
              {intent.trainingData.expressions.map(
                (expression: { id: string; text: string }, index: number) => {
                  return index === intent.trainingData.expressions.length - 1
                    ? expression.text
                    : `${expression.text}, `;
                }
              )}
            </div>
            <div>
              <strong>Bot's Reply: </strong>
              {intent.reply.text}
            </div>
          </Container>
        ))
      ) : (
        <h4 style={{ textAlign: 'center', padding: '4rem' }}>
          No Selected Message Types
        </h4>
      )}
    </div>
  );
};

const mapStateToProps = (state: {
  selectedIntents: { [key: string]: IntentProps };
}) => {
  return { selectedIntents: state.selectedIntents };
};

export default connect(mapStateToProps)(IntentDetails);
