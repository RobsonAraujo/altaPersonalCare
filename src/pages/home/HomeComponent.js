import React, { Component } from 'react'
import Header from '../../components/header'
import { MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom'
import "./css/home.scss"


const imageHeader = require('../../images/home.jpeg')

class Home extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <div className="header">
                    <img src={imageHeader} alt="image header" />
                </div>
                <div className="body">
                    <section className="text-center my-12">
                        <MDBRow>
                            <MDBCol md="4" xs="4">
                                <MDBIcon icon="area-chart" size="3x" className="red-text" />
                                <p className=" my-4">Comodidade</p>
                            </MDBCol>
                            <MDBCol md="4" xs="4">
                                <MDBIcon icon="calendar" size="3x" className="cyan-text" />
                                <p className=" my-4">Agendamento Online</p>
                            </MDBCol>
                            <MDBCol md="4" xs="4">
                                <MDBIcon icon="comments-o" size="3x" className="orange-text" />
                                <p className="my-4">Atendimento Personalizado</p>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </div>
                <Link to="/agendamento">
                    <MDBBtn className="buttonNext" outline color="secondary">Agendar serviço</MDBBtn>
                </Link>
            </div>
        )
    }
}

export default Home