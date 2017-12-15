const selectGuidesByFilter: (
  query: GuideQuery,
) => Promise<Guide[]> = query => {
  const filters = [
    createFilterByClinic(query),
    createFilterByDepartment(query),
    createFilterByDoctor(query),
  ];

  return Promise.resolve(Guides.filter(i => filters.every(f => f(i))));
};


/////////////////////////
// Tell the difference //
/////////////////////////


const selectGuidesByFilter = (
  query: GuideQuery,
): Promise<Guide[]> => {
  const filters = [
    createFilterByClinic(query),
    createFilterByDepartment(query),
    createFilterByDoctor(query),
  ];

  return Promise.resolve(Guides.filter(i => filters.every(f => f(i))));
};
