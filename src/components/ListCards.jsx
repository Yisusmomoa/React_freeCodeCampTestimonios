import React from 'react';
import Card from './Card';

const ListCards = () => {
    return (
        <div>
            <Card img={'/src/assets/testimonio-shawn.png'} 
            title={'Shawn wang en singapur'} 
            subtitle={'Ingeniero de Software en Amazon'}
            desc={`Da miedo cambiar de carrera. 
            Solo gané la confianza de que podía programar trabajando a través 
            de los cientos de horas de lecciones gratuitas en freeCodeCamp. 
            Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.`}>
            </Card>
        </div>
    );
}

export default ListCards;
