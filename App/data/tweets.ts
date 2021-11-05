// https://avatars.dicebear.com/api/micah/random-peep.svg

import { IMAGES } from '../constants/theme'

const tweets = [
  {
    id: 't1',
    user: {
      id: 'u1',
      username: 'SavinVadim_',
      name: 'Vadim Savin',
      // image: 'https://i.imgur.com/IoJeHIw.png',
      // iamge: IMAGES.demo_profile_uri,
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: 't2',
    user: {
      id: 'u1',
      username: 'SavinVadim_',
      name: 'Vadim Savin',
      // image: 'https://i.imgur.com/IoJeHIw.png',
      iamge: IMAGES.demo_profile_uri,
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't3',
    user: {
      id: 'u1',
      username: 'SavinVadim_',
      name: 'Vadim Savin',
      image: 'https://i.imgur.com/IoJeHIw.png',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content: 'Hello World',
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't4',
    user: {
      id: 'u1',
      username: 'SavinVadim_',
      name: 'Vadim Savin',
      image: 'https://i.imgur.com/IoJeHIw.png',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
]

export default tweets
