import { Routes, Route, Navigate } from 'react-router-dom';

interface SharedRoutesProps {
  basePath: string;
  children: React.ReactNode;
}

const SharedRoutes = ({ basePath, children }: SharedRoutesProps) => {
  const isStandalone = !window.location.pathname.includes(basePath);
console.log({basePath, isStandalone});
  return (
    <Routes>
      {isStandalone ? (
        <Route path="*" element={<Navigate to={basePath} replace />} />
      ) : (
        <Route path="*" element={<>{children}</>} />
      )}
    </Routes>
  );
};

export default SharedRoutes;
