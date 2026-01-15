"use client";

import PrivateRoute from "@/components/PrivateRoute";

function OrderPage() {
  return (
    <div className="pt-32">
      <h1 className="text-3xl font-bold">Order Page</h1>
    </div>
  );
}

export default function OrderPageWrapper() {
  return (
    <PrivateRoute>
      <OrderPage />
    </PrivateRoute>
  );
}
