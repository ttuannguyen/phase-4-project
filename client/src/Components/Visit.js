import React from 'react'
import { Link } from 'react-router-dom'
import VisitDeleteButton from './VisitDeleteButton'
import { Button, Col, ListGroup, Row } from 'react-bootstrap'

const Visit = ({visit}) => {
        
    return (
        <div className='visit-div'>
            <Row>
                <Col>
                    Visit: {visit.date}
                </Col>

                <Col>
                    Note: {visit.note}
                </Col>

                <Col>
                    <Link to={`/visits/${visit.id}/edit`}>
                        <Button variant="light" size="sm">Edit</Button>
                    </Link>
                    <VisitDeleteButton visit={visit}/>
                </Col>
            </Row>
        </div>
    )
}

export default Visit