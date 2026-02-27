import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { FormSubmission, PrivacyPolicy, ResourcesContent } from '../backend';

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<FormSubmission[]>({
    queryKey: ['submissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetPrivacyPolicy() {
  const { actor, isFetching } = useActor();

  return useQuery<PrivacyPolicy | null>({
    queryKey: ['privacyPolicy'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getPrivacyPolicy();
    },
    enabled: !!actor && !isFetching,
    staleTime: 0,
    gcTime: 0,
  });
}

export function useGetResourcesContent() {
  const { actor, isFetching } = useActor();

  return useQuery<ResourcesContent>({
    queryKey: ['resourcesContent'],
    queryFn: async () => {
      if (!actor) return { content: '', lastUpdated: BigInt(0) };
      return actor.getResourcesContent();
    },
    enabled: !!actor && !isFetching,
  });
}
