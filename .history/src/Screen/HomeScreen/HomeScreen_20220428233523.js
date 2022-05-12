import React, { useEffect } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CategorieBar from '../../components/CategoryBar/CategorieBar'
import Video from '../../components/Video/Video'

const HomeScreen = () => {
    const {accessToken,loading}=useSelector(state=>state.auth)
    const history=useHistory()
    useEffect(()=>{
        if(accessToken==null && loading==false)
        {
            history.push('/auth')
        }
    },[accessToken,history,loading])
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