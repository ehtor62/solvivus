export interface NeuralNetwork {
    [key: string]: {
        [key: string]: {
            [key: string]: {
                [key: string]: string[];
            };
        };
    };
}

const questionWords: NeuralNetwork = {
    'What': {
        'are the most': {
            'unusual': {
                'landmarks': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'traditions': ['at my current location', 'in: '],
                'foods': ['at my current location', 'in: '],
                'architectural designs': ['at my current location', 'in: '],
                'historical facts': ['at my current location', 'in: '],
                'events': ['at my current location', 'in: '],
                'facts': ['at my current location', 'in: '],
            },
            'unknown': {
                'landmarks': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'traditions': ['at my current location', 'in: '],
                'cultural practices': ['at my current location', 'in: '],
                'historical facts': ['at my current location', 'in: '],
                'events': ['at my current location', 'in: '],
                'facts': ['at my current location', 'in: '],
                'local etiquettes': ['at my current location', 'in: '],
            },
            'famous': {
                'landmarks': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'traditions': ['at my current location', 'in: '],
                'museums': ['at my current location', 'in: '],
                'foods': ['at my current location', 'in: '],
                'architectural designs': ['at my current location', 'in: '],
                'historical facts': ['at my current location', 'in: '],
                'events': ['at my current location', 'in: '],
                'facts': ['at my current location', 'in: '],
            },
            'unexpected': {
                'landmarks': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'traditions': ['at my current location', 'in: '],
                'foods': ['at my current location', 'in: '],
                'architectural designs': ['at my current location', 'in: '],
                'historical facts': ['at my current location', 'in: '],
                'events': ['at my current location', 'in: '],
                'facts': ['at my current location', 'in: '],
                'local etiquettes': ['at my current location', 'in: '],
            },
            'breathtaking': {
                'landmarks': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'natural wonders': ['at my current location', 'in: '],
                'viewpoints': ['at my current location', 'in: '],
                'adventures to embark on': ['at my current location', 'in: '],
                'hidden gems': ['at my current location', 'in: '],
                'facts': ['at my current location', 'in: '],
            },
            'intriguing': {
                'landmarks': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'traditions': ['at my current location', 'in: '],
                'museums': ['at my current location', 'in: '],
                'local dishes': ['at my current location', 'in: '],
                'architectural designs': ['at my current location', 'in: '],
                'local markets': ['at my current location', 'in: '],
                'events': ['at my current location', 'in: '],
                'facts': ['at my current location', 'in: '],
                'local etiquettes': ['at my current location', 'in: '],
            },
            'expensive': {
                'modes of transportation': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'cultural activities': ['at my current location', 'in: '],
                'outdoor adventures': ['at my current location', 'in: '],
                'dining options': ['at my current location', 'in: '],
                'ways to enjoy nature': ['at my current location', 'in: '],
            },
            'family-friendly': {
                'modes of transportation': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'cultural activities': ['at my current location', 'in: '],
                'events': ['at my current location', 'in: '],
                'outdoor adventures': ['at my current location', 'in: '],
                'dining options': ['at my current location', 'in: '],
                'ways to enjoy nature': ['at my current location', 'in: '],
            },
        },
        'are the least': {
            'known': {
                'landmarks': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'traditions': ['at my current location', 'in: '],
                'museums': ['at my current location', 'in: '],
                'local dishes': ['at my current location', 'in: '],
                'hidden gems': ['at my current location', 'in: '],
                'hiking trails': ['at my current location', 'in: '],
                'historical events': ['at my current location', 'in: '],
                'facts': ['at my current location', 'in: '],
                'local etiquettes': ['at my current location', 'in: '],
            },
            'visited': {
                'landmarks': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'natural wonders': ['at my current location', 'in: '],
                'museums': ['at my current location', 'in: '],
                'parks and gardens': ['at my current location', 'in: '],
                'hidden gems': ['at my current location', 'in: '],
                'places to unwind': ['at my current location', 'in: '],
                'historical sites': ['at my current location', 'in: '],
            },
            'explored': {
                'landmarks': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'natural wonders': ['at my current location', 'in: '],
                'local markets': ['at my current location', 'in: '],
                'hidden gems': ['at my current location', 'in: '],
                'hiking trails': ['at my current location', 'in: '],
                'historical sites': ['at my current location', 'in: '],
            },
            'expensive': {
                'modes of transportation': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'cultural activities': ['at my current location', 'in: '],
                'outdoor adventures': ['at my current location', 'in: '],
                'dining options': ['at my current location', 'in: '],
                'ways to enjoy nature': ['at my current location', 'in: '],
            },
        },
        'are some': {
            'recommended': {
                'landmarks': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'experiences': ['at my current location', 'in: '],
                'local dishes': ['at my current location', 'in: '],
                'museums': ['at my current location', 'in: '],
                'hidden gems': ['at my current location', 'in: '],
                'hiking trails': ['at my current location', 'in: '],
                'historical sites': ['at my current location', 'in: '],
                'local etiquettes': ['at my current location', 'in: '],
            },
            'popular': {
                'landmarks': ['at my current location', 'in: '],
                'attractions': ['at my current location', 'in: '],
                'natural wonders': ['at my current location', 'in: '],
                'parks and gardens': ['at my current location', 'in: '],
                'museums': ['at my current location', 'in: '],
                'modes of transportation': ['at my current location', 'in: '],
                'cultural festivals': ['at my current location', 'in: '],
                'historical sites': ['at my current location', 'in: '],
                'local etiquettes': ['at my current location', 'in: '],
            },
            'avoidable': {
                'tourist traps': ['at my current location', 'in: '],
                'safety concerns': ['at my current location', 'in: '],
                'overcrowded spots': ['at my current location', 'in: '],
                'expensive activities': ['at my current location', 'in: '],
                'inconveniences for travelers': ['at my current location', 'in: '],
                'cultural misunderstandings': ['at my current location', 'in: '],
                'transportation hassles': ['at my current location', 'in: '],
            },
            'expensive': {
                'luxury experiences': ['at my current location', 'in: '],
                'shopping districts': ['at my current location', 'in: '],
                'cultural activities': ['at my current location', 'in: '],
                'modes of transportation': ['at my current location', 'in: '],
                'dining options': ['at my current location', 'in: '],
                'ways to enjoy nature': ['at my current location', 'in: '],
            },
        },
        'are the oldest': {
            'still existing': {
                'landmarks': ['at my current location', 'in: '],
                'restaurants': ['at my current location', 'in: '],
                'public transportation options': ['at my current location', 'in: '],
                'hotels': ['at my current location', 'in: '],
                'churches': ['at my current location', 'in: '],
                'bridges': ['at my current location', 'in: '],
                'historical sites': ['at my current location', 'in: '],
                'tourist attractions': ['at my current location', 'in: '],
            },
            'known': {
                'historical documents': ['at my current location', 'in: '],
                'anecdotes': ['at my current location', 'in: '],
            },
        },
        'is the reason': {
            'for the perceived': {
                'wealth': ['at my current location', 'in: '],
                'cleanliness': ['at my current location', 'in: '],
                'punctuality': ['at my current location', 'in: '],
                'open-mindedness': ['at my current location', 'in: '],
                'safety': ['at my current location', 'in: '],
            },
            'for lack of': {
                'wealth': ['at my current location', 'in: '],
                'cleanliness': ['at my current location', 'in: '],
                'punctuality': ['at my current location', 'in: '],
                'open-mindedness': ['at my current location', 'in: '],
                'safety': ['at my current location', 'in: '],
            },
        },
    },
    'How': {
        'do I best': {
            'engage': {
                'with the history and heritage': ['at my current location', 'in: '],
                'in culinary experiences': ['at my current location', 'in: '],
                'with traditions': ['at my current location', 'in: '],
                'with nature': ['at my current location', 'in: '],
            },
            'navigate': {
                'the local cuisine': ['at my current location', 'in: '],
                'the cultural events': ['at my current location', 'in: '],
                'the local transportation options': ['at my current location', 'in: '],
                'nature around me': ['at my current location', 'in: '],
            },
            'plan': {
                'an hour': ['at my current location', 'in: '],
                'six hours': ['at my current location', 'in: '],
                'a day': ['at my current location', 'in: '],
                'a weekend': ['at my current location', 'in: '],
                'a week': ['at my current location', 'in: '],
            },

        },
        'do locals': {
            'celebrate': {
                'religious festivals': ['at my current location', 'in: '],
                'historic cultural events': ['at my current location', 'in: '],
                'Christmas': ['at my current location', 'in: '],
                'traditional cuisine': ['at my current location', 'in: '],
                'significant life events': ['at my current location', 'in: '],
            },
            'address': {
                'each other': ['at my current location', 'in: '],
                'verbally foreigners': ['at my current location', 'in: '],
                'government authorities': ['at my current location', 'in: '],
                'the police': ['at my current location', 'in: '],
            },
            'enjoy': {
                'music': ['at my current location', 'in: '],
                'Holiday days': ['at my current location', 'in: '],
                'evenings': ['at my current location', 'in: '],
                'the art scene': ['at my current location', 'in: '],
                'nature': ['at my current location', 'in: '],
            },

        },
    },
}

export default questionWords;
