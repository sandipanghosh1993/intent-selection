import React from 'react';
import IntentList from './IntentList';
import InetentDetails from './IntentDetails';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * @function App
 *
 * Root component
 */
const App: React.FC = () => {
  return (
    <Container>
      <h4 style={{ paddingTop: '2rem', paddingBottom: '1.5rem' }}>
        <strong>Message Type (Intent) Configuration</strong>
      </h4>
      <Row>
        <Col style={{ maxWidth: '25rem' }}>
          <IntentList />
        </Col>
        <Col>
          <InetentDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
