import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CategorieBar from '../../components/CategoryBar/CategorieBar'
import Video from '../../components/Video/Video'

const HomeScreen = () => {
const {accessToken,loading}=useSelector(state=>state.auth)
  return (
    <Container>
        <CategorieBar/>
        <Row>
            {
                [...new Array(20)].map(()=>(
                    <Col lg={3} md={4}>
                        <Video/>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default HomeScreen