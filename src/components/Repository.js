import React, { Component } from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Card, Container, Row, Col, Image, Badge } from 'react-bootstrap';



dayjs.extend(relativeTime);


export default class Repository extends Component {

    formatDate = date => dayjs(date).fromNow();

    render() {
        const {
        name,
        owner: { avatar_url, login },
        description,
        stargazers_count,
        open_issues,
        created_at,
        error
        } = this.props;

        const open = false;

        return (

        
        <Card className="mb-4 pb-2 pt-2 ">
            {error && <p>We have encountered an error</p>}
            
            <Container>
                <Row>
                    <Col>
                    <Image src={avatar_url} width="100%" roundedCircle />
                    </Col>

                    <Col xs={10}>
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Card.Title>
                                        {name}
                                    </Card.Title>

                                    <Card.Subtitle className="text-muted mb-2">
                                        <p className="text-muted font-weight-light"> {description} </p>
                                        {new Date(created_at).toLocaleDateString()}
                                    </Card.Subtitle>

                                    <Badge variant="secondary" className="mr-2 p-2">Stars: {stargazers_count}</Badge>
                                    <Badge variant="secondary" className="mr-2 p-2">Issues: {open_issues}</Badge>
                                    <Badge  variant="primary" className=" p-2" > Submitted {this.formatDate(created_at)} days ago by {login}</Badge>
                                    
                                </div>
                            </div>
                        </Card.Body>
                        </Col>
                    </Row>
            </Container>
        </Card>
        )
    }
}
