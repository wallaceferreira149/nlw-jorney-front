import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripDetails } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/trips/:tripId",
    element: <TripDetails />,
  },
  {
    path: "/",
    element: <CreateTripPage />,
  },
]);
export function App() {
  return (
    <main className="">
      <RouterProvider router={router} />
    </main>
  )
}
