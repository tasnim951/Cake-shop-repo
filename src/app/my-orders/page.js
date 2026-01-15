"use client";

import PrivateRoute from "@/components/PrivateRoute";

function MyOrdersPage() {
  return (
    <div className="pt-32">
      <h1 className="text-3xl font-bold">My Orders</h1>
      <p>Your orders will appear here.</p>
    </div>
  );
}

export default function MyOrdersWrapper() {
  return (
    <PrivateRoute>
      <MyOrdersPage />
    </PrivateRoute>
  );
}
