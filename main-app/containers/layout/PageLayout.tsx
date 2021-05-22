import React from 'react';

function PageLayout(props) {
  return <div className="py-4 w-screen h-screen flex justify-center items-start">{props.children}</div>;
}

export default PageLayout;
