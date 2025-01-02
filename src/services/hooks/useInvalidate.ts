import { useQueryClient } from "@tanstack/vue-query";

export function useInvalidate() {
  const queryClient = useQueryClient();

  function invalidateAllQueries() {
    queryClient.invalidateQueries();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function invalidateQuery(...key: Array<any>) {
    queryClient.invalidateQueries({ queryKey: key });
  }

  return { queryClient, invalidateAllQueries, invalidateQuery };
}
