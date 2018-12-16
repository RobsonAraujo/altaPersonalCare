import React, { Component } from 'react'
import { MDBInput, MDBBtn } from "mdbreact";
import '../css/scheduling.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Home extends Component {


    constructor(props) {
        super(props)

        this.state = {
            price: ''
        }
    }

    checkPrice = () => {
        this.setState({price : " R$ 170,00" })
    }

    notify = () => {
        toast.success("Sua jornada esta preparada!", {
            position: toast.POSITION.BOTTOM_CENTER
          });
    }

    render() {

        return (
            <div className="main">
                <h2>Agendar Serviço</h2>
                <div className="date">
                    <MDBInput label="Data do exame" />
                </div>
                <div className="time">
                    <MDBInput label="Hora do Exame" />
                </div>
                <div className="place">
                    <MDBInput label="Unidade" />
                </div>
                <div>
                    <MDBBtn rounded outline color="secondary" onClick={this.checkPrice}>Ver Preço</MDBBtn>
                </div>
                <div className="price">
                   {this.state.price}
                </div>
                <div>
                    <MDBBtn className={`${this.state.price ? "" : "disabled" }`}
                     rounded color="secondary"
                     onClick={this.notify}
                     >Adquirir minha jornada</MDBBtn>
                     <ToastContainer />
                </div>
            </div>
        )
    }

}

export default Home