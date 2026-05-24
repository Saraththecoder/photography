import React from 'react';
import Gallery from '../sections/Gallery';

export const GalleryPage = () => {
  return (
    <div className="w-full pt-16 bg-matte-black">
      {/* Renders the full portfolio gallery grid with Lightbox */}
      <Gallery />
    </div>
  );
};

export default GalleryPage;
