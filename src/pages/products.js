import React from 'react';
import { createClient } from '@urql/core';

const Page = ({
  serverData: {
    data: {
      allShopifyProductVariant: { nodes }
    }
  }
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1>Products</h1>
        <p className="m-0">allShopifyProductVariant</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {nodes.map((node, index) => {
          const {
            title,
            price,
            product: {
              featuredImage: { transformedSrc }
            }
          } = node;
          return (
            <div key={index} className="border border-darker-800 rounded-lg p-4 bg-darker-700 flex items-center gap-4 ">
              <img src={transformedSrc} alt={title} className="overflow rounded-lg w-24 h-24 shrink-0" />
              <div>
                <h2 className="m-0 text-2xl sm:text-3xl">{title}</h2>
                <p className="m-0 capitalize">{`$${price}`}</p>
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
    allShopifyProductVariant {
      nodes {
        price
        title
        product {
          featuredImage {
            transformedSrc
          }
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
