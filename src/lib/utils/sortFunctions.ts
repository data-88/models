// sort by rating
export const sortByRating = (array: any[]) => {
  const sortedArray = array.sort(
    (a:any, b:any) =>
      new Rating(b.data.rating && b.data.rating) -
      new Rating(a.data.rating && a.data.rating)
  );
  return sortedArray;
};
