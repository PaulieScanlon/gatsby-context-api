# gatsby-context-api

Example for how to use React's Context API with Gatsby

- [Gatsby Cloud Preview](https://gatsbycontextapi.gtsb.io/)

## SSR Valhalla Setup

Use Apollo Studio to construct a query for use in `getServerData`

### Apollo Studio

https://studio.apollographql.com/sandbox/explorer

### Sandbox URL

https://valhallaexamples-prod.staging-valhalla-api.io/

### Page

```javascript
import React from 'react';
import { createClient } from '@urql/core';

const Page = ({ serverData }) => {
  console.log(serverData);
  return null;
};

export const getServerData = async () => {
  const client = createClient({
    url: 'https://valhallaexamples-prod.staging-valhalla-api.io/',
    requestPolicy: 'network-only'
  });

  const query = `
  {
    allContentfulAnimal(limit: 35)  {
      nodes {
        name
        animalType
        image {
          url
        }
      }
    }
  }
  `;

  const { data } = await client.query(query).toPromise();

  return {
    props: {
      data
    }
  };
};

export default Page;
```
