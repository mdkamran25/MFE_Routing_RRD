import { NavigateFunction } from 'react-router-dom';  // Import NavigateFunction type for better typing

// Utility function for navigation
export const navigateTo = (navigate: NavigateFunction, path: string) => {
  const isStandalone = !window.location.pathname.includes("/shop");

  if (isStandalone) {
    navigate(path); // For standalone, no base path needed
  } else {
    navigate(`/shop${path}`); // For running inside the host app
  }
};