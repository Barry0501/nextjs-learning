import { ApiResponse } from "@/core/domain/models/ApiResponse";

export const fetcher = (url: string): Promise<ApiResponse> =>
  fetch(url).then((res) => res.json());
