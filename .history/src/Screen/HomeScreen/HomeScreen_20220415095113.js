import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import CategorieBar from '../../components/CategoryBar/CategorieBar'
import Video from '../../components/Video/Video'

const HomeScreen = () => {
  return (
    <Container>
        <CategorieBar/>
        <Row>
            {
                [...new Array(20)].map(()=>(
                    <Col lg={4} md={4}>
                        <Video/>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default HomeScreen