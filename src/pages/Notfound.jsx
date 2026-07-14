import { Link } from "react-router-dom";

export const Notfound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="max-w-md text-center">
        <p className="section-kicker">404</p>
        <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="cosmic-button mt-6">
          Back to Home
        </Link>
      </div>
    </main>
  );
};
