"use client";

import { ApiResponse } from "@/core/domain/models/ApiResponse";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export function GET_USERS_URL() {
  return "https://randomuser.me/api/?results=10";
}

export function useFetchUsers(page: number) {
  // Poll every 2 seconds
  const options = {
    // refreshInterval: 2000,
    revalidateOnFocus: false, // Disable revalidation on focus to prevent the page from refreshing,
  };

  let { data, error, isLoading, mutate } = useSWR<ApiResponse>(
    "https://randomuser.me/api/?results=10&page=" + page,
    fetcher,
    options
  );
  return {
    data,
    isLoading,
    isError: error,
    mutate: mutate,
  };
}
