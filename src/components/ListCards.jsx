import React from 'react';
import Card from './Card';
import styles from "./ListCards.module.css";

const ListCards = () => {
    return (
        
        <div className={styles.ListCards}>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp: </h1>
            <Card img={'/src/assets/testimonio-shawn.png'} 
            title={'Shawn wang en singapur'} 
            subtitle={'Ingeniero de Software en Amazon'}
            desc={`"Da miedo cambiar de carrera. 
            Solo gané la confianza de que podía programar trabajando a través 
            de los cientos de horas de lecciones gratuitas en freeCodeCamp. 
            Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida".`}>
            </Card>

            <Card img={'/src/assets/testimonio-sarah.png'} 
            title={'Sarah Chima en Nigeria'} 
            subtitle={'Ingeniera de Software en ChatDesk'}
            desc={`"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software.
             El plan de estudios bien estructurado llevó mis
              conocimientos de programación de un nivel de principiante total a un nivel muy seguro.
             Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."`}>
            </Card>

            <Card img={'/src/assets/testimonio-emma.png'} 
            title={'Emma Bostian en Suecia'} 
            subtitle={'Ingeniera de Software en Spotify'}
            desc={`"Siempre he tenido problemas para aprender JavaScript. 
            He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. 
            Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp
             me dio las habilidades y la confianza que necesitaba para conseguir el trabajo 
             de mis sueños como ingeniero de software en Spotify."`}>
            </Card>
        </div>
    );
}

export default ListCards;
