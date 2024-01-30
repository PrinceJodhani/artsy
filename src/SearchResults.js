import { Row, Col, Card } from "react-bootstrap";

export default function SearchResults({ results }) {
  if (!results) {
    return null;
  }

  if (results.length === 0) {
    return <p>No results</p>;
  }

  return (
    <Row>
      {results.map((result) => (
        <Col xs={12} md={4} lg={3} key={result.id}>
          <Card>
            <Card.Img variant="top" src={`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`} alt={result.thumbnail?.alt_text} />
            <Card.Body>
              <Card.Title>{result.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
