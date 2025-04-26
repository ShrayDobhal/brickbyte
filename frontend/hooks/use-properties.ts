import { useQuery } from '@tanstack/react-query';
import { getProperties, getPropertyById, Property } from '@/lib/properties';

export const useProperties = () => {
  return useQuery<Property[]>({
    queryKey: ['properties'],
    queryFn: getProperties,
  });
};

export const useProperty = (id: string) => {
  return useQuery<Property>({
    queryKey: ['property', id],
    queryFn: () => getPropertyById(id),
    enabled: !!id,
  });
}; 