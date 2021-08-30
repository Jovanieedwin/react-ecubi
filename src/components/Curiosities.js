
import React from 'react';
import { Link } from 'react-router-dom';
const Curiosities = () => {

    return (
        <div className="container mt-4">
            <div class="card">
                <div class="card-header">
                Curiosities Rick and Morty
                </div>
                <div class="card-body">
                    <p class="card-text">Si te gusta la serie de dibujos animados para adultos de Rick y Morty de los creadores Justin Roiland y Dan Harmon, te gustará conocer las siguientes curiosidades más locas sobre esta serie: </p>
                    <p class="card-text"> 1.-Rick y Morty surgió de una parodia de Regreso al futuro: Rick y Morty deriva de una creación del mismo Justin Roiland, una serie web llamada The Real Animated Adventures of Doc and Mharti. Recordamos que los personajes de Regreso al futuro se llamaban Doc y Marty.  </p>
                    <p class="card-text"> 2.-Dos personajes, una sola voz: las voces tanto de Rick como de Morty son realizadas por la misma persona: Justin Roiland, su creador.  </p>
                    <p class="card-text"> 3.-El tiempo exacto que necesitaron Dan Harmon y Justin Roiland para escribir y dar forma al episodio piloto de ‘Rick y Morty’ fueron seis horas. Ni una más, ni una menos. De hecho, la elaboración de este capítulo se llevó a cabo el mismo día en el que consiguieron vender el proyecto al estudio, lo cual sumaba todavía más presión.  </p>
                    <p class="card-text"> 4.-El eructo constante de Rick nació después de que Justin Roiland eructara por accidente durante la grabación de las voces del proyecto The Real Animated Adventures of Doc and Mharti. Estaba imitando las frases del Doctor Brown y de Marty McFly y durante una línea soltó el eructo. Lo volvió a hacer por diversión y cuando llegó el momento de crear Rick y Morty se decidió a usar ese estilo.  </p>
                    <p class="card-text"> 5.-Para dar un mayor realismo a los eructos de Rick, los responsables de la serie se encargan de grabarlos de la manera más natural posible frente al micrófono: beben litros de agua mineral, cerveza baja en calorías y bebidas con gas antes de entrar al estudio.  </p>
                    <p class="card-text"> 6.-McDonald’s «resucitó» la salsa Szechuan (creada originalmente para el lanzamiento de Mulan de Disney en 1998), después de que Rick la mencionara en el primer episodio de la temporada 3. Pero la demanda superó con creces la oferta y muchos aficionados se quedaron con las manos vacías, después de que la cadena de fast food se viese desbordada con el inesperado fervor de los aficionados a la serie.  </p>
                    <p class="card-text"> 7.-Inspiraciones en otras series: los creadores de Rick y Morty son admiradores de otras series como Ren y Stimpy, South Park y Beavis and Butthead, entre otras. Esto se puede notar, además por el tipo de humor, en el estilo de colores.  </p>
                    <p class="card-text"> 8.-Los creadores de la serie quisieron rendir un pequeño homenaje a la exitosa Breaking Bad. Y lo hicieron durante el capítulo en que Rick recuerda la supuesta muerte de su esposa. Si te fijas bien, notarás que la vivienda es prácticamente igual a la de Walter White.  </p>
                    <p class="card-text"> 9.-En el episodio 6 de la primera temporada, Morty se baja la cremallera pantalón ante el pedido de Rick por obtener una muestra de ADN. Tras esto, su abuelo lo detiene, indicándole que sólo le basta con un poco de cabello, con la frase: “Esto no es Juego de Tronos”. Esta frase está basada en las críticas que ha recibido la serie de HBO por los “innecesarios desnudos”.  </p>
                    <p class="card-text"> 10.-La canción de la intro está inspirada en los temas de Doctor Who y de Farscape; ambas series también influyen mucho en las historias y los personajes. De hecho, en el episodio «Raiing Gazorpazorp», las líderes de las mujeres garzopianas tienen las voces de las protagonistas de Farscape.  </p>
                    <p class="card-text"> 11.-Tanto Dan Harmon como Justin Roiland han confesado en alguna ocasión que el personaje de Rick guarda un secreto tan oscuro como impactante. Una revelación que, de momento, prefieren mantener oculta…  </p>
                    <p class="card-text"> 12.-Rick y Morty es la única serie de animación que cuenta con más de un 9 sobre 10 en IMDb. Un logro que, al menos en estos términos, la sitúa por encima de otras propuestas como Hora de aventuras, Padre de familia, South Park o la mismísima Los Simpson. Palabras mayores.   </p>
                    <p class="card-text"> 13.-Todos y cada uno de los extraterrestres que aparecen en ‘Rick y Morty’ están creados en base a elementos escatológicos como genitales o heces, hecho que ha sido confesado por los mismísimos creadores.  </p>
                    <p class="card-text"> 14.-El episodio 3×03 de Rick y Morty nos muestra cómo Rick, a causa de uno de sus locos experimentos, se convierte accidentalmente en un pepinillo, teniendo que sortear un montón de adversidades para sobrevivir.  </p>
                    <Link to='/'><button className="btn btn-primary mt-3">Home</button></Link>
                </div>
            </div>
        </div>
    );
};
export default Curiosities;