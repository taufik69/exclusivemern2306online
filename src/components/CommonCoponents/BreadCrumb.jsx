import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Map of route paths to breadcrumb labels
  const routeMap = {
    "/": "Home",
    "/about": "About",
    "/profile": "Profile",
    "/profile/settings": "Settings",
  };

  // Generate breadcrumb paths
  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbPaths = pathnames.map((_, index) => {
    const path = `/${pathnames.slice(0, index + 1).join("/")}`;
    return { path, label: routeMap[path] || "Unknown" };
  });

  return (
    <nav aria-label="breadcrumb">
      <ol style={{ listStyle: "none", display: "flex", gap: "8px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {breadcrumbPaths.map((breadcrumb, index) => (
          <li key={breadcrumb.path}>
            {index > 0 && <span> / </span>}
            <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
