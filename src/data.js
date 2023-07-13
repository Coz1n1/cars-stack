import car1 from './assets/cars/bmw.png'
import car2 from './assets/cars/audi.png'
import car3 from './assets/cars/mercedes.png'
import car4 from './assets/cars/skoda.png'

export const faqs = [
    {
        question: 'Is it possible to extend the loan during its duration?',
        answer: 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        question: 'How can I find the best offers with the lowest prices?',
        answer: 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        question: 'Are there any additional promotions or offers?',
        answer: 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    }
]

export const CARS = [
    {
        id: 1,
        name: 'BMW M3',
        price: 50,
        image:  car1,
        description: 'Enjoy a comfortable ride in a BMW M3 car.',
        specification: [{
            header: 'drive',
            value: 'rear-wheel',
        },
        {
            header: 'gearbox',
            value: 'automatic',
        },
        {
            header: 'horsepower',
            value: '450',
        },
        ],
    },
    {
        id: 2,
        name: 'Audi S7',
        price: 63,
        image:  car2,
        description: 'Enjoy a comfortable ride in a Audi S7 car.',
        specification: [{
            header: 'drive',
            value: '4x4',
        },
        {
            header: 'gearbox',
            value: 'automatic',
        },
        {
            header: 'horsepower',
            value: '344',
        },
        ],
    },
    {
        id: 3,
        name: 'Mercedes',
        price: 55,
        image:  car3,
        description: 'Enjoy a comfortable ride in a Mercedes car.',
        specification: [{
            header: 'drive',
            value: 'rear-wheel',
            },
            {
            header: 'gearbox',
            value: 'automatic',
            },
            {
            header: 'horsepower',
            value: '265',
        },
        ],
    },
    {
        id: 4,
        name: 'Skoda Octavia',
        price: 37,
        image:  car4,
        description: 'Enjoy a comfortable and economic ride in a Skoda Octavia car.',
        specification: [{
            header: 'drive',
            value: 'front-wheel',
        },
        {
            header: 'gearbox',
            value: 'manual',
        },
        {
            header: 'fuel consumption',
            value: '4l/100km',
        },
        {
            header: 'horsepower',
            value: '115',
        },
        ],
    },
]