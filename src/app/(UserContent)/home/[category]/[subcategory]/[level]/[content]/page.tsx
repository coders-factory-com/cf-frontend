import ContentSelector from '@/components/ContentSelector';
import ContentPage from '@/components/wrappers/ContentPage';
import React from 'react';

interface SearchProps {
  searchParams: {
    selectedCard: string;
  };
}

const page = async ({ searchParams }: SearchProps) => {
  return (
    <ContentPage>
      <ContentSelector selectedCard={searchParams.selectedCard ?? 'Theory'} />
    </ContentPage>
  );
};

export default page;
