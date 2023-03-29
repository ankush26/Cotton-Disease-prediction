import React , {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Button from '../../components/button';
import AboutItem from './about-item';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataBlock] = useState(
        [
            {
                subtitle : 'About Disease',
                title: 'What is Aphids?',
                desc : 'Aphids are small, soft-bodied insects that are usually green or brown in color. Aphids themselves do not cause cotton diseases, but they can transmit plant viruses that can infect cotton plants and cause disease. When aphids feed on a diseased plant, they can pick up the virus and then transmit it to other healthy plants they feed on.'
            },
            {
                subtitle : 'About Disease',
                title: 'What is Army worm?',
                desc : 'Armyworms are a pest that can damage cotton crops. Armyworms are the larvae of several species of moth, including the fall armyworm and the beet armyworm. These insects can feed on cotton leaves, causing damage to the plant and reducing yield. Armyworm infestations can be particularly problematic in cotton fields, as they can quickly spread and cause significant damage if left unchecked. '
            },
            {
                subtitle : 'About Disease',
                title: 'What is Bacterial blight?',
                desc : 'Bacterial blight is a serious disease that can affect cotton plants. It is caused by the bacterium Xanthomonas citri subsp. malvacearum and can lead to significant yield losses if left untreated. Symptoms of bacterial blight in cotton plants can include water-soaked lesions on leaves, stems, and bolls, as well as blackening of affected areas.'
            },
            {
                subtitle : 'About Leaf',
                title: 'Healthy Leaf',
                desc : 'A healthy cotton leaf is a leaf on a cotton plant that is free from disease, pests, and physical damage, and is able to perform its physiological functions properly. Maintaining healthy cotton leaves is important for ensuring the quality and quantity of cotton production.'
            },
            {
                subtitle : 'About Disease',
                title: 'What is Powdery mildew?',
                desc : 'Powdery mildew is a fungal disease that can affect cotton plants. The fungus responsible for this disease is called Erysiphe cichoracearum, and it thrives in warm and humid conditions. Symptoms of powdery mildew in cotton plants can include a white or grayish powder-like substance on the leaves, stems, and bolls of the plant. '
            },
            {
                subtitle : 'About Disease',
                title: 'What is Target spot?',
                desc : 'Target spot is a fungal disease that can affect cotton plants. The fungus responsible for this disease is called Corynespora cassiicola, and it thrives in warm and humid conditions. Symptoms of target spot in cotton plants can include small, circular spots with a target-like appearance on the leaves. The spots can be dark brown or black in the center, surrounded by a yellow halo and a reddish-brown outer ring. '
            }
    ]
        
    )

    const [symptoms] = useState(
        [
            [
                {
                    id:1,
                    title:"Leaf curling",
                    des:"One of the most common symptoms of diseases transmitted by aphids in cotton plants is leaf curling. Infected leaves may curl downward, upward or become twisted, which may result in stunted plant growth and yield loss."
                },
                {
                    id:2,
                    title:"Yellowing",
                    des:"Another symptom of disease caused by aphids is yellowing of the leaves, especially on the lower parts of the plant. The leaves may become yellowish-green, yellow, or even red, which can be accompanied by stunted growth and reduced yield."
                },
                {
                    id:3,
                    title:"Mottling",
                    des:"Infected leaves may also show mottling or chlorosis, which is the appearance of light and dark green patches on the surface of the leaves. The mottling may be accompanied by small raised bumps or necrotic lesions, which can lead to further damage of the plant."
                }
            ],
            [
                {
                    id:1,
                    title:"Defoliation",
                    des:"One of the most common symptoms of armyworm damage in cotton plants is defoliation. Armyworms are voracious feeders that can quickly strip a plant of its leaves, leaving it vulnerable to further damage and stress."
                },
                {
                    id:2,
                    title:"Ragged leaves",
                    des:"Infested cotton leaves may also appear ragged or tattered due to the feeding activity of armyworms. These pests chew irregular holes in the leaves, leaving a jagged or uneven edge."
                },
                {
                    id:3,
                    title:"Frass",
                    des:"Armyworms also leave behind a trail of frass or insect excrement, which can accumulate on the leaves and other parts of the plant. The presence of frass can be an indication of an armyworm infestation, especially if it is accompanied by other symptoms such as leaf damage and defoliation."
                }
            ],
            [
                {
                    id:1,
                    title:"Water-soaked lesions",
                    des:"One of the most common symptoms of bacterial blight in cotton leaves is the appearance of water-soaked lesions on the leaves. These lesions are initially small and circular, but can quickly enlarge and become irregularly shaped."
                },
                {
                    id:2,
                    title:"Yellowing",
                    des:"Infected leaves may also show yellowing or chlorosis around the edges or in between the veins, which can lead to premature defoliation and reduced yield."
                },
                {
                    id:3,
                    title:"Necrosis",
                    des:"As the disease progresses, the lesions may turn brown or black, indicating necrosis or tissue death. The necrotic areas may also be accompanied by a yellow halo, which is a characteristic symptom of bacterial blight in cotton plants."
                }
            ],
            [
                {
                    id:1,
                    title:"Vibrant color",
                    des:"A healthy cotton leaf will typically have a vibrant green color, indicating that it is producing chlorophyll through photosynthesis."
                },
                {
                    id:2,
                    title:"Firm texture",
                    des:"A healthy cotton leaf should be firm to the touch and not wilted or drooping. This indicates that it is retaining moisture and nutrients properly."
                },
                {
                    id:3,
                    title:"Smooth surface",
                    des:"A healthy cotton leaf should have a smooth surface, without any signs of discoloration, spots, or blemishes. This indicates that the leaf is free from damage and disease."
                }
            ],
            [
                {
                    id:1,
                    title:"White powdery patches",
                    des:"One of the most common symptoms of powdery mildew in cotton leaves is the appearance of white powdery patches on the surface of the leaves. These patches are usually circular or irregularly shaped and can cover a large area of the leaf."
                },
                {
                    id:2,
                    title:"Stunted growth",
                    des:" Infected plants may also show stunted growth and reduced vigor, which can lead to a decrease in yield. The leaves may become distorted or wrinkled, and the plant may appear less healthy overall."
                },
                {
                    id:3,
                    title:"Premature leaf drop",
                    des:"As the disease progresses, infected leaves may begin to drop prematurely, further reducing the plant's ability to photosynthesize and produce yield."
                }
            ],
            
            [
                {
                    id:1,
                    title:"Circular spots",
                    des:"The most common symptom of target spot in cotton leaves is the presence of small, circular spots on the leaves. These spots can range in size from a few millimeters to several centimeters in diameter and have a distinct target-like appearance, with concentric rings of different colors."
                },
                {
                    id:2,
                    title:"Brown lesions",
                    des:"As the disease progresses, the spots may become brown or black, indicating tissue damage and necrosis. The lesions may coalesce and form larger areas of dead tissue on the leaf."
                },
                {
                    id:3,
                    title:"Premature defoliation",
                    des:"Severe cases of target spot can cause premature defoliation, leading to reduced photosynthesis and yield loss. Infected leaves may also curl or become distorted, which can further reduce their ability to function normally."
                }
            ]
    ]
        
    )

    return (
        <section className="tf-section tf-about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="content-about mobie-40" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title st2">
                                <p className="h8 sub-title">{dataBlock[data.index].subtitle}</p>
                                <h4 className="title">{dataBlock[data.index].title}</h4>
                            </div>
                            <p>{dataBlock[data.index].desc}</p>
                                {/* <Button title="Know More" path='/' /> */}
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                            {
                                symptoms[data.index].map(item => (
                                    <AboutItem key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;