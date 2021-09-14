import React from 'react';
import { Helmet } from 'react-helmet';

const MetaDecorator = () => {
  return (
    <Helmet>
      <title>Contentful Blog</title>
      <meta name="title" property="og:title" content="Contentful Blog" />
      <meta property="og:type" content="Website" />
      <meta
        name="image"
        property="og:image"
        content="https://live.staticflickr.com/65535/51473870829_7326a8fe99_c.jpg"
      />
      <meta
        name="description"
        property="og:description"
        content="Personal Blog built with Gatsby, Contentful and GraphQL"
      />
      <meta name="author" content="Ruben Garcia Bri" />
    </Helmet>
  );
};

export default MetaDecorator;
