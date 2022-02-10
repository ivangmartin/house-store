import { House } from './house';

export interface DB {
  houses: House[];
}

export const db: DB = {
  houses: [
    {
      _id: '1',
      name: 'Cortijo Paco Perez',
      summary: 'Maravilloso cortijo en la vega de Granada',
      images: {
        picture_url: 'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
      },
      address: {
        street: 'Calle Olivos nº5, Granada',
        country: 'Spain',
        market: 'Zaidin',
      },
      bedrooms: 4,
      beds: 6,
      bathrooms: 3,
      number_of_reviews: 2,
      reviews: [
        {
          _id: '01',
          date: new Date('2022-01-21'),
          reviewer_name: 'Paquito',
          comments: 'Estupenda casa. Altamente recomendable',
        },
        {
          _id: '02',
          date: new Date('2022-02-01'),
          reviewer_name: 'Clara',
          comments: 'Estancia muy buena. Dias estupendos',
        }
      ],
    },
    {
      _id: '2',
      name: 'Caserio RioFrio',
      summary: 'Agrupacion de viviendas que forman un caserío a la orilla del Rio Durcal',
      images: {
        picture_url: 'https://a0.muscache.com/im/pictures/5b408b9e-45da-4808-be65-4edc1f29c453.jpg?aki_policy=large',
      },
      address: {
        street: 'Calle Agua n8, Rio Frío, Granada',
        country: 'Spain',
        market: 'Rio Frio',
      },
      bedrooms: 9,
      beds: 14,
      bathrooms: 6,
      number_of_reviews: 2,
      reviews: [
        {
          _id: '01',
          date: new Date('2022-01-02'),
          reviewer_name: 'Carmen',
          comments: 'Casa sucia, no nos gustó',
        },
        {
          _id: '02',
          date: new Date('2021-12-01'),
          reviewer_name: 'Carlos',
          comments: 'El entorno genial, pero la casa deja mucho que desear',
        }
      ],
    }

  ],
};
