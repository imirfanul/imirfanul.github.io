export const testUniqueness = <T>(allData: T[], uKeyFn: (t: T) => any) => {
  const result = {
    error: "",
    duplicates: []
  };
  allData.forEach((data, i, alldata) => {
    if (alldata.filter(p => uKeyFn(p) === uKeyFn(data)).length !== 1) {
      result.error = "Duplicate key";
       result.duplicates.push(data as never);
    }
  });
  return result;
};
