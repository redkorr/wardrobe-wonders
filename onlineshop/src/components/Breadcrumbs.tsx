import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathNamePartsArray = pathname.split('/').slice(1);
  const linkTo = (depth: number) => `/${pathNamePartsArray.slice(0, depth + 1).join('/')}`;
  return (
    <div className="flex">
      {pathNamePartsArray.map((pathParam, index) => (
        <React.Fragment key={index}>
          <NavLink
            to={pathParam === 'products' ? '/' : linkTo(index)}
            className="hover:underline"
          >
            {pathParam}
          </NavLink>
          {index !== pathNamePartsArray.length - 1 && <span>&nbsp;&gt;&nbsp;</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
