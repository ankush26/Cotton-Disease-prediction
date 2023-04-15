import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import WorkItem from './work-item';

Work.propTypes = {
    data: PropTypes.array,
};

function Work(props) {

    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'How we work',
        title: 'Necessary Measures',
        desc: 'Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis.'
    })


    const [measures] = useState(
        [
            [
                {
                    id:1,
                    title:"Insecticidal soap",
                    des:"Spray a solution of insecticidal soap on the plants. The soap will suffocate the aphids, and it's safe for the environment and beneficial insects."
                },
                {
                    id:2,
                    title:"Neem oil",
                    des:"Neem oil is a natural insecticide that can be sprayed on plants to control aphids. It works by disrupting the aphids' life cycle, inhibiting their ability to feed and reproduce."
                },
                {
                    id:3,
                    title:"Horticultural oil",
                    des:"Horticultural oil can also be effective against aphids. It works by smothering the insects and their eggs."
                },
                {
                    id:4,
                    title:"Companion planting",
                    des:"Plant companion plants like marigolds, nasturtiums, and garlic around cotton plants. These plants can repel aphids and attract beneficial insects."
                }
            ],
            [
                {
                    id:1,
                    title:"Bt insecticides",
                    des:"Bt insecticides are a safe and effective option for controlling armyworms. They work by targeting the digestive system of the insect and are safe for beneficial insects."
                },
                {
                    id:2,
                    title:"Insecticidal soaps",
                    des:"Insecticidal soaps can also be effective against armyworms. They work by breaking down the protective coating of the insect, causing it to dehydrate and die."
                },
                {
                    id:3,
                    title:"Pyrethroid insecticides",
                    des:"Pyrethroid insecticides are a synthetic option for controlling armyworms. They work by attacking the insect's nervous system, causing paralysis and death."
                },
                {
                    id:4,
                    title:"Early detection",
                    des:"Monitor your cotton plants regularly for signs of armyworms. Look for caterpillars and frass (insect excrement) on the leaves, as well as holes in the leaves."
                }
            ],
            [
                {
                    id:1,
                    title:"Plant nutrition",
                    des:"Proper fertilization and irrigation can help maintain healthy plants that are better able to resist bacterial blight."
                },
                {
                    id:2,
                    title:"Copper-based fungicides",
                    des:"Copper-based fungicides can be used to control bacterial blight. They work by disrupting the bacterial cell walls, causing them to rupture and die."
                },
                {
                    id:3,
                    title:"Sanitation",
                    des:"Remove and destroy infected plant debris, including cotton stalks, leaves, and other plant parts. This will help reduce the bacterial population in the field."
                },
                {
                    id:4,
                    title:"Crop rotation",
                    des:"Avoid planting cotton in the same location year after year. Rotate with other crops to reduce the build-up of the bacterial population in the soil."
                }
            ],
            [
                {
                    id:1,
                    title:"",
                    des:""
                },
                {
                    id:2,
                    title:"",
                    des:""
                },
                {
                    id:3,
                    title:"",
                    des:""
                },
                {
                    id:4,
                    title:"",
                    des:""
                }
            ],
            [
                {
                    id:1,
                    title:"Water management",
                    des:"Proper irrigation practices can help prevent powdery mildew. Avoid overhead watering and water at the base of the plant to keep the leaves dry."
                },
                {
                    id:2,
                    title:"Resistant varieties",
                    des:"Plant resistant varieties of cotton that are less susceptible to powdery mildew."
                },
                {
                    id:3,
                    title:"Beneficial insects",
                    des:"Encourage beneficial insects like ladybugs and lacewings, which can help control powdery mildew."
                },
                {
                    id:4,
                    title:"Organic treatments",
                    des:"Some organic treatments that can help control powdery mildew include baking soda, milk, and compost tea. Be sure to follow the instructions carefully and apply at the first sign of infection."
                }
            ],
            
            [
                {
                    id:1,
                    title:"Water management",
                    des:"Proper irrigation practices can help prevent target spot. Avoid overhead watering and water at the base of the plant to keep the leaves dry."
                },
                {
                    id:2,
                    title:"Resistant varieties",
                    des:"Plant resistant varieties of cotton that are less susceptible to target spot."
                },
                {
                    id:3,
                    title:"Nutrient management",
                    des:"Proper fertilization can help maintain healthy plants that are better able to resist target spot."
                },
                {
                    id:4,
                    title:"Crop rotation",
                    des:"Avoid planting cotton in the same location year after year. Rotate with other crops to reduce the build-up of the fungal population in the soil."
                }
            ],
    ]
        
    )

    return (
        <section className="tf-section how-we-work">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title st2 mb-60" data-aos="fade-up" data-aos-duration="800">
                            {/* <p className="h8 sub-title">{dataBlock.subtitle}</p> */}
                            <h4 className="title m-b17">{dataBlock.title}</h4>
                            {/* <p className="p-r60">{dataBlock.desc} </p> */}
                        </div>
                    
                    </div>

                    {
                        measures[data.index].map(item => (
                            <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                                <WorkItem item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Work;