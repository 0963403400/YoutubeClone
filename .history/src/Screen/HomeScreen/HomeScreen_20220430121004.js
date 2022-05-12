import React, { useEffect } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CategorieBar from '../../components/CategoryBar/CategorieBar'
import Video from '../../components/Video/Video'
import { getPopularVideos } from '../../redux/actions/videos.action'


const HomeScreen = () => {
const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPopularVideos())
   }, [dispatch])
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