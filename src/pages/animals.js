import React from 'react';
import { createClient } from '@urql/core';

const Page = ({
  serverData: {
    data: {
      allContentfulAnimal: { nodes }
    }
  }
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1>Animals</h1>
        <p className="m-0">allContentfulAnimal</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {nodes.map((node, index) => {
          const {
            name,
            animalType,
            image: { url }
          } = node;
          return (
            <div key={index} className="border border-darker-800 rounded-lg p-4 bg-darker-700 flex items-center gap-4 ">
              <img src={url} alt={name} className="overflow rounded-lg w-24 h-24 shrink-0" />
              <div>
                <h2 className="m-0 text-2xl sm:text-3xl">{name}</h2>
                <p className="m-0 capitalize">{animalType}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
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
