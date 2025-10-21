import { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Alert } from "antd";

interface Props {
  children: ReactNode;
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <Alert
      message="An Error Has Occurred"
      description={error?.message || "An unexpected error occurred."}
      type="error"
      showIcon
    />
  );
}

function ErrorBoundary({ children }: Props) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error("ErrorBoundary caught an error: ", error, errorInfo);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
