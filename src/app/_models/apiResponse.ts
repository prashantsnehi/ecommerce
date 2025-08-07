export interface ApiResponse<T> {
    statusCode: string; // e.g., "success" or "error"
    message: string; // e.g., "Data retrieved successfully" or "An error occurred"
    data: T; // The actual data returned by the API
}