import React, { Component } from "react";
import {CustomCard} from "./components/CustomCard/CustomCard";
import LandingPageHeader from "../LandingPage/components/LandingPageHeader/LandingPageHeader";

import './InfoPage.scss'

class InfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;

        this.state = {
            info:[
                {
                    title:'ALOJAMIENTO',
                    url: 'https://www.videoask.it/fkfnh5xb0',
                    text:'Los voluntarios convivirán junto con los coordinadores en una casa del pueblo de Taznaqt, cerca de la ciudad de Errachidia.\n Los voluntarios compartirán habitaciones para dormir. \n En las habitaciones hay colchones y almohadas. Recomendamos que los voluntarios traigan sus sábanas para mayor comodidad (tamaño cama individual), aunque también tenemos sábanas por si alguien necesitara o mantas. \n La casa tiene cocina y dos baños, se tendrán que hacer turnos para ducharse.\n' +
                        'También hay una terraza con una jaimadonde los voluntarios suelen pasar el tiempo para desayunar, comer, preparar o hacer actividades o para organizar reuniones.\n Los voluntarios pueden ir por el centro de la ciudad siempre que quieran durante su tiempo libre, pero tienen que ir siempre acompañados de un coordinador de la asociación por su comodidad y tranquilidad.\n Hay una piscina de agua natural cerca del pueblo donde también pueden ir los voluntarios cuando quieran y donde hay programadas actividades grupales.',
                    image:require('assets/img/home.jpeg')
                },
                {
                    title:'LUGAR',
                    url: 'https://www.videoask.it/f4pffjjtx',
                    text:'Los proyectos de enseñanza de idiomas y actividades lúdicas se realizan en la escuela primaria y las escuelas infantiles de Taznaqt.\n Durante los proyectos de Navidad y Semana Santa no se realiza el proyecto deenseñanza de idiomas porque las vacaciones escolares en Marruecos no coinciden con las vacaciones en España. Por tanto, los niños tendrán que ir a clase cuando los voluntarios estén allí y no tenemos tanta disponibilidad para hacer uso de las escuelas.\n Sin embargo, sí se contempla que los voluntarios acudan a las dos escuelas infantiles por la mañana para realizar actividades con los niños en clase.\n El resto de actividades (por la tarde) se podrán realizar en las escuelas o en las plazas del pueblo.\n' +
                        'Las visitas al hospital se realizan en la ciudad de Errachidia. El hospital tiene un ala de pediatría donde podemos visitar a los niños internados con sus familias, y un edificio anexo que sirve como orfanato. También podremos ir a ver a los niños huérfanos y entregarles regalos. \n El torneo de fútbol se organizará en un espacio libre del pueblo, cerca de la casa de la asociación. Es un espacio libre donde se improvisa un campo de fútbol trazando líneas en la tierra ya que no se dispone de ningún campo de fútbol en el pueblo, pero es una actividad que los niños agradecen ya que les gusta mucho',
                    image:require('assets/img/site.jpg')
                },
                {
                    title:'CLIMA',
                    url: 'https://www.videoask.it/f919f2y5i',
                    text:'La temperatura en Errachidiadurante losmesesdemarzoyabrilesde9º y 22º C. \n Es importantetenerestoencuentaalahorade elegir la ropa. Es recomendable llevar algo de abrigo, sobre todo para la tarde y la noche.\n Porotrolado,eneldesierto el clima varía mucho entre las horas diarias y las nocturnas, por lo que puede experimentarse una bajada de hasta 15 grados por la noche',
                    image:require('assets/img/weather.jpg')
                },
                {
                    title:'DINERO',
                    url: 'https://www.videoask.it/fwb0k66jc',
                    text:'Se recomienda a los voluntarios llevar el dinero que vayan a necesitar en efectivo,  y a  que sacar dinero en los cajeros de Marruecos comporta una comisión de alrededor de 4€ por 10€ extraídos y más en cantidades más altas. Por ello, es preferible que se saque en España todo el dinero necesario y viajar con él a buen recaudo.\n Si alguien tuviera que sacar dinero en Marruecos, se recomienda sacar una cantidad alta (la necesaria calculada) para no tener que repetir la operación. De esta manera la comisión es una y no varias.\n Para cambiar euros en dirhams, se recomienda hacer el cambio en la ciudad porque en el aeropuerto hay que pagar una comisión más alta que en los bancos. Los coordinadores os enseñarán los lugares de la ciudad donde podéis cambiar el dinero por vosotros mismos y os acompañarán siempre que lo necesitéis. De esta manera la comisión es menor y el voluntario puede contar con más dinero. Si queréis cambiar dinero por vuestra cuenta solo tenéis que ir a un banco de la ciudad para hacerlo, pero recordad llevar vuestro pasaporte porque os lo pedirán.',
                    image:require('assets/img/dirhams.jpg')
                },
                {
                    title:'EQUIPAJE',
                    url: 'https://www.videoask.it/fppqvqv4i',
                    text:'Se aconseja llevar una mochila en lugar de maleta, ya que el trayecto es largo y muchas de las calles no están asfaltadas. Estos son los objetos que recomendamos llevar a los voluntarios: \n Ropa cómoda. Es importante ser respetuoso con la cultura y las tradicionesdel país. Evitar pantalones cortos, ropa muy ajustada, escotes... \n Se puede llevar una chaqueta para la noche(baja la temperatura)\n Crema con protección solar. \n Gorra para protegerse del calor. \n Protector labial (por el clima seco).\n Traje de baño.\n Zapatos cómodos para caminar (deportivas).\n Sandalias. \n Toalla. \n Sábanas de cama individual (90cm). \n Repelente de mosquitos y pomada para picaduras. \n Gafas de sol para protegerse del sol y la arena del desierto.\n Y si es posible y quieren traer material didáctico, escolar o juguetes sería un favor para el pueblo y la asociación.',
                    image:require('assets/img/the-suitcase.jpg')
                },
                {
                    title:'DOCUMENTOS',
                    url: 'https://www.videoask.it/f2lq6x6a2',
                    text:'Los voluntarios que hayan nacido en España no necesitan visado para viajar a Marruecos. \n Los voluntarios que estén residiendo en España pero sean de un país externo a la Unión Europea, deben pedir un visado de turista. \n Los voluntarios necesitan contar con el pasaporte en vigor (hasta después de la fecha de vuelta). Es muy importante tener siempre controlado el pasaporte. \n A la llegada a la asociación os pediremos vuestros pasaportes para hacer una fotocopia que es entregada a la policía. Se trata de un control que hace la policía a los turistas que están como voluntarios en el país y viven en la casa de la asociación. También lo hacen los hoteles con los turistas que acogen. Es una manera de ofrecer seguridad a los visitantes del país, teniendo todos sus datos por si pasara cualquier problema. Nosotros entonces también tenemos que dar parte a la policía de todos los voluntarios que se alojan en la casa por seguridad',
                    image:require('assets/img/passeport.jpg')
                },

            ]
        }

    }



    render() {
        return (
            <div className={'info-page'}>
              <LandingPageHeader/>
              <div className={'info-page-card-container'}>
                  <div className={'info-page-card-wrapper'}>
                      <CustomCard attr={{props: this.props ,title: this.state.info[0].title, url: this.state.info[0].url, text: this.state.info[0].text, image: this.state.info[0].image}}/>
                      <CustomCard attr={{props: this.props ,title: this.state.info[1].title, url: this.state.info[1].url, text: this.state.info[1].text, image: this.state.info[1].image}}/>
                  </div>
                  <div className={'info-page-card-wrapper'}>
                      <CustomCard attr={{props: this.props ,title: this.state.info[2].title, url: this.state.info[2].url, text: this.state.info[2].text, image: this.state.info[2].image}}/>
                      <CustomCard attr={{props: this.props ,title: this.state.info[3].title, url: this.state.info[3].url, text: this.state.info[3].text, image: this.state.info[3].image}}/>
                  </div>
                  <div className={'info-page-card-wrapper'}>
                      <CustomCard attr={{props: this.props ,title: this.state.info[4].title, url: this.state.info[4].url, text: this.state.info[4].text, image: this.state.info[4].image}}/>
                      <CustomCard attr={{props: this.props ,title: this.state.info[5].title, url: this.state.info[5].url, text: this.state.info[5].text, image: this.state.info[5].image}}/>
                  </div>
              </div>

            </div>
        )
    }



};

export { InfoPage }